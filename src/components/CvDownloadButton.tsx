"use client";

import { useState } from "react";

type CvDownloadButtonProps = {
  className?: string;
  href: string;
  filename: string;
};

type DownloadStatus = "idle" | "saving" | "requested" | "saved" | "error";

export function CvDownloadButton({ className, href, filename }: CvDownloadButtonProps) {
  const [status, setStatus] = useState<DownloadStatus>("idle");

  const statusMessage: Record<DownloadStatus, string> = {
    idle: "",
    saving: "Saving PDF to Downloads...",
    requested: "Download requested. Check your browser Downloads folder.",
    saved: "Saved to Downloads.",
    error: "Could not save the PDF. Try a full browser download.",
  };

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (process.env.NODE_ENV === "production") {
      setStatus("requested");
      window.setTimeout(() => setStatus("idle"), 3600);
      return;
    }

    event.preventDefault();
    if (status === "saving") return;

    setStatus("saving");

    try {
      const response = await fetch(href, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      setStatus("saved");
      window.setTimeout(() => setStatus("idle"), 3600);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3600);
    }
  };

  return (
    <>
      <a
        className={className}
        href={href}
        download={filename}
        rel="noopener"
        aria-busy={status === "saving"}
        data-status={status}
        onClick={handleClick}
      >
        {status === "saving" ? "Saving..." : "Download PDF"}
      </a>
      {statusMessage[status] && (
        <span
          aria-live="polite"
          style={{
            color: "var(--neutral-on-background-weak)",
            fontSize: "var(--font-size-body-s)",
            lineHeight: 1.4,
            textAlign: "center",
          }}
        >
          {statusMessage[status]}
        </span>
      )}
    </>
  );
}

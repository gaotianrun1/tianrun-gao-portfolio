"use client";

import { Icon } from "@once-ui-system/core";
import { useState } from "react";
import { IconName } from "@/resources/icons";

type SocialActionLinkProps = {
  name: string;
  icon: IconName;
  link: string;
  email: string;
  className?: string;
  showLabel?: boolean;
};

export function SocialActionLink({
  name,
  icon,
  link,
  email,
  className,
  showLabel = false,
}: SocialActionLinkProps) {
  const [copied, setCopied] = useState(false);
  const isEmail = name === "Email";
  const label = isEmail && copied ? "Copied" : name;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const content = (
    <>
      <Icon name={icon} size="s" />
      {showLabel && <span>{label}</span>}
    </>
  );

  if (isEmail) {
    return (
      <button
        type="button"
        className={className}
        aria-label={`Copy ${email}`}
        aria-pressed={copied}
        title={copied ? "Email copied" : `Copy ${email}`}
        data-copied={copied ? "true" : "false"}
        onClick={copyEmail}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={className}
      href={link}
      aria-label={name}
      title={name}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return;
        }
        event.preventDefault();
        window.location.assign(link);
      }}
    >
      {content}
    </a>
  );
}

"use client";

import { Icon, useToast } from "@once-ui-system/core";
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
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);
  const isEmail = name === "Email";
  const label = isEmail && copied ? "Copied" : name;

  const writeToClipboard = async (value: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return true;
      } catch {
        // Fall through to the textarea copy path for stricter embedded browsers.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";

    let appended = false;
    try {
      document.body.appendChild(textarea);
      appended = true;
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      if (appended) {
        document.body.removeChild(textarea);
      }
    }
  };

  const copyEmail = async () => {
    const didCopy = await writeToClipboard(email);

    if (didCopy) {
      setCopied(true);
      addToast({
        variant: "success",
        message: `Email copied: ${email}`,
      });
      window.setTimeout(() => setCopied(false), 1600);
      return;
    }

    addToast({
      variant: "danger",
      message: `Could not copy email. Email: ${email}`,
    });
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

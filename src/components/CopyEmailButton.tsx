"use client";

import { useEffect, useState } from "react";

import { CheckIcon, CopyIcon } from "./icons";

type Props = {
  email: string;
  labels: { copy: string; copied: string };
};

export function CopyEmailButton({ email, labels }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked (permissions, insecure context); the email is visible next to the button.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent print:hidden"
    >
      {copied ? (
        <CheckIcon width={14} height={14} className="text-accent" />
      ) : (
        <CopyIcon width={14} height={14} />
      )}
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  );
}

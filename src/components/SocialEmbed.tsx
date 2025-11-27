"use client";

import { useEffect } from "react";

export function InstagramEmbed({ url, maxWidth = 540 }: { url: string; maxWidth?: number }) {
  useEffect(() => {
    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if ((window).instgrm?.Embeds) {
          resolve();
          return;
        }
        const existing = document.querySelector<HTMLScriptElement>(
          'script[src="https://www.instagram.com/embed.js"]'
        );
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          return;
        }
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    ensureScript().then(() => {
      try {
        (window).instgrm?.Embeds?.process?.();
      } catch {}
    });
  }, [url]);

  return (
    <div className="my-8" style={{ maxWidth, margin: "1rem auto" }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#fff", border: 0 }}
      />
    </div>
  );
}
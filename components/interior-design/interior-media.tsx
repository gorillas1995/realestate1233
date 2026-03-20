"use client";

/**
 * Renders feature media: YouTube (click-to-play iframe), local MP4, or static image.
 * Keeps heavy iframes and autoplay off until the user opts in.
 */

import { useState } from "react";
import Image from "next/image";
import type { InteriorFeatureMedia } from "@/lib/interior-design-features-media";
import { Play } from "lucide-react";

type InteriorMediaProps = {
  media: InteriorFeatureMedia;
  /** Accessible name for images / video (from feature title) */
  label: string;
  playVideoAria: string;
  videoPreviewAlt: string;
  className?: string;
};

/** Extracts YouTube video id from /embed/ID URLs for thumbnail API. */
function youtubeIdFromEmbed(url: string): string | null {
  const m = url.match(/\/embed\/([^?&/]+)/);
  return m?.[1] ?? null;
}

export function InteriorMedia({
  media,
  label,
  playVideoAria,
  videoPreviewAlt,
  className = "",
}: InteriorMediaProps) {
  const [playYoutube, setPlayYoutube] = useState(false);

  if (media.kind === "image") {
    return (
      <div className={`relative h-full min-h-[220px] w-full overflow-hidden bg-secondary sm:min-h-[280px] lg:min-h-[420px] ${className}`}>
        <Image
          src={media.src}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <div className={`relative h-full min-h-[220px] w-full overflow-hidden bg-black sm:min-h-[280px] lg:min-h-[420px] ${className}`}>
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={media.poster}
          aria-label={label}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  const id = youtubeIdFromEmbed(media.embedUrl);
  const thumb = id
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : null;

  return (
    <div
      className={`relative h-full min-h-[220px] w-full overflow-hidden bg-black sm:min-h-[280px] lg:min-h-[420px] ${className}`}
    >
      {!playYoutube && thumb ? (
        <button
          type="button"
          className="group absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-black p-0"
          onClick={() => setPlayYoutube(true)}
          aria-label={`${playVideoAria}: ${label}`}
        >
          {/* YouTube CDN: plain img avoids Next remotePatterns for img.youtube.com */}
          <img
            src={thumb}
            alt={`${videoPreviewAlt} — ${label}`}
            className="absolute inset-0 size-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform group-hover:scale-105 md:size-20">
            <Play className="ml-1 size-7 fill-current md:size-8" aria-hidden />
          </span>
        </button>
      ) : playYoutube ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${media.embedUrl}?autoplay=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-white/70">
          {label}
        </div>
      )}
    </div>
  );
}

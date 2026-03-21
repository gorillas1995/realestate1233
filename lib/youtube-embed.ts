/**
 * Normalizes common YouTube URLs (Shorts, watch, youtu.be, embed) to a standard embed src.
 */

const ID_PATTERN = /[\w-]{11}/;

/** Extracts 11-char video id from path or query. */
function extractIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url.trim(), "https://www.youtube.com");
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const seg = u.pathname.split("/").filter(Boolean)[0];
      return seg && ID_PATTERN.test(seg) ? seg.slice(0, 11) : null;
    }

    if (host.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v && ID_PATTERN.test(v)) return v.slice(0, 11);

      const parts = u.pathname.split("/").filter(Boolean);
      const embedIdx = parts.indexOf("embed");
      if (embedIdx >= 0 && parts[embedIdx + 1] && ID_PATTERN.test(parts[embedIdx + 1]!)) {
        return parts[embedIdx + 1]!.slice(0, 11);
      }
      const shortsIdx = parts.indexOf("shorts");
      if (shortsIdx >= 0 && parts[shortsIdx + 1] && ID_PATTERN.test(parts[shortsIdx + 1]!)) {
        return parts[shortsIdx + 1]!.slice(0, 11);
      }
      const liveIdx = parts.indexOf("live");
      if (liveIdx >= 0 && parts[liveIdx + 1] && ID_PATTERN.test(parts[liveIdx + 1]!)) {
        return parts[liveIdx + 1]!.slice(0, 11);
      }
    }
  } catch {
    return null;
  }
  return null;
}

/** Returns https embed URL or null if the string is not a recognizable YouTube link. */
export function getYouTubeEmbedSrc(url: string): string | null {
  if (!url?.trim()) return null;
  const id = extractIdFromUrl(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}

"use client";

import Image from "next/image";

const urlEndpoint = "https://ik.imagekit.io/sigetscapital";

function buildImageKitUrl(
  path: string,
  width: number,
  height: number,
  quality = 80,
  format = "webp"
): string {
  const pathClean = path.startsWith("/") ? path.slice(1) : path;
  // Encode each path segment so spaces and special characters resolve (e.g. xirgu-97-1/Scene 192.png)
  const encodedPath = pathClean
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  const endpoint = urlEndpoint.endsWith("/") ? urlEndpoint : `${urlEndpoint}/`;
  return `${endpoint}${encodedPath}?tr=w-${width},h-${height},q-${quality},f-${format}`;
}

export default function ImageKitImage({
  path,
  alt,
  width,
  height,
  className,
  fill,
  style,
  onClick,
}: {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const w = width ?? 400;
  const h = height ?? 300;
  const src = buildImageKitUrl(path, w, h);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        onClick={onClick}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={className}
      style={style}
      onClick={onClick}
      loading="lazy"
    />
  );
}

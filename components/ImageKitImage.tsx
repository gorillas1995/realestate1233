"use client";

import { IKImage } from "imagekitio-next";

const urlEndpoint = "https://ik.imagekit.io/sigetscapital";

export default function ImageKitImage({
  path,
  alt,
  width,
  height,
}: {
  path: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      transformation={[
        {
          width,
          height,
          quality: 80,
          format: "webp",
        },
      ]}
    />
  );
}

/**
 * Non-translatable media paths for interior design feature stories.
 * Order must match `translations[lang].interiorDesignPage.features` indices.
 */

export type InteriorFeatureMedia =
  | { kind: "image"; src: string }
  | { kind: "youtube"; embedUrl: string }
  | { kind: "video"; src: string; poster?: string };

export const INTERIOR_FEATURE_MEDIA: InteriorFeatureMedia[] = [
  { kind: "image", src: "/lift-sticla.jpg" },
  { kind: "youtube", embedUrl: "https://www.youtube.com/embed/vzRmFYQrqMs" },
  { kind: "youtube", embedUrl: "https://www.youtube.com/embed/0pGht6Bso-o" },
  {
    kind: "video",
    src: "/hero-dessktop.mp4",
    poster: "/canapea-profil.jpg",
  },
  { kind: "image", src: "/tavan-aer.png" },
  { kind: "image", src: "/corian.jpg" },
  { kind: "image", src: "/pardoseala.png" },
  { kind: "image", src: "/xirgu69-3.jpg" },
  { kind: "youtube", embedUrl: "https://www.youtube.com/embed/z8BPOBTYw1c" },
];

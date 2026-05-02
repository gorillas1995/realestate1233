// =======================
// PROPERTIES
// =======================

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: string;
  category: "house" | "apartment" | "land";
  image: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  description: string;
  descriptionEs?: string; // Spanish description (optional)
  amenities: string[];
  gallery: string[];
  // New fields for property details
  address?: string;
  landArea?: string; // m²
  totalBuiltArea?: string; // m²
  basementArea?: string; // m²
  groundFloorArea?: string; // m²
  upperFloorArea?: string; // m²
  porchesArea?: string; // m²
  terraceArea?: string; // m²
  poolArea?: string; // m²
  // Button links
  floorPlansImage?: string;
  floorPlans?: string[]; // Array of floor plan images
  virtualTourUrl?: string;
  videoUrl?: string;
  /** True: show Video control; opens placeholder until videoUrl is set (e.g. new tour pending). */
  videoPending?: boolean;
  /** WGS84 — used for property gallery map modal (see OSM Nominatim notes per listing). */
  mapLatitude?: number;
  mapLongitude?: number;
  imageKitGallery?: string[]; // First 3 images for hero/gallery
  imageKitRenders?: string[]; // All images for "Experience Every Detail" / View all renders
}

// Shared amenities for all La Plana properties (architect-designed residences)
const LA_PLANA_AMENITIES = [
  "Interior glass elevator",
  "Heated swimming pool with linear perimeter LED lighting",
  "No-threshold, motorized, sliding glazing with access systems via code, remote, or fingerprint",
  "All-glazed surfaces feature 80% opacity motorized ZIP exterior shutters",
  "Garage doors made from smoked, reflective glass",
  "Pivoting metal entrance door (not swinging), with electronic access through 8 different codes and fingerprint",
  "Underfloor heating, multi-zone",
  "Advanced perimeter air-conditioning via 2m-long grilles, not via standard vents (superior comfort)",
  "RAINWATER collection systems across the yard (special concrete with aluminum grating)",
  "Porcelain stoneware finishes (no painted surfaces)",
  "CORIAN sanitary finishes (not ceramic)",
  "All ceilings have integrated magnetic track LED lighting (recessed in plasterboard, not surface-mounted)",
  "High-impedance ceiling speakers installed every 5 meters",
  "Linear, hidden LED step lighting for every staircase",
  "Glass balustrades floor-fastened and illuminated with hidden LED in the metal base—no post-mounts",
  "Architect-designed homes with distinct special shapes",
  "45-degree, tubular aluminum exterior fencing",
  "Interior can be delivered fully furnished as per renders (on request)",
];

/** Standard villa price; Brisa (Xirgu 49) is double — twin house on double plot. */
const PRICE_EUR_STANDARD = "€2,700,000";
const PRICE_EUR_BRISA_DOUBLE = "€5,400,000";

/** La Plana Horizon (Xirgu 97) — ImageKit folder `xirgu-97-1`; order matches client delivery. */
const LA_PLANA_HORIZON_IMAGEKIT_PATHS: string[] = [
  "xirgu-97-1/Scene 192.png",
  "xirgu-97-1/Scene 86.png",
  "xirgu-97-1/Scene 107.png",
  "xirgu-97-1/Scene 120.png",
  "xirgu-97-1/49street.png",
  "xirgu-97-1/Scene 174.png",
  "xirgu-97-1/Scene 82.png",
  "xirgu-97-1/Scene 90.png",
  "xirgu-97-1/Scene 170.png",
  "xirgu-97-1/Pan_timelapse.png",
  "xirgu-97-1/Scene 167.png",
  "xirgu-97-1/Scene 199.png",
  "xirgu-97-1/moon3.png",
  "xirgu-97-1/moon.png",
  "xirgu-97-1/Scene 193.png",
  "xirgu-97-1/Scene 108.png",
  "xirgu-97-1/nightmoon1.png",
  "xirgu-97-1/Roughtness.png",
  "xirgu-97-1/Scene 165.png",
  "xirgu-97-1/Scene 191.png",
  "xirgu-97-1/Scene 173.png",
  "xirgu-97-1/tea.png",
  "xirgu-97-1/Entrace_Door_02.png",
  "xirgu-97-1/Balcony3.png",
  "xirgu-97-1/Balcony1 .png",
  "xirgu-97-1/mooooon.png",
  "xirgu-97-1/Balcony2.png",
];

/** Dalmases 31 — ImageKit folder `Dalmases-31`; order matches client delivery. */
const DALMASES_31_IMAGEKIT_PATHS: string[] = [
  "/Dalmases-31/Dalmases31_Scene 49.png",
  "/Dalmases-31/Dalmases31_Scene 50.png",
  "/Dalmases-31/Dalmases31_moon.png",
  "/Dalmases-31/Dalmases31_Scene 69.png",
  "/Dalmases-31/Dalmases31_Scene 83.png",
  "/Dalmases-31/Dalmases31_Scene 67.png",
  "/Dalmases-31/Dalmases31_Scene 59.png",
  "/Dalmases-31/Dalmases31_Scene 45.png",
  "/Dalmases-31/Dalmases31_Scene 66.png",
  "/Dalmases-31/Dalmases31_Scene 84.png",
  "/Dalmases-31/Dalmases31_Scene 70.png",
  "/Dalmases-31/Dalmases31_Scene 47.png",
  "/Dalmases-31/Dalmases31_Scene 46.png",
  "/Dalmases-31/Dalmases31_Scene 71.png",
  "/Dalmases-31/Dalmases31_Scene 48.png",
];

/** Floor plans from ImageKit CSV export (`/schite-case/*`). */
const PLANS_XIRGU_13: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu13-1.png?updatedAt=1774962352176",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu13-2.png?updatedAt=1774962352036",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu13-3.png?updatedAt=1774962352153",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu13-4.png?updatedAt=1774962352083",
];

const PLANS_XIRGU_69: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu69-1.png?updatedAt=1774962352152",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu69-2.png?updatedAt=1774962352146",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu69-3.png?updatedAt=1774962352190",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu69-4.png?updatedAt=1774962352094",
];

const PLANS_XIRGU_71: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu71-1.png?updatedAt=1774962352023",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu71-2.png?updatedAt=1774962351965",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu71-3.png?updatedAt=1774962352093",
];

const PLANS_XIRGU_73: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu73-1.png?updatedAt=1774962352046",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu73-2.png?updatedAt=1774962352145",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu73-3.png?updatedAt=1774962352185",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu73-4.png?updatedAt=1774962352109",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu73-5.png?updatedAt=1774962352187",
];

const PLANS_XIRGU_97: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-1.png?updatedAt=1774962352168",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-2.png?updatedAt=1774962352172",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-3.png?updatedAt=1774962352107",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-4.png?updatedAt=1774962352131",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-5.png?updatedAt=1774962352019",
  "https://ik.imagekit.io/sigetscapital/schite-case/xirgu97-6.png?updatedAt=1774962352101",
];

const PLANS_GARAF_45: string[] = [
  "https://ik.imagekit.io/sigetscapital/schite-case/garaf45-1.png?updatedAt=1774962352055",
  "https://ik.imagekit.io/sigetscapital/schite-case/garaf45-2.png?updatedAt=1774962352116",
  "https://ik.imagekit.io/sigetscapital/schite-case/garaf45-3.png?updatedAt=1774962352164",
  "https://ik.imagekit.io/sigetscapital/schite-case/garaf45-4.png?updatedAt=1774962352112",
  "https://ik.imagekit.io/sigetscapital/schite-case/garaf45-5.png?updatedAt=1774962352025",
];

export const properties: Property[] = [
  // 1. La Plana Claror - Xirgu-13 (no visado PDF in current set — plot + listing metrics only)
  {
    id: "1",
    title: "La Plana Claror",
    slug: "la-plana-claror-xirgu-13",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/mZVFtgbcTec",
    image: "/la-plana-claror-xirgu-13/4K_Scene 17.png",
    location: "C/ Margarida Xirgu, 13 · 900 m from the sea",
    address: "C/ Margarida Xirgu, 13",
    bedrooms: 3,
    bathrooms: 3,
    area: "352.17 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "352.17 m²",
    basementArea: "96.48 m²",
    groundFloorArea: "96.78 m²",
    upperFloorArea: "100.61 m²",
    porchesArea: "58.30 m²",
    poolArea: "23.20 m²",
    description:
      "A home defined by light and openness. Spaces flow naturally, and every corner conveys clarity, balance, and a sense of a fresh beginning.",
    descriptionEs:
      "Un hogar definido por la luz y la apertura. Los espacios fluyen naturalmente, y cada rincón transmite claridad, equilibrio y una sensación de nuevo comienzo.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_XIRGU_13,
    // OSM Nominatim: Carrer de Margarida Xirgu, 13, Sitges
    mapLatitude: 41.2375029,
    mapLongitude: 1.7898252,
    imageKitGallery: [
      "/la-plana-claror-xirgu-13/4K_Scene 17.png",
      "/la-plana-claror-xirgu-13/4K_Scene 14.png",
      "/la-plana-claror-xirgu-13/4K_Scene 62.png",
    ],
    imageKitRenders: [
      "/la-plana-claror-xirgu-13/4K_Scene 17.png",
      "/la-plana-claror-xirgu-13/4K_Scene 14.png",
      "/la-plana-claror-xirgu-13/4K_Scene 62.png",
      "/la-plana-claror-xirgu-13/4K_Scene 9.png",
      "/la-plana-claror-xirgu-13/2K_AI_woman01.png",
      "/la-plana-claror-xirgu-13/2K_man 02.png",
      "/la-plana-claror-xirgu-13/2K_man4.png",
      "/la-plana-claror-xirgu-13/2K_AI_man01.png",
      "/la-plana-claror-xirgu-13/2K_Night11.png",
      "/la-plana-claror-xirgu-13/HD_Scene 44.png",
      "/la-plana-claror-xirgu-13/HD9_Scene 38.png",
      "/la-plana-claror-xirgu-13/HD_Scene 45.png",
      "/la-plana-claror-xirgu-13/HD_Scene 11.png",
      "/la-plana-claror-xirgu-13/HD_Scene 47.png",
    ],
  },
  // 2. La Plana Brisa - Xirgu-49 (XIRGU 49 VISADO.pdf)
  {
    id: "2",
    title: "La Plana Brisa",
    slug: "la-plana-brisa-xirgu-49",
    price: PRICE_EUR_BRISA_DOUBLE,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/izZNJUzRGlY",
    image: "/la-plana-brisa-xirgu-49/4K_Scene 169.png",
    location: "C/ Margarida Xirgu, 49 · Coastal environment",
    address: "Margarida Xirgu, 49",
    bedrooms: 5,
    bathrooms: 4,
    area: "555.68 m²",
    landArea: "1,235.89 m²",
    totalBuiltArea: "555.68 m²",
    basementArea: "0.00 m²",
    groundFloorArea: "226.06 m²",
    upperFloorArea: "194.88 m²",
    porchesArea: "134.74 m²",
    poolArea: "43.64 m²",
    description:
      "A refuge where air, silence, and a slower rhythm become part of everyday life. The sea breeze is felt in the atmosphere, not only in the view.",
    descriptionEs:
      "Un refugio donde el aire, el silencio y un ritmo más lento forman parte de la vida cotidiana. La brisa del mar se siente en el ambiente, no solo en la vista.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    // Carrer de Margarida Xirgu, 49
    mapLatitude: 41.2398743,
    mapLongitude: 1.7933595,
    imageKitGallery: [
      "/la-plana-brisa-xirgu-49/4K_Scene 169.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 185.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 171.png",
    ],
    imageKitRenders: [
      "/la-plana-brisa-xirgu-49/4K_Scene 169.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 185.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 171.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 174.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 164.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 190.png",
      "/la-plana-brisa-xirgu-49/4K_Scene 189.png",
      "/la-plana-brisa-xirgu-49/4K_street 49 3.png",
      "/la-plana-brisa-xirgu-49/Scene 179.png",
      "/la-plana-brisa-xirgu-49/4K_street 49 2.png",
      "/la-plana-brisa-xirgu-49/Scene 187.png",
      "/la-plana-brisa-xirgu-49/Scene 174.png",
      "/la-plana-brisa-xirgu-49/Scene 178.png",
      "/la-plana-brisa-xirgu-49/4K_49street.png",
      "/la-plana-brisa-xirgu-49/Scene 182.png",
    ],
  },
  // 3. La Plana Serena - Xirgu-65 (XIRGU 65 VISADO.pdf)
  {
    id: "3",
    title: "La Plana Serena",
    slug: "la-plana-serena-xirgu-65",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/zhAzwHmgDe0",
    image: "/la-plana-serena-xirgu-65/4K_Image.png",
    location: "C/ Margarida Xirgu, 65 · Quiet residential zone",
    address: "C/ Margarida Xirgu, 65",
    bedrooms: 3,
    bathrooms: 3,
    area: "360.45 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "360.45 m²",
    basementArea: "104.40 m²",
    groundFloorArea: "107.30 m²",
    upperFloorArea: "116.15 m²",
    porchesArea: "32.60 m²",
    poolArea: "22.35 m²",
    description:
      "Pure harmony. A residence designed for calm, privacy, and reconnection, where the noise of the world always remains at a distance.",
    descriptionEs:
      "Armonía pura. Una residencia diseñada para la calma, la privacidad y la reconexión, donde el ruido del mundo siempre permanece a distancia.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    virtualTourUrl:
      "https://app.cloudpano.com/tours/Db7v1O3xb?companyReference=2003243041302076951&sceneId=Q6RCV_0xLNC",
    // Carrer de Margarida Xirgu, 65
    mapLatitude: 41.2405799,
    mapLongitude: 1.7948738,
    imageKitGallery: [
      "/la-plana-serena-xirgu-65/4K_Image.png",
      "/la-plana-serena-xirgu-65/Atardecer a noche2.png",
      "/la-plana-serena-xirgu-65/seadream.jpeg",
    ],
    imageKitRenders: [
      "/la-plana-serena-xirgu-65/4K_Image.png",
      "/la-plana-serena-xirgu-65/Atardecer a noche2.png",
      "/la-plana-serena-xirgu-65/seadream.jpeg",
      "/la-plana-serena-xirgu-65/AI_01.png",
      "/la-plana-serena-xirgu-65/night33.png",
      "/la-plana-serena-xirgu-65/wine fire.png",
      "/la-plana-serena-xirgu-65/Scene 149(day).png",
      "/la-plana-serena-xirgu-65/X65_03.png",
      "/la-plana-serena-xirgu-65/Scene 149.png",
      "/la-plana-serena-xirgu-65/Scene 160.png",
      "/la-plana-serena-xirgu-65/Atardecer33.png",
    ],
  },
  // 4. La Plana Alba - Xirgu-67 (XIRGU 67 VISADO.pdf)
  {
    id: "4",
    title: "La Plana Alba",
    slug: "la-plana-alba-xirgu-67",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/Le9Ac_M5pXY",
    image: "/la-plana-alba-xirgu-67/4K_Scene 117.png",
    location: "C/ Margarida Xirgu, 67 · East-facing orientation",
    address: "C/ Margarida Xirgu, 67",
    bedrooms: 3,
    bathrooms: 3,
    area: "365.36 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "365.36 m²",
    basementArea: "91.20 m²",
    groundFloorArea: "101.06 m²",
    upperFloorArea: "102.70 m²",
    porchesArea: "70.40 m²",
    poolArea: "25.96 m²",
    description:
      "Morning light as a permanent state of being. A bright, serene home with a clean and elegant character that inspires freshness and clarity.",
    descriptionEs:
      "La luz matutina como un estado permanente de ser. Un hogar brillante y sereno con un carácter limpio y elegante que inspira frescura y claridad.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    // Carrer de Margarida Xirgu, 67 (OSM house node)
    mapLatitude: 41.2406625,
    mapLongitude: 1.7950721,
    imageKitGallery: [
      "/la-plana-alba-xirgu-67/4K_Scene 117.png",
      "/la-plana-alba-xirgu-67/4K_X67_02.png",
      "/la-plana-alba-xirgu-67/4K_X67_03.png",
    ],
    imageKitRenders: [
      "/la-plana-alba-xirgu-67/4K_Scene 117.png",
      "/la-plana-alba-xirgu-67/4K_X67_02.png",
      "/la-plana-alba-xirgu-67/4K_X67_03.png",
      "/la-plana-alba-xirgu-67/4K_Scene 121.png",
      "/la-plana-alba-xirgu-67/9_4K_Scene 125.png",
      "/la-plana-alba-xirgu-67/9_Scene 110.png",
      "/la-plana-alba-xirgu-67/9_Scene 131.png",
      "/la-plana-alba-xirgu-67/9_Scene 111.png",
      "/la-plana-alba-xirgu-67/9_Scene 122.png",
      "/la-plana-alba-xirgu-67/4K_Scene 116.png",
      "/la-plana-alba-xirgu-67/9_Scene 130.png",
      "/la-plana-alba-xirgu-67/9_Scene 129.png",
      "/la-plana-alba-xirgu-67/9_Scene 128.png",
    ],
  },
  // 5. La Plana Aura — Xirgu 69 (media under la-plana-aura-xirgu-69 folder)
  {
    id: "5",
    title: "La Plana Aura",
    slug: "la-plana-aura-xirgu-69",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/i_0bsuPLuN0",
    image: "/la-plana-aura-xirgu-69/4K_Scene 103.png",
    location: "C/ Margarida Xirgu, 69 · Coastal residence",
    address: "C/ Margarida Xirgu, 69",
    bedrooms: 3,
    bathrooms: 3,
    area: "371.97 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "371.97 m²",
    basementArea: "105.06 m²",
    groundFloorArea: "102.63 m²",
    upperFloorArea: "109.92 m²",
    porchesArea: "54.36 m²",
    poolArea: "24.00 m²",
    description:
      "A space with presence. Without being ostentatious, the house radiates subtle energy, balance, and an immediate feeling of home.",
    descriptionEs:
      "Un espacio con presencia. Sin ser ostentosa, la casa irradia energía sutil, equilibrio y una sensación inmediata de hogar.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_XIRGU_69,
    // Carrer de Margarida Xirgu, 69 (aligned with Horizon plot order on street)
    mapLatitude: 41.2406625,
    mapLongitude: 1.7950721,
    imageKitGallery: [
      "/la-plana-aura-xirgu-69/4K_Scene 103.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 107.png",
      "/la-plana-aura-xirgu-69/4K_Scene 82.png",
    ],
    imageKitRenders: [
      "/la-plana-aura-xirgu-69/4K_Scene 103.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 107.png",
      "/la-plana-aura-xirgu-69/4K_Scene 82.png",
      "/la-plana-aura-xirgu-69/4K_Scene 103_upscale01.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 106.png",
      "/la-plana-aura-xirgu-69/4K_Xirgu_69_01.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 80.png",
      "/la-plana-aura-xirgu-69/4K_Scene 86.png",
      "/la-plana-aura-xirgu-69/4k_Scene 96.png",
      "/la-plana-aura-xirgu-69/4K_Scene 108.png",
      "/la-plana-aura-xirgu-69/4K_Scene 82_upscale03.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 107_upscale01.png",
      "/la-plana-aura-xirgu-69/4K_Xirgu_69_01_upscale01.png",
      "/la-plana-aura-xirgu-69/4K_Scene 100.png",
      "/la-plana-aura-xirgu-69/4K_Scene 86_upscale01.png",
      "/la-plana-aura-xirgu-69/4k_Scene 96_upscale01.png",
      "/la-plana-aura-xirgu-69/4K_Scene 92.png",
      "/la-plana-aura-xirgu-69/4K_Scene 92_upscale01.png",
      "/la-plana-aura-xirgu-69/9_Scene 94.png",
      "/la-plana-aura-xirgu-69/9_Scene 90.png",
      "/la-plana-aura-xirgu-69/Scene 104.png",
      "/la-plana-aura-xirgu-69/bedroom.png",
      "/la-plana-aura-xirgu-69/ai-render-10813888.png",
    ],
  },
  // 6. La Plana Horizon — Xirgu 97
  {
    id: "6",
    title: "La Plana Horizon",
    slug: "la-plana-horizon-xirgu-97",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/vAEMz-9pM5Y",
    image: LA_PLANA_HORIZON_IMAGEKIT_PATHS[0]!,
    location: "C/ Margarida Xirgu, 97 · Horizon views",
    address: "C/ Margarida Xirgu, 97",
    bedrooms: 3,
    bathrooms: 3,
    area: "389.41 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "389.41 m²",
    basementArea: "109.14 m²",
    groundFloorArea: "93.44 m²",
    upperFloorArea: "105.01 m²",
    porchesArea: "81.82 m²",
    poolArea: "21.44 m²",
    description:
      "The gaze travels far — and so do the thoughts. A residence for those who seek perspective, freedom, and a natural connection with the horizon.",
    descriptionEs:
      "La mirada viaja lejos — y también los pensamientos. Una residencia para quienes buscan perspectiva, libertad y una conexión natural con el horizonte.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_XIRGU_97,
    // Carrer de Margarida Xirgu, 97 — verify pin if needed
    mapLatitude: 41.2407436,
    mapLongitude: 1.7952669,
    imageKitGallery: LA_PLANA_HORIZON_IMAGEKIT_PATHS.slice(0, 3),
    imageKitRenders: [...LA_PLANA_HORIZON_IMAGEKIT_PATHS],
  },
  // 7. La Plana Llum - Xirgu-71 (XIRGU 71 VISADO.pdf)
  {
    id: "7",
    title: "La Plana Llum",
    slug: "la-plana-llum-xirgu-71",
    price: PRICE_EUR_STANDARD,
    category: "house",
    image: "/la-plana-llum-xirgu-71/4K_Scene 60.png",
    location: "C/ Margarida Xirgu, 71 · Mediterranean light",
    address: "C/ Margarida Xirgu, 71",
    bedrooms: 3,
    bathrooms: 3,
    area: "359.15 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "359.15 m²",
    basementArea: "98.65 m²",
    groundFloorArea: "96.70 m²",
    upperFloorArea: "110.48 m²",
    porchesArea: "53.32 m²",
    poolArea: "24.00 m²",
    description:
      "Mediterranean light as an architectural element. Interior and exterior merge in a warm, natural, and continuous dialogue.",
    descriptionEs:
      "La luz mediterránea como elemento arquitectónico. Interior y exterior se fusionan en un diálogo cálido, natural y continuo.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_XIRGU_71,
    // Carrer de Margarida Xirgu, 71
    mapLatitude: 41.2408247,
    mapLongitude: 1.7954618,
    imageKitGallery: [
      "/la-plana-llum-xirgu-71/4K_Scene 60.png",
      "/la-plana-llum-xirgu-71/4K_Scene 47.png",
      "/la-plana-llum-xirgu-71/4K_Scene 53.png",
    ],
    imageKitRenders: [
      "/la-plana-llum-xirgu-71/4K_Scene 60.png",
      "/la-plana-llum-xirgu-71/4K_Scene 47.png",
      "/la-plana-llum-xirgu-71/4K_Scene 53.png",
      "/la-plana-llum-xirgu-71/4K_Scene 47_upscale01.png",
      "/la-plana-llum-xirgu-71/AI_Scene 70_upscale01.png",
    ],
  },
  // 8. La Plana Ponent - Xirgu-73 (XIRGU 73 VISADO.pdf)
  {
    id: "8",
    title: "La Plana Ponent",
    slug: "la-plana-ponent-xirgu-73",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/mFv2XDVt8j8",
    image: "/la-plana-ponet-xirgu-73/New_4K_Scene 42.png",
    location: "C/ Margarida Xirgu, 73 · Sunset views",
    address: "C/ Margarida Xirgu, 73",
    bedrooms: 3,
    bathrooms: 3,
    area: "382.40 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "382.40 m²",
    basementArea: "119.38 m²",
    groundFloorArea: "114.36 m²",
    upperFloorArea: "99.92 m²",
    porchesArea: "48.74 m²",
    poolArea: "24.27 m²",
    description:
      "The house of sunsets. Warm tones, peaceful endings to the day, and an atmosphere that invites reflection and deep relaxation.",
    descriptionEs:
      "La casa de los atardeceres. Tonos cálidos, finales pacíficos del día y una atmósfera que invita a la reflexión y la relajación profunda.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_XIRGU_73,
    // Carrer de Margarida Xirgu, 73
    mapLatitude: 41.2409186,
    mapLongitude: 1.7956862,
    imageKitGallery: [
      "/la-plana-ponet-xirgu-73/New_4K_Scene 42.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 28.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 13.png",
    ],
    imageKitRenders: [
      "/la-plana-ponet-xirgu-73/New_4K_Scene 42.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 28.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 13.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 20.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 5.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 44.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 5(1).png",
      "/la-plana-ponet-xirgu-73/4K_Scene 22.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 13.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 43.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 21.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 22_upscale01.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 5_upscale01.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 42_upscale01.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 5(1)_upscale01.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 27.png",
      "/la-plana-ponet-xirgu-73/New_4K_Scene 43_upscale01.png",
      "/la-plana-ponet-xirgu-73/4K_Scene 27_upscale01.png",
      "/la-plana-ponet-xirgu-73/Scene 34.png",
      "/la-plana-ponet-xirgu-73/Scene 32.png",
      "/la-plana-ponet-xirgu-73/Image.png",
      "/la-plana-ponet-xirgu-73/Image_upscale02.png",
    ],
  },
  // 9. La Plana Vista - Garraf-45
  {
    id: "9",
    title: "La Plana Vista",
    slug: "la-plana-vista-garraf-45",
    price: PRICE_EUR_STANDARD,
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/dz7vZuDo-Gg",
    image: "/la-plana-vista-garraf-45/4K_Garraf_45_Image.png",
    location: "Garraf, 45 · Total openness",
    /** Full street name matches map pin (OSM house node, Cases del Sord). */
    address: "Carrer d'en Pepe de Garraf, 45",
    bedrooms: 3,
    bathrooms: 3,
    area: "380.67 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "380.67 m²",
    basementArea: "110.89 m²",
    groundFloorArea: "107.68 m²",
    upperFloorArea: "99.36 m²",
    porchesArea: "62.74 m²",
    poolArea: "26.92 m²",
    description:
      "Total openness. A residence that emphasizes views, space, and breathing room, offering a constant sense of freedom.",
    descriptionEs:
      "Apertura total. Una residencia que enfatiza las vistas, el espacio y el respiro, ofreciendo una sensación constante de libertad.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    floorPlans: PLANS_GARAF_45,
    // Carrer d'en Pepe de Garraf, 45 (Cases del Sord, Sitges) — matches “Garraf, 45”
    mapLatitude: 41.2384881,
    mapLongitude: 1.7926503,
    imageKitGallery: [
      "/la-plana-vista-garraf-45/4K_Garraf_45_Image.png",
      "/la-plana-vista-garraf-45/Garraf_pool.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 188.png",
    ],
    imageKitRenders: [
      "/la-plana-vista-garraf-45/4K_Garraf_45_Image.png",
      "/la-plana-vista-garraf-45/Garraf_pool.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 188.png",
      "/la-plana-vista-garraf-45/woman_sun.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Image_1.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Image_2.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 207.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 211.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 194.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 191.png",
      "/la-plana-vista-garraf-45/Scene 198.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 185.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 193_1.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 189.png",
      "/la-plana-vista-garraf-45/4K_Garraf_45_Scene 208.png",
    ],
  },
  // 10. Dalmases 31 - Sitges
  {
    id: "10",
    title: "Dalmases 31",
    slug: "dalmases-31",
    price: PRICE_EUR_STANDARD,
    category: "house",
    image: DALMASES_31_IMAGEKIT_PATHS[0]!,
    location: "Dalmases, 31 · Sitges, Spain",
    address: "Dalmases, 31, Sitges, Spain",
    bedrooms: 3,
    bathrooms: 3,
    area: "388.67 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "388.67 m²",
    basementArea: "119.57 m²",
    groundFloorArea: "81.19 m²",
    upperFloorArea: "129.21 m²",
    porchesArea: "58.70 m²",
    poolArea: "26.86 m²",
    description:
      "A contemporary Sitges residence shaped around privacy, generous outdoor living, and a calm architectural rhythm.",
    descriptionEs:
      "Una residencia contemporánea en Sitges diseñada en torno a la privacidad, una vida exterior generosa y un ritmo arquitectónico sereno.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    imageKitGallery: DALMASES_31_IMAGEKIT_PATHS.slice(0, 3),
    imageKitRenders: [...DALMASES_31_IMAGEKIT_PATHS],
  },
];

// =======================
// TESTIMONIALS (EARLY IMPRESSIONS)
// =======================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex M.",
    role: "Architectural Consultant",
    content:
      "The project stands out through material honesty and technical coherence. CORIAN, porcelain façades, linear lighting — these are decisions made for long-term living, not marketing.",
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Sofia T.",
    role: "Future Resident",
    content:
      "What convinced me was the atmosphere of the area — open-minded, calm, and inclusive — combined with the fact that the sea is only 900 meters away in a straight line.",
    avatar: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Daniel R.",
    role: "Design-Oriented Buyer",
    content:
      "The spatial flow, absence of thresholds, and discreet climate systems create a feeling of comfort you usually find only in private villas or boutique hotels.",
    avatar: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Elena C.",
    role: "Interior Designer",
    content:
      "Everything is integrated — lighting, audio, balustrades. Nothing feels added later. It’s a very controlled architectural language.",
    avatar: "/placeholder.svg",
  },
];

// =======================
// FAQ (PROJECT-FOCUSED)
// =======================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Is the project completed?",
    answer:
      "The development is currently under construction. Site visits, technical reviews, and early reservations are available by appointment.",
  },
  {
    id: "2",
    question: "What is included as standard?",
    answer:
      "All residences are delivered with heated pools, underfloor heating, perimeter air-conditioning, CORIAN kitchens and bathrooms, smart access systems, and architectural lighting — as standard, not optional upgrades.",
  },
  {
    id: "3",
    question: "Is furniture included?",
    answer:
      "Kitchens and bathrooms are included in the price. Full furniture packages can be provided optionally, based on the architectural renderings.",
  },
  {
    id: "4",
    question: "How close is the beach?",
    answer:
      "The sea is located approximately 900 meters away in a direct line, within a calm Mediterranean residential setting.",
  },
  {
    id: "5",
    question: "What type of buyers is this project designed for?",
    answer:
      "The project is aimed at clients who value architecture, material quality, privacy, inclusivity, and long-term comfort over speculative or short-term real estate products.",
  },
];

// =======================
// GALLERY PLACEHOLDERS
// =======================

export const galleryImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

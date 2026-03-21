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

export const properties: Property[] = [
  // 1. La Plana Claror - Xirgu-13 (no visado PDF in current set — plot + listing metrics only)
  {
    id: "1",
    title: "La Plana Claror",
    slug: "la-plana-claror-xirgu-13",
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/mZVFtgbcTec",
    image: "/la-plana-claror-xirgu-13/4K_Scene 17.png",
    location: "C/ Margarida Xirgu, 13 · 900 m from the sea",
    address: "C/ Margarida Xirgu, 13",
    bedrooms: 4,
    bathrooms: 4,
    area: "600.00 m²",
    landArea: "600.00 m²",
    description:
      "A home defined by light and openness. Spaces flow naturally, and every corner conveys clarity, balance, and a sense of a fresh beginning.",
    descriptionEs:
      "Un hogar definido por la luz y la apertura. Los espacios fluyen naturalmente, y cada rincón transmite claridad, equilibrio y una sensación de nuevo comienzo.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
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
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/izZNJUzRGlY",
    image: "/la-plana-brisa-xirgu-49/4K_Scene 169.png",
    location: "C/ Margarida Xirgu, 49 · Coastal environment",
    address: "Margarida Xirgu, 49",
    bedrooms: 4,
    bathrooms: 4,
    area: "533.63 m²",
    landArea: "1,235.89 m²",
    totalBuiltArea: "533.63 m²",
    groundFloorArea: "226.06 m²",
    upperFloorArea: "194.88 m²",
    porchesArea: "67.37 m²",
    terraceArea: "13.60 m²",
    poolArea: "31.72 m²",
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
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/zhAzwHmgDe0",
    image: "/la-plana-serena-xirgu-65/4K_Image.png",
    location: "C/ Margarida Xirgu, 65 · Quiet residential zone",
    address: "C/ Margarida Xirgu, 65",
    bedrooms: 4,
    bathrooms: 4,
    area: "370.34 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "370.34 m²",
    basementArea: "108.20 m²",
    groundFloorArea: "107.30 m²",
    upperFloorArea: "116.00 m²",
    porchesArea: "7.65 + 6.35 + 2.30 m²",
    poolArea: "22.54 m²",
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
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/Le9Ac_M5pXY",
    image: "/la-plana-alba-xirgu-67/4K_Scene 117.png",
    location: "C/ Margarida Xirgu, 67 · East-facing orientation",
    address: "C/ Margarida Xirgu, 67",
    bedrooms: 4,
    bathrooms: 4,
    area: "356.80 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "356.80 m²",
    basementArea: "91.20 m²",
    groundFloorArea: "101.06 m²",
    upperFloorArea: "102.70 m²",
    porchesArea: "25.00 + 10.20 m²",
    poolArea: "26.00 m²",
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
  // 5. La Plana Aura - Xirgu-67 (same plot typology as Alba — XIRGU 67 VISADO.pdf)
  {
    id: "5",
    title: "La Plana Aura",
    slug: "la-plana-aura-xirgu-67",
    price: "On request",
    category: "house",
    image: "/la-plana-aura-xirgu-69/4K_Scene 103.png",
    location: "C/ Margarida Xirgu, 67 · Coastal residence",
    address: "C/ Margarida Xirgu, 67",
    bedrooms: 4,
    bathrooms: 4,
    area: "356.80 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "356.80 m²",
    basementArea: "91.20 m²",
    groundFloorArea: "101.06 m²",
    upperFloorArea: "102.70 m²",
    porchesArea: "25.00 + 10.20 m²",
    poolArea: "26.00 m²",
    description:
      "A space with presence. Without being ostentatious, the house radiates subtle energy, balance, and an immediate feeling of home.",
    descriptionEs:
      "Un espacio con presencia. Sin ser ostentosa, la casa irradia energía sutil, equilibrio y una sensación inmediata de hogar.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    // Same street number 67 — shared coordinates
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
  // 6. La Plana Horizon - Xirgu-69 (XIRGU 69 VISADO.pdf)
  {
    id: "6",
    title: "La Plana Horizon",
    slug: "la-plana-horizon-xirgu-69",
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/i_0bsuPLuN0",
    image: "/la-plana-aura-xirgu-69/4K_Xirgu_69_01.png",
    location: "C/ Margarida Xirgu, 69 · Horizon views",
    address: "C/ Margarida Xirgu, 69",
    bedrooms: 4,
    bathrooms: 4,
    area: "372.47 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "372.47 m²",
    basementArea: "105.06 m²",
    groundFloorArea: "102.63 m²",
    upperFloorArea: "109.92 m²",
    porchesArea: "17.48 + 9.70 m²",
    terraceArea: "1.68 m²",
    poolArea: "26.00 m²",
    description:
      "The gaze travels far — and so do the thoughts. A residence for those who seek perspective, freedom, and a natural connection with the horizon.",
    descriptionEs:
      "La mirada viaja lejos — y también los pensamientos. Una residencia para quienes buscan perspectiva, libertad y una conexión natural con el horizonte.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
    // Carrer de Margarida Xirgu, 69
    mapLatitude: 41.2407436,
    mapLongitude: 1.7952669,
    imageKitGallery: [
      "/la-plana-aura-xirgu-69/4K_Xirgu_69_01.png",
      "/la-plana-aura-xirgu-69/4K_Scene 108.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 107.png",
    ],
    imageKitRenders: [
      "/la-plana-aura-xirgu-69/4K_Scene 103.png",
      "/la-plana-aura-xirgu-69/9_4K_Scene 107.png",
      "/la-plana-aura-xirgu-69/4K_Scene 82.png",
      "/la-plana-aura-xirgu-69/4K_Xirgu_69_01.png",
      "/la-plana-aura-xirgu-69/4K_Scene 108.png",
    ],
  },
  // 7. La Plana Llum - Xirgu-71 (XIRGU 71 VISADO.pdf)
  {
    id: "7",
    title: "La Plana Llum",
    slug: "la-plana-llum-xirgu-71",
    price: "On request",
    category: "house",
    image: "/la-plana-llum-xirgu-71/4K_Scene 60.png",
    location: "C/ Margarida Xirgu, 71 · Mediterranean light",
    address: "C/ Margarida Xirgu, 71",
    bedrooms: 4,
    bathrooms: 4,
    area: "359.59 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "359.59 m²",
    basementArea: "89.65 m²",
    groundFloorArea: "96.70 m²",
    upperFloorArea: "110.48 m²",
    porchesArea: "18.46 + 8.20 m²",
    terraceArea: "12.10 m²",
    poolArea: "24.00 m²",
    description:
      "Mediterranean light as an architectural element. Interior and exterior merge in a warm, natural, and continuous dialogue.",
    descriptionEs:
      "La luz mediterránea como elemento arquitectónico. Interior y exterior se fusionan en un diálogo cálido, natural y continuo.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
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
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/mFv2XDVt8j8",
    image: "/la-plana-ponet-xirgu-73/New_4K_Scene 42.png",
    location: "C/ Margarida Xirgu, 73 · Sunset views",
    address: "C/ Margarida Xirgu, 73",
    bedrooms: 4,
    bathrooms: 4,
    area: "389.03 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "389.03 m²",
    basementArea: "119.38 m²",
    groundFloorArea: "114.36 m²",
    upperFloorArea: "99.92 m²",
    porchesArea: "24.37 + 5.00 m²",
    poolArea: "26.00 m²",
    description:
      "The house of sunsets. Warm tones, peaceful endings to the day, and an atmosphere that invites reflection and deep relaxation.",
    descriptionEs:
      "La casa de los atardeceres. Tonos cálidos, finales pacíficos del día y una atmósfera que invita a la reflexión y la relajación profunda.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
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
    price: "On request",
    category: "house",
    videoUrl: "https://www.youtube.com/shorts/dz7vZuDo-Gg",
    image: "/la-plana-vista-garraf-45/4K_Garraf_45_Image.png",
    location: "Garraf, 45 · Total openness",
    /** Full street name matches map pin (OSM house node, Cases del Sord). */
    address: "Carrer d'en Pepe de Garraf, 45",
    bedrooms: 4,
    bathrooms: 4,
    area: "Approx. 380 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "380.00 m²",
    description:
      "Total openness. A residence that emphasizes views, space, and breathing room, offering a constant sense of freedom.",
    descriptionEs:
      "Apertura total. Una residencia que enfatiza las vistas, el espacio y el respiro, ofreciendo una sensación constante de libertad.",
    amenities: LA_PLANA_AMENITIES,
    gallery: [],
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
// STATS (DEVELOPMENT-REALISTIC)
// =======================

export const stats = [
  { value: "900 m", label: "Distance to the Sea" },
  { value: "100%", label: "Architect-Designed Homes" },
  { value: "Standard", label: "High-End Specifications" },
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

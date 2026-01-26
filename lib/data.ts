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
  mapLatitude?: number;
  mapLongitude?: number;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "La Plana Claror",
    slug: "la-plana-claror",
    price: "€2,350,000",
    category: "house",
    image: "/xirgu69.png",
    location: "C/ Margarida Xirgu, 69 · 900 m from the sea",
    address: "C/ Margarida Xirgu, 69",
    bedrooms: 4,
    bathrooms: 4,
    area: "372.47 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "372.47 m²",
    description:
      "A home defined by light and openness. Spaces flow naturally through zero-threshold glazing, linear lighting, and warm materials, creating a sense of clarity, balance, and a fresh beginning. This architect-designed residence features an interior glass elevator — a rare luxury that sets it apart. The property includes a 45-degree tubular aluminum fence, perimeter linear pool lighting (not spotlights), perimeter air-conditioning through 2-meter-long grilles in each room, fully motorized sliding glazing without thresholds, motorized ZIP exterior shutters with 80% opacity, reflective smoked glass garage doors, rainwater collection systems, a pivot metal entrance door with electronic access via 8 codes including fingerprint, integrated magnetic LED lighting in recessed gypsum ceilings, multi-zone underfloor heating, CORIAN sanitary finishes (not ceramic), PORCELANOSA stoneware finishes (not painted), high-impedance ceiling speakers every 5 meters, hidden linear LED lighting on all stairs, and illuminated glass balustrades with floor-mounted metal fixings. The heated pool completes this exceptional property. Furniture can be provided according to architectural renderings.",
    descriptionEs:
      "Un hogar definido por la luz y la apertura. Los espacios fluyen naturalmente a través de acristalamiento sin umbral, iluminación lineal y materiales cálidos, creando una sensación de claridad, equilibrio y un nuevo comienzo. Esta residencia diseñada por arquitectos cuenta con un ascensor interior de vidrio, un lujo raro que la distingue. La propiedad incluye una valla de aluminio tubular a 45 grados, iluminación lineal perimetral de la piscina (no focos), aire acondicionado perimetral a través de rejillas largas de 2 metros en cada habitación, acristalamiento corredizo totalmente motorizado sin umbrales, persianas exteriores ZIP motorizadas con opacidad del 80%, puertas de garaje de vidrio ahumado reflectante, sistemas de recolección de agua de lluvia, una puerta de entrada metálica pivotante con acceso electrónico mediante 8 códigos incluyendo huella dactilar, iluminación LED magnética integrada en techos de yeso empotrados, calefacción por suelo radiante multizona, acabados sanitarios CORIAN (no cerámica), acabados de gres PORCELANOSA (no pintados), altavoces de techo de alta impedancia cada 5 metros, iluminación LED lineal oculta en todas las escaleras y barandillas de vidrio iluminadas con fijaciones metálicas montadas en el suelo. La piscina climatizada completa esta propiedad excepcional. Se puede proporcionar mobiliario según los renderizados arquitectónicos.",
    amenities: [
      "Interior glass elevator",
      "Heated pool with perimeter linear lighting",
      "Zero-threshold motorized glazing",
      "Underfloor heating (multi-zone)",
      "Perimeter air-conditioning with 2m grilles",
      "CORIAN sanitary finishes",
      "PORCELANOSA stoneware finishes",
      "Motorized ZIP exterior shutters (80% opacity)",
      "Reflective smoked glass garage doors",
      "Pivot metal entrance door with electronic access",
      "Integrated magnetic LED lighting",
      "High-impedance ceiling speakers",
      "Hidden linear LED stair lighting",
      "Illuminated glass balustrades",
      "Rainwater collection systems",
      "45-degree tubular aluminum fence",
    ],
    gallery: [
      "/xirgu69-1.jpg",
      "/xirgu69-2.jpg",
      "/xirgu69-3.jpg",
      "/xirgu69-4.jpg",
      "/xirgu69-5.jpg",
      "/xirgu69-6.jpg",
      "/xirgu69-7.jpg",
      "/xirgu69-8.jpg",
      "/xirgu69-9.jpg",
      "/xirgu69-10.jpg",
      "/xirgu69-11.jpg",
      "/xirgu69-12.jpg",
      "/xirgu69-13.jpg",
      "/xirgu69-14.jpg",
      "/xirgu69-15.jpg",
    ],
    floorPlansImage: "/xirgu69-parter-plan.png", // Keep for backward compatibility
    floorPlans: [
      "/xirgu69-parter-plan.png",
      "/xirgu69-etaj-plan.png",
    ],
    virtualTourUrl: "https://example.com/virtual-tour/xirgu69",
    videoUrl: "https://www.youtube.com/watch?v=example69",
    mapLatitude: 41.2345,
    mapLongitude: 1.8123,
  },
  {
    id: "2",
    title: "La Plana Brisa",
    slug: "la-plana-brisa",
    price: "€970,000",
    category: "house",
    image: "/xirgu71.png",
    location: "C/ Margarida Xirgu, 71 · Coastal environment",
    address: "C/ Margarida Xirgu, 71",
    bedrooms: 4,
    bathrooms: 4,
    area: "359.59 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "359.59 m²",
    basementArea: "89.65 m²",
    groundFloorArea: "96.70 m²",
    upperFloorArea: "110.48 m²",
    porchesArea: "26.66 m²",
    terraceArea: "12.10 m²",
    poolArea: "24.00 m²",
    description:
      "A refuge where air, silence, and a slower rhythm shape everyday life. The presence of the sea is felt in the atmosphere, not only in the view. This architect-designed residence features an interior glass elevator — a rare luxury that sets it apart. The property includes a 45-degree tubular aluminum fence, perimeter linear pool lighting (not spotlights), perimeter air-conditioning through 2-meter-long grilles in each room, fully motorized sliding glazing without thresholds, motorized ZIP exterior shutters with 80% opacity, reflective smoked glass garage doors, rainwater collection systems, a pivot metal entrance door with electronic access via 8 codes including fingerprint, integrated magnetic LED lighting in recessed gypsum ceilings, multi-zone underfloor heating, CORIAN sanitary finishes (not ceramic), PORCELANOSA stoneware finishes (not painted), high-impedance ceiling speakers every 5 meters, hidden linear LED lighting on all stairs, and illuminated glass balustrades with floor-mounted metal fixings. The heated pool completes this exceptional property. Furniture can be provided according to architectural renderings.",
    descriptionEs:
      "Un refugio donde el aire, el silencio y un ritmo más lento dan forma a la vida cotidiana. La presencia del mar se siente en el ambiente, no solo en la vista. Esta residencia diseñada por arquitectos cuenta con un ascensor interior de vidrio, un lujo raro que la distingue. La propiedad incluye una valla de aluminio tubular a 45 grados, iluminación lineal perimetral de la piscina (no focos), aire acondicionado perimetral a través de rejillas largas de 2 metros en cada habitación, acristalamiento corredizo totalmente motorizado sin umbrales, persianas exteriores ZIP motorizadas con opacidad del 80%, puertas de garaje de vidrio ahumado reflectante, sistemas de recolección de agua de lluvia, una puerta de entrada metálica pivotante con acceso electrónico mediante 8 códigos incluyendo huella dactilar, iluminación LED magnética integrada en techos de yeso empotrados, calefacción por suelo radiante multizona, acabados sanitarios CORIAN (no cerámica), acabados de gres PORCELANOSA (no pintados), altavoces de techo de alta impedancia cada 5 metros, iluminación LED lineal oculta en todas las escaleras y barandillas de vidrio iluminadas con fijaciones metálicas montadas en el suelo. La piscina climatizada completa esta propiedad excepcional. Se puede proporcionar mobiliario según los renderizados arquitectónicos.",
    amenities: [
      "Interior glass elevator",
      "Heated pool with perimeter linear lighting",
      "Zero-threshold motorized glazing",
      "Underfloor heating (multi-zone)",
      "Perimeter air-conditioning with 2m grilles",
      "CORIAN sanitary finishes",
      "PORCELANOSA stoneware finishes",
      "Motorized ZIP exterior shutters (80% opacity)",
      "Reflective smoked glass garage doors",
      "Pivot metal entrance door with electronic access",
      "Integrated magnetic LED lighting",
      "High-impedance ceiling speakers",
      "Hidden linear LED stair lighting",
      "Illuminated glass balustrades",
      "Rainwater collection systems",
      "45-degree tubular aluminum fence",
    ],
    gallery: [],
    floorPlansImage: "/floor-plans-xirgu71.jpg",
    virtualTourUrl: "https://example.com/virtual-tour/xirgu71",
    videoUrl: "https://www.youtube.com/watch?v=example71",
    mapLatitude: 41.2346,
    mapLongitude: 1.8124,
  },
  {
    id: "3",
    title: "La Plana Serena",
    slug: "la-plana-serena",
    price: "€1,550,000",
    category: "house",
    image: "/xirgu73.png",
    location: "C/ Margarida Xirgu, 73 · Quiet residential zone",
    address: "C/ Margarida Xirgu, 73",
    bedrooms: 4,
    bathrooms: 4,
    area: "389.03 m²",
    landArea: "600.00 m²",
    totalBuiltArea: "389.03 m²",
    basementArea: "119.38 m²",
    groundFloorArea: "114.36 m²",
    upperFloorArea: "99.92 m²",
    porchesArea: "29.37 m²",
    poolArea: "26.00 m²",
    description:
      "Pure harmony. Designed for calm, privacy, and reconnection, this residence keeps the noise of the world comfortably at a distance. This architect-designed residence features an interior glass elevator — a rare luxury that sets it apart. The property includes a 45-degree tubular aluminum fence, perimeter linear pool lighting (not spotlights), perimeter air-conditioning through 2-meter-long grilles in each room, fully motorized sliding glazing without thresholds, motorized ZIP exterior shutters with 80% opacity, reflective smoked glass garage doors, rainwater collection systems, a pivot metal entrance door with electronic access via 8 codes including fingerprint, integrated magnetic LED lighting in recessed gypsum ceilings, multi-zone underfloor heating, CORIAN sanitary finishes (not ceramic), PORCELANOSA stoneware finishes (not painted), high-impedance ceiling speakers every 5 meters, hidden linear LED lighting on all stairs, and illuminated glass balustrades with floor-mounted metal fixings. The heated pool completes this exceptional property. Furniture can be provided according to architectural renderings.",
    descriptionEs:
      "Armonía pura. Diseñada para la calma, la privacidad y la reconexión, esta residencia mantiene el ruido del mundo cómodamente a distancia. Esta residencia diseñada por arquitectos cuenta con un ascensor interior de vidrio, un lujo raro que la distingue. La propiedad incluye una valla de aluminio tubular a 45 grados, iluminación lineal perimetral de la piscina (no focos), aire acondicionado perimetral a través de rejillas largas de 2 metros en cada habitación, acristalamiento corredizo totalmente motorizado sin umbrales, persianas exteriores ZIP motorizadas con opacidad del 80%, puertas de garaje de vidrio ahumado reflectante, sistemas de recolección de agua de lluvia, una puerta de entrada metálica pivotante con acceso electrónico mediante 8 códigos incluyendo huella dactilar, iluminación LED magnética integrada en techos de yeso empotrados, calefacción por suelo radiante multizona, acabados sanitarios CORIAN (no cerámica), acabados de gres PORCELANOSA (no pintados), altavoces de techo de alta impedancia cada 5 metros, iluminación LED lineal oculta en todas las escaleras y barandillas de vidrio iluminadas con fijaciones metálicas montadas en el suelo. La piscina climatizada completa esta propiedad excepcional. Se puede proporcionar mobiliario según los renderizados arquitectónicos.",
    amenities: [
      "Interior glass elevator",
      "Heated pool with perimeter linear lighting",
      "Zero-threshold motorized glazing",
      "Underfloor heating (multi-zone)",
      "Perimeter air-conditioning with 2m grilles",
      "CORIAN sanitary finishes",
      "PORCELANOSA stoneware finishes",
      "Motorized ZIP exterior shutters (80% opacity)",
      "Reflective smoked glass garage doors",
      "Pivot metal entrance door with electronic access",
      "Integrated magnetic LED lighting",
      "High-impedance ceiling speakers",
      "Hidden linear LED stair lighting",
      "Illuminated glass balustrades",
      "Rainwater collection systems",
      "45-degree tubular aluminum fence",
    ],
    gallery: [],
    floorPlansImage: "/floor-plans-xirgu73.jpg",
    virtualTourUrl: "https://example.com/virtual-tour/xirgu73",
    videoUrl: "https://www.youtube.com/watch?v=example73",
    mapLatitude: 41.2347,
    mapLongitude: 1.8125,
  },
  {
    id: "4",
    title: "La Plana Alba",
    slug: "la-plana-alba",
    price: "On request",
    category: "house",
    image: "/placeholder.svg",
    location: "La Plana · East-facing orientation",
    bedrooms: 4,
    bathrooms: 4,
    area: "Approx. 325 sqm",
    description:
      "Morning light as a permanent state of being. A bright, serene home with a clean architectural character that inspires freshness and clarity.",
    descriptionEs:
      "La luz matutina como un estado permanente de ser. Un hogar brillante y sereno con un carácter arquitectónico limpio que inspira frescura y claridad.",
    amenities: [
      "Pivot metal entrance door",
      "Advanced rainwater drainage systems",
      "Motorized sliding façades",
      "Integrated architectural lighting",
      "Optional furnished package",
    ],
    gallery: [],
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

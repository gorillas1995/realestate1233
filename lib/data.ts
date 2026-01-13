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
  amenities: string[];
  gallery: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "La Plana Claror",
    slug: "la-plana-claror",
    price: "On request",
    category: "house",
    image: "/placeholder.svg",
    location: "La Plana · 900 m from the sea",
    bedrooms: 4,
    bathrooms: 4,
    area: "Approx. 320 sqm",
    description:
      "A home defined by light and openness. Spaces flow naturally through zero-threshold glazing, linear lighting, and warm materials, creating a sense of clarity, balance, and a fresh beginning.",
    amenities: [
      "Heated pool with linear lighting",
      "Zero-threshold motorized glazing",
      "Underfloor heating (multi-zone)",
      "Perimeter air-conditioning",
      "CORIAN kitchens & bathrooms",
    ],
    gallery: [],
  },
  {
    id: "2",
    title: "La Plana Brisa",
    slug: "la-plana-brisa",
    price: "On request",
    category: "house",
    image: "/placeholder.svg",
    location: "La Plana · Coastal environment",
    bedrooms: 4,
    bathrooms: 4,
    area: "Approx. 330 sqm",
    description:
      "A refuge where air, silence, and a slower rhythm shape everyday life. The presence of the sea is felt in the atmosphere, not only in the view.",
    amenities: [
      "Architect-designed volumes",
      "Motorized ZIP exterior shutters",
      "Recessed magnetic lighting",
      "Integrated ceiling audio",
      "Private garden & terraces",
    ],
    gallery: [],
  },
  {
    id: "3",
    title: "La Plana Serena",
    slug: "la-plana-serena",
    price: "On request",
    category: "house",
    image: "/placeholder.svg",
    location: "La Plana · Quiet residential zone",
    bedrooms: 4,
    bathrooms: 4,
    area: "Approx. 310 sqm",
    description:
      "Pure harmony. Designed for calm, privacy, and reconnection, this residence keeps the noise of the world comfortably at a distance.",
    amenities: [
      "Frameless illuminated glass balustrades",
      "Hidden linear LED stair lighting",
      "Smart access (code, remote, fingerprint)",
      "Porcelain stoneware finishes",
      "Heated pool",
    ],
    gallery: [],
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

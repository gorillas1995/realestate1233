export interface Property {
  id: string
  title: string
  slug: string
  price: string
  category: "house" | "apartment" | "land"
  image: string
  location: string
  bedrooms?: number
  bathrooms?: number
  area: string
  description: string
  amenities: string[]
  gallery: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Willow Creek Cottage",
    slug: "willow-creek-cottage",
    price: "€2,450,000",
    category: "house",
    image: "/placeholder.svg?height=600&width=800",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,500 sq ft",
    description:
      "A stunning contemporary masterpiece nestled in the prestigious hills, featuring panoramic views, infinity pool, and world-class finishes throughout.",
    amenities: ["Pool", "Garden", "Garage", "Smart Home", "Wine Cellar", "Home Theater"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "2",
    title: "Skyline Penthouse",
    slug: "skyline-penthouse",
    price: "€8,900,000",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
    location: "Manhattan, NY",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    description:
      "An exclusive penthouse offering 360-degree views of the iconic skyline, featuring floor-to-ceiling windows and bespoke interior design.",
    amenities: ["Terrace", "Concierge", "Gym", "Spa", "Private Elevator", "Wine Room"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "3",
    title: "Mediterranean Estate",
    slug: "mediterranean-estate",
    price: "€12,500,000",
    category: "house",
    image: "/placeholder.svg?height=600&width=800",
    location: "Marbella, Spain",
    bedrooms: 7,
    bathrooms: 6,
    area: "8,500 sq ft",
    description:
      "A breathtaking Mediterranean estate featuring classical architecture, lush gardens, and direct beach access on the Costa del Sol.",
    amenities: ["Beach Access", "Tennis Court", "Pool", "Guest House", "Helipad", "Vineyard"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "4",
    title: "Alpine Retreat",
    slug: "alpine-retreat",
    price: "€6,750,000",
    category: "house",
    image: "/placeholder.svg?height=600&width=800",
    location: "Zermatt, Switzerland",
    bedrooms: 6,
    bathrooms: 5,
    area: "5,800 sq ft",
    description:
      "An extraordinary mountain retreat offering ski-in/ski-out access, panoramic Alpine views, and world-class wellness facilities.",
    amenities: ["Ski Room", "Sauna", "Hot Tub", "Wine Cellar", "Cinema", "Gym"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "5",
    title: "Coastal Paradise",
    slug: "coastal-paradise",
    price: "€4,200,000",
    category: "house",
    image: "/placeholder.svg?height=600&width=800",
    location: "Malibu, CA",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,800 sq ft",
    description:
      "A stunning beachfront property with seamless indoor-outdoor living, private beach access, and breathtaking Pacific Ocean views.",
    amenities: ["Beach Access", "Pool", "Fire Pit", "Outdoor Kitchen", "Surf Storage", "Deck"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "6",
    title: "Urban Loft",
    slug: "urban-loft",
    price: "€1,850,000",
    category: "apartment",
    image: "/placeholder.svg?height=600&width=800",
    location: "London, UK",
    bedrooms: 2,
    bathrooms: 2,
    area: "2,100 sq ft",
    description:
      "A converted warehouse loft featuring soaring ceilings, exposed brick, and contemporary designer finishes in the heart of the city.",
    amenities: ["High Ceilings", "Parking", "Concierge", "Roof Access", "Storage", "Bike Room"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "7",
    title: "Vineyard Estate",
    slug: "vineyard-estate",
    price: "€18,000,000",
    category: "land",
    image: "/placeholder.svg?height=600&width=800",
    location: "Tuscany, Italy",
    area: "50 acres",
    description:
      "A prestigious wine estate featuring historic villa, productive vineyard, and olive groves in the heart of Tuscany's wine country.",
    amenities: ["Vineyard", "Wine Production", "Guest Houses", "Chapel", "Olive Grove", "Pool"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "8",
    title: "Island Sanctuary",
    slug: "island-sanctuary",
    price: "€35,000,000",
    category: "land",
    image: "/placeholder.svg?height=600&width=800",
    location: "Bahamas",
    area: "12 acres",
    description:
      "An exclusive private island offering complete privacy, pristine beaches, and the ultimate tropical escape in crystal-clear waters.",
    amenities: ["Private Beach", "Dock", "Helipad", "Main Villa", "Guest Cottages", "Boat House"],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexander von Sterling",
    role: "Investment Banker",
    content:
      "Urban Estate exceeded all expectations. Their attention to detail and understanding of luxury properties is unmatched in the industry.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Isabella Rossi",
    role: "Fashion Designer",
    content:
      "The team at Urban Estate helped me find my dream Mediterranean villa. Their expertise and discretion made the entire process seamless.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "James Wellington III",
    role: "Tech Entrepreneur",
    content:
      "Working with Urban Estate was a privilege. They understood exactly what I was looking for and delivered beyond my expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Sofia Chen",
    role: "Art Collector",
    content:
      "The level of service and the quality of properties presented were exceptional. Urban Estate truly understands luxury living.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What sets Urban Estate apart from other luxury real estate agencies?",
    answer:
      "Urban Estate combines decades of expertise with an exclusive portfolio of properties valued at over €200 million. Our bespoke approach ensures personalized service, complete discretion, and access to off-market opportunities unavailable elsewhere.",
  },
  {
    id: "2",
    question: "Do you offer international property acquisition services?",
    answer:
      "Yes, our global network spans over 30 countries. We assist clients with acquiring luxury properties worldwide, handling all aspects from property search to legal compliance and after-sale services.",
  },
  {
    id: "3",
    question: "What is your commission structure?",
    answer:
      "Our commission structure is tailored to each transaction and property value. We operate with complete transparency and discuss all fees during our initial consultation to ensure alignment with your expectations.",
  },
  {
    id: "4",
    question: "Can you help with property investment portfolios?",
    answer:
      "Absolutely. Our investment advisory team specializes in building diversified real estate portfolios. We provide market analysis, yield projections, and ongoing portfolio management services.",
  },
  {
    id: "5",
    question: "How do you ensure client confidentiality?",
    answer:
      "Discretion is paramount at Urban Estate. We employ strict confidentiality protocols, including NDAs for all staff, secure communication channels, and private viewing arrangements to protect our clients' privacy.",
  },
]

export const stats = [
  { value: "10K", label: "Employees Worldwide" },
  { value: "€12B", label: "In Construction Value" },
  { value: "1,200", label: "Projects Completed" },
]

export const galleryImages = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

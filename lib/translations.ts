// Translation keys and values for English and Spanish

export type Language = "en" | "es";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    listings: string;
    gallery: string;
    about: string;
    contact: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };

  // Stats Section
  stats: {
    aboutUs: string;
    heading: string;
    description: string;
    viewListings: string;
  };

  // Featured Listings
  featuredListings: {
    label: string;
    title: string;
    description: string;
    viewListings: string;
  };

  // Categories Section
  categories: {
    title: string;
    description: string;
    aboutUs: string;
    heading: string;
    aboutDescription: string;
  };

  // Testimonials
  testimonials: {
    label: string;
    title: string;
    description: string;
  };

  // CTA Section
  cta: {
    title: string;
    button: string;
  };

  // About Page
  about: {
    title: string;
    description: string;
    viewResidences: string;
  };

  // Gallery Page
  gallery: {
    title: string;
    description: string;
    aboutUs: string;
    filters: {
      all: string;
      exterior: string;
      groundFloor: string;
      upperFloor: string;
    };
  };

  // Contact Page
  contact: {
    title: string;
    phone: string;
    address: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    properties: string;
    contact: string;
    privacyPolicy: string;
    termsOfService: string;
    rightsReserved: string;
  };

  // Listings
  listings: {
    title: string;
    description: string;
    all: string;
    houses: string;
    apartments: string;
    lands: string;
    noProperties: string;
    faq: {
      title: string;
      description: string;
    };
  };

  // Categories data
  categoryData: {
    houses: {
      title: string;
      description: string;
    };
    interiorDesign: {
      title: string;
      description: string;
    };
    highEnd: {
      title: string;
      description: string;
    };
    exclusiveOnly: {
      title: string;
      description: string;
    };
  };

  // About page philosophies
  philosophies: {
    philosophy: {
      title: string;
      description: string;
    };
    craftsmanship: {
      title: string;
      description: string;
    };
    longTermVision: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "HOME",
      listings: "LISTINGS",
      gallery: "GALLERY",
      about: "ABOUT",
      contact: "CONTACT",
    },
    hero: {
      title: "URBAN CONSTRUCTION",
      subtitle: "FOR CLIENTS",
      description:
        "The urban Estate construction philosophy prioritizes precision, innovation, and quality. It combines cutting-edge technology with meticulous craftsmanship.",
      cta: "VIEW LISTINGS",
    },
    stats: {
      aboutUs: "About Us",
      heading: "Precision. Innovation. Quality.",
      description:
        "We blend cutting-edge technology with meticulous craftsmanship to deliver iconic properties that stand the test of time. Trusted by clients worldwide.",
      viewListings: "VIEW LISTINGS",
    },
    featuredListings: {
      label: "Featured Listings",
      title: "Here are some of our featured listings you can view.",
      description: "To view all of listings, click on the button below.",
      viewListings: "VIEW LISTINGS",
    },
    categories: {
      title: "Discover our most beautiful properties in Town",
      description: "Discover the best and beautiful properties in different categories",
      aboutUs: "About Us",
      heading: "Precision. Innovation. Quality.",
      aboutDescription:
        "We blend cutting-edge technology with meticulous craftsmanship to deliver iconic properties that stand the test of time. Trusted by clients worldwide.",
    },
    testimonials: {
      label: "Discover more of our properties",
      title: "Checkout our reviews",
      description:
        "Insights from early buyers, site visitors, and professionals evaluating the architecture, materials, and setting of SITGES CAPITAL Estate",
    },
    cta: {
      title: "CHANGE YOUR LIFESTYLE!",
      button: "REACH OUT TO US",
    },
    about: {
      title: "ABOUT",
      description:
        "We develop architect-designed residences defined by light, space, and material honesty. Our focus is not volume, but precision — creating calm, inclusive living environments near the sea, built for long-term comfort rather than short-term trends.",
      viewResidences: "VIEW RESIDENCES",
    },
    gallery: {
      title: "GALLERY",
      description:
        "Check our most highlighted estate work in our gallery. All the projects are done by urban estate and its team.",
      aboutUs: "ABOUT US",
      filters: {
        all: "ALL",
        exterior: "EXTERIOR",
        groundFloor: "GROUND FLOOR",
        upperFloor: "UPPER FLOOR",
      },
    },
    contact: {
      title: "CONTACT",
      phone: "+132306565656",
      address: "Street 6 Underground, NYC",
    },
    footer: {
      description:
        "Curating exceptional properties for discerning clients since 1998. Experience luxury real estate redefined.",
      quickLinks: "Quick Links",
      properties: "Properties",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      rightsReserved: "All rights reserved.",
    },
    listings: {
      title: "LISTINGS",
      description: "Explore our exclusive collection of luxury properties worldwide.",
      all: "ALL",
      houses: "HOUSES",
      apartments: "APARTMENTS",
      lands: "LANDS",
      noProperties: "No properties found in this category.",
      faq: {
        title: "Frequently Asked Questions",
        description: "Check below our most frequently asked questions",
      },
    },
    categoryData: {
      houses: {
        title: "HOUSES",
        description:
          "Explore architect-designed homes defined by distinctive geometry, zero-threshold living, and seamless indoor-outdoor transitions. Each residence features porcelain stoneware exteriors, motorized sliding glazing, heated pools with linear lighting, and advanced climate systems engineered for exceptional comfort.",
      },
      interiorDesign: {
        title: "INTERIOR DESIGN",
        description:
          "Designed for clients who value precision, comfort, and material excellence. These homes integrate underfloor heating, perimeter air-conditioning, CORIAN sanitary finishes, recessed magnetic lighting systems, and fully automated shading for a refined, hotel-level living experience.",
      },
      highEnd: {
        title: "HIGH END",
        description:
          "Designed for clients who value precision, comfort, and material excellence. These homes integrate underfloor heating, perimeter air-conditioning, CORIAN sanitary finishes, recessed magnetic lighting systems, and fully automated shading for a refined, hotel-level living experience.",
      },
      exclusiveOnly: {
        title: "EXCLUSIVE ONLY",
        description:
          "A limited collection of ultra-exclusive residences offering advanced smart access systems, pivot entrance doors, illuminated glass balustrades, integrated audio, and a fully curated architectural lighting concept — all delivered as standard, not upgrades.",
      },
    },
    philosophies: {
      philosophy: {
        title: "PHILOSOPHY",
        description:
          "We believe architecture should create a feeling before it creates a form. Our approach is rooted in clarity, light, and spatial comfort — designing homes that feel calm, open, and intentional from the very first step inside.",
      },
      craftsmanship: {
        title: "CRAFTSMANSHIP",
        description:
          "Every material is selected for longevity, tactility, and coherence. From porcelain stoneware façades and CORIAN interiors to integrated lighting and climate systems, nothing is decorative — everything is engineered to last.",
      },
      longTermVision: {
        title: "LONG-TERM VISION",
        description:
          "We design for how people will live, not for how projects are sold. Our homes are built for comfort, inclusivity, and permanence — places meant to age gracefully and remain relevant long after completion.",
      },
    },
  },
  es: {
    nav: {
      home: "INICIO",
      listings: "PROPIEDADES",
      gallery: "GALERÍA",
      about: "NOSOTROS",
      contact: "CONTACTO",
    },
    hero: {
      title: "CONSTRUCCIÓN URBANA",
      subtitle: "PARA CLIENTES",
      description:
        "La filosofía de construcción de Urban Estate prioriza la precisión, la innovación y la calidad. Combina tecnología de vanguardia con artesanía meticulosa.",
      cta: "VER PROPIEDADES",
    },
    stats: {
      aboutUs: "Sobre Nosotros",
      heading: "Precisión. Innovación. Calidad.",
      description:
        "Combinamos tecnología de vanguardia con artesanía meticulosa para entregar propiedades icónicas que resisten el paso del tiempo. Confiado por clientes en todo el mundo.",
      viewListings: "VER PROPIEDADES",
    },
    featuredListings: {
      label: "Propiedades Destacadas",
      title: "Aquí están algunas de nuestras propiedades destacadas que puedes ver.",
      description: "Para ver todas las propiedades, haz clic en el botón de abajo.",
      viewListings: "VER PROPIEDADES",
    },
    categories: {
      title: "Descubre nuestras propiedades más hermosas en la Ciudad",
      description: "Descubre las mejores y más hermosas propiedades en diferentes categorías",
      aboutUs: "Sobre Nosotros",
      heading: "Precisión. Innovación. Calidad.",
      aboutDescription:
        "Combinamos tecnología de vanguardia con artesanía meticulosa para entregar propiedades icónicas que resisten el paso del tiempo. Confiado por clientes en todo el mundo.",
    },
    testimonials: {
      label: "Descubre más de nuestras propiedades",
      title: "Consulta nuestras reseñas",
      description:
        "Perspectivas de compradores iniciales, visitantes del sitio y profesionales que evalúan la arquitectura, materiales y entorno de SITGES CAPITAL Estate",
    },
    cta: {
      title: "¡CAMBIA TU ESTILO DE VIDA!",
      button: "CONTÁCTANOS",
    },
    about: {
      title: "NOSOTROS",
      description:
        "Desarrollamos residencias diseñadas por arquitectos definidas por la luz, el espacio y la honestidad material. Nuestro enfoque no es el volumen, sino la precisión: crear entornos de vida tranquilos e inclusivos cerca del mar, construidos para comodidad a largo plazo en lugar de tendencias a corto plazo.",
      viewResidences: "VER RESIDENCIAS",
    },
    gallery: {
      title: "GALERÍA",
      description:
        "Consulta nuestro trabajo inmobiliario más destacado en nuestra galería. Todos los proyectos son realizados por urban estate y su equipo.",
      aboutUs: "SOBRE NOSOTROS",
      filters: {
        all: "TODAS",
        exterior: "EXTERIOR",
        groundFloor: "PLANTA BAJA",
        upperFloor: "PLANTA ALTA",
      },
    },
    contact: {
      title: "CONTACTO",
      phone: "+132306565656",
      address: "Calle 6 Underground, NYC",
    },
    footer: {
      description:
        "Curaduría de propiedades excepcionales para clientes exigentes desde 1998. Experimenta el lujo inmobiliario redefinido.",
      quickLinks: "Enlaces Rápidos",
      properties: "Propiedades",
      contact: "Contacto",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      rightsReserved: "Todos los derechos reservados.",
    },
    listings: {
      title: "PROPIEDADES",
      description: "Explora nuestra colección exclusiva de propiedades de lujo en todo el mundo.",
      all: "TODAS",
      houses: "CASAS",
      apartments: "APARTAMENTOS",
      lands: "TERRENOS",
      noProperties: "No se encontraron propiedades en esta categoría.",
      faq: {
        title: "Preguntas Frecuentes",
        description: "Consulta a continuación nuestras preguntas más frecuentes",
      },
    },
    categoryData: {
      houses: {
        title: "CASAS",
        description:
          "Explora hogares diseñados por arquitectos definidos por geometría distintiva, vida sin umbrales y transiciones perfectas entre interior y exterior. Cada residencia cuenta con exteriores de gres porcelánico, acristalamiento corredizo motorizado, piscinas climatizadas con iluminación lineal y sistemas climáticos avanzados diseñados para un confort excepcional.",
      },
      interiorDesign: {
        title: "DISEÑO DE INTERIORES",
        description:
          "Diseñado para clientes que valoran la precisión, la comodidad y la excelencia material. Estos hogares integran calefacción por suelo radiante, aire acondicionado perimetral, acabados sanitarios CORIAN, sistemas de iluminación magnética empotrados y sombreado totalmente automatizado para una experiencia de vida refinada, de nivel hotelero.",
      },
      highEnd: {
        title: "ALTA GAMA",
        description:
          "Diseñado para clientes que valoran la precisión, la comodidad y la excelencia material. Estos hogares integran calefacción por suelo radiante, aire acondicionado perimetral, acabados sanitarios CORIAN, sistemas de iluminación magnética empotrados y sombreado totalmente automatizado para una experiencia de vida refinada, de nivel hotelero.",
      },
      exclusiveOnly: {
        title: "SOLO EXCLUSIVO",
        description:
          "Una colección limitada de residencias ultraexclusivas que ofrecen sistemas de acceso inteligente avanzados, puertas de entrada pivotantes, barandillas de vidrio iluminadas, audio integrado y un concepto de iluminación arquitectónica totalmente curado, todo entregado como estándar, no como mejoras.",
      },
    },
    philosophies: {
      philosophy: {
        title: "FILOSOFÍA",
        description:
          "Creemos que la arquitectura debe crear una sensación antes de crear una forma. Nuestro enfoque se basa en la claridad, la luz y la comodidad espacial: diseñar hogares que se sientan tranquilos, abiertos e intencionales desde el primer paso adentro.",
      },
      craftsmanship: {
        title: "ARTESANÍA",
        description:
          "Cada material se selecciona por su longevidad, tactilidad y coherencia. Desde fachadas de gres porcelánico e interiores CORIAN hasta sistemas de iluminación y clima integrados, nada es decorativo: todo está diseñado para durar.",
      },
      longTermVision: {
        title: "VISIÓN A LARGO PLAZO",
        description:
          "Diseñamos para cómo vivirán las personas, no para cómo se venden los proyectos. Nuestros hogares están construidos para la comodidad, la inclusividad y la permanencia: lugares destinados a envejecer con gracia y seguir siendo relevantes mucho después de la finalización.",
      },
    },
  },
};

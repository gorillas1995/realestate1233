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
    interiorDesign: string;
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
    /** Small uppercase line above title */
    kicker: string;
    /** Shown above horizontal philosophy story on small screens */
    scrollHint: string;
    /** Prepended before index e.g. "Chapter" + " 01" */
    chapterLabel: string;
    /** Dark prestige strip headline */
    bridgeTitle: string;
    bridgeCta: string;
    /** aria-label for philosophy carousel region */
    carouselAria: string;
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
    form: {
      privacyConsentBeforeLink: string;
      privacyConsentAfterLink: string;
      marketingConsent: string;
      submit: string;
      sending: string;
      sentTitle: string;
      sentBody: string;
    };
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
    cookieSettings: string;
  };

  /** Cookie consent drawer (GDPR / ePrivacy-oriented copy) */
  cookies: {
    title: string;
    description: string;
    acceptAll: string;
    rejectNonEssential: string;
    customize: string;
    savePreferences: string;
    back: string;
    necessaryTitle: string;
    necessaryDesc: string;
    necessaryLocked: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
    privacyLink: string;
  };

  /** Static legal page chrome */
  legal: {
    lastUpdated: string;
    privacyTitle: string;
    termsTitle: string;
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
    /** Small uppercase line above the page title */
    kicker: string;
    /** "{count}" = number, plural residences */
    resultsCount: string;
    /** Singular listing count line */
    resultsCountOne: string;
    /** Shown above filter chips on small screens */
    filterSwipeHint: string;
    /** aria-label / CTA on property cards */
    viewListing: string;
    /** Short link label on cards */
    exploreDetails: string;
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

  // Property Page
  property: {
    description: string;
    details: string;
    amenities: string;
    /** Premium amenities highlight block (property page) */
    amenitiesHighlightLabel: string;
    amenitiesHighlightTitle: string;
    amenitiesHighlightBody: string;
    amenitiesHighlightFooter: string; // Use "{count}" placeholder for number
    /** Short material / quality line under amenity grid */
    amenitiesHighlightRibbon: string;
    /** Signature specs carousel (3 per slide, swipe + arrows) */
    amenitiesCarouselSwipeHint: string;
    amenitiesCarouselArrowsHint: string;
    amenitiesCarouselPrevAria: string;
    amenitiesCarouselNextAria: string;
    /** Screen reader: "{current}" and "{total}" */
    amenitiesCarouselPageStatus: string;
    /** Dot button; "{n}" = 1-based index */
    amenitiesCarouselDotAria: string;
    backToListings: string;
    scheduleViewing: string;
    requestInformation: string;
    seeCompleteDescription: string;
    showLess: string;
    landArea: string;
    totalBuiltArea: string;
    basementArea: string;
    groundFloorArea: string;
    upperFloorArea: string;
    porchesArea: string;
    terraceArea: string;
    poolArea: string;
    /** Premium “surfaces & volumes” panel on property page */
    specSheetLabel: string;
    specSheetTitle: string;
    specSheetSubtitle: string;
    statBedrooms: string;
    statBathrooms: string;
    buttons: {
      images: string;
      floorPlans: string;
      virtualTour: string;
      video: string;
      map: string;
      renders: string;
    };
    renders: {
      label: string;
      title: string;
      description: string;
      cta: string;
    };
    /** Related / “You may also like” strip on property page */
    relatedProperties: {
      label: string;
      title: string;
      subtitle: string;
    };
  };

  /** Interior design service page — craft, portfolio, signature systems, process */
  interiorDesignPage: {
    hero: {
      kicker: string;
      titleLine1: string;
      titleAccent: string;
      description: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    mainVisual: { alt: string };
    bridge: { title: string; body: string };
    pillars: {
      sectionTitle: string;
      carouselAria: string;
      swipeHint: string;
      prevAria: string;
      nextAria: string;
      dotAria: string;
      pageStatus: string;
      items: { title: string; description: string }[];
    };
    featuresIntro: { label: string; title: string; subtitle: string };
    features: { title: string; text: string }[];
    process: {
      title: string;
      intro: string;
      steps: { title: string; description: string }[];
    };
    executionBand: { title: string; body: string };
    closing: {
      title: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    media: {
      playVideoAria: string;
      videoPreviewAlt: string;
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
      interiorDesign: "INTERIOR DESIGN",
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
      kicker: "Sitges · Garraf · Mediterranean coast",
      scrollHint: "Swipe to explore our pillars",
      chapterLabel: "Chapter",
      bridgeTitle:
        "Residences engineered for permanence — not trends. Discover the collection.",
      bridgeCta: "View residences",
      carouselAria: "Our philosophy in three chapters",
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
    form: {
      privacyConsentBeforeLink: "I have read the ",
      privacyConsentAfterLink:
        " and agree to the processing of my personal data to handle this request.",
      marketingConsent:
          "I agree to receive commercial communications about properties and services (optional).",
        submit: "Submit",
        sending: "Sending...",
        sentTitle: "Message sent",
        sentBody:
          "Thank you for reaching out. A member of our team will be in touch with you shortly.",
      },
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
      cookieSettings: "Cookie settings",
    },
    cookies: {
      title: "Your privacy choices",
      description:
        "We use cookies and similar technologies to run this site, measure traffic (when you allow it), and improve your experience. You can accept all optional cookies, reject non-essential ones, or customise categories. See our Privacy Policy for details.",
      acceptAll: "Accept all",
      rejectNonEssential: "Reject non-essential",
      customize: "Customise choices",
      savePreferences: "Save preferences",
      back: "Back",
      necessaryTitle: "Strictly necessary",
      necessaryDesc:
        "Required for security, load balancing, language preference, and consent storage. Always active.",
      necessaryLocked: "Always on",
      analyticsTitle: "Analytics & performance",
      analyticsDesc:
        "Helps us understand how the site is used (e.g. Vercel Analytics, and Google Analytics if enabled).",
      marketingTitle: "Marketing",
      marketingDesc:
        "Used to deliver relevant offers or measure campaigns if we enable advertising tags.",
      privacyLink: "Privacy Policy",
    },
    legal: {
      lastUpdated: "Last updated",
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
    },
    listings: {
      title: "LISTINGS",
      description: "Explore our exclusive collection of luxury properties worldwide.",
      all: "ALL",
      houses: "HOUSES",
      apartments: "APARTMENTS",
      lands: "LANDS",
      noProperties: "No properties found in this category.",
      kicker: "Sitges · Garraf · Mediterranean coast",
      resultsCount: "{count} residences",
      resultsCountOne: "1 residence",
      filterSwipeHint: "Swipe to filter collection",
      viewListing: "View residence details",
      exploreDetails: "Explore",
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
    property: {
      description: "Description",
      details: "Property Details",
      amenities: "Amenities",
      amenitiesHighlightLabel: "Included as standard",
      amenitiesHighlightTitle: "Signature specifications",
      amenitiesHighlightBody:
        "Every item below is delivered as part of the residence—not optional extras. Architect-grade materials, integrated climate and lighting, and finishes chosen for longevity are what set these homes apart from typical listings.",
      amenitiesHighlightFooter: "{count} specifications delivered as standard",
      amenitiesHighlightRibbon:
        "CORIAN · PORCELANOSA · Architect-spec climate & lighting",
      amenitiesCarouselSwipeHint: "Swipe sideways",
      amenitiesCarouselArrowsHint: "or use the arrows",
      amenitiesCarouselPrevAria: "Previous three specifications",
      amenitiesCarouselNextAria: "Next three specifications",
      amenitiesCarouselPageStatus: "Specifications set {current} of {total}",
      amenitiesCarouselDotAria: "Go to specifications set {n}",
      backToListings: "Back to Listings",
      scheduleViewing: "Schedule Viewing",
      requestInformation: "Request Information",
      seeCompleteDescription: "See complete description",
      showLess: "Show less",
      landArea: "Land Area",
      totalBuiltArea: "Total Built Area",
      basementArea: "Basement Area",
      groundFloorArea: "Ground Floor Area",
      upperFloorArea: "Upper Floor Area",
      porchesArea: "Porches Area",
      terraceArea: "Terrace Area",
      poolArea: "Pool Area",
      specSheetLabel: "Approved metrics",
      specSheetTitle: "Surfaces & volumes",
      specSheetSubtitle:
        "Figures from the visado (approved project documentation). Porches, terrace and pool are included in the total built area where applicable.",
      statBedrooms: "Bedrooms",
      statBathrooms: "Bathrooms",
      buttons: {
        images: "Images",
        floorPlans: "Floor Plans",
        virtualTour: "3D Virtual Tour",
        video: "Video",
        map: "Map",
        renders: "Renders",
      },
      renders: {
        label: "ARCHITECTURAL VISUALIZATION",
        title: "Experience Every Detail Before It's Built",
        description: "Explore photorealistic renders of every room and space. Each image is crafted to reflect the exact materials, lighting, and atmosphere of the finished residence — so you can feel at home before the first key is turned.",
        cta: "View All Renders",
      },
      relatedProperties: {
        label: "Similar Properties",
        title: "You May Also Like",
        subtitle:
          "Explore more residences with the same architect-led specification.",
      },
    },
    interiorDesignPage: {
      hero: {
        kicker: "Urban Estate · Craft · Interior composition",
        titleLine1: "We are builders, craftsmen,",
        titleAccent: "and interior designers.",
        description:
          "Our developments are a living portfolio: proof of discipline, material honesty, and an eye for detail. The same rigor we bring to architecture now defines a discreet interior design service for discerning clients.",
        ctaPrimary: "Request a private consultation",
        ctaSecondary: "View the gallery",
      },
      mainVisual: {
        alt: "Curated interior furnishing and architectural detail",
      },
      bridge: {
        title: "Every residence is a preview of how we think",
        body: "Light, proportion, and tactility are not marketing words here—they are decisions you can walk through. When you engage our interior studio, you inherit the same standards that shape our homes from structure to the last line of light.",
      },
      pillars: {
        sectionTitle: "The promise behind every commission",
        carouselAria: "Four pillars of the interior design service",
        swipeHint: "Swipe to explore",
        prevAria: "Previous pillar",
        nextAria: "Next pillar",
        dotAria: "Go to pillar {n}",
        pageStatus: "Pillar {current} of {total}",
        items: [
          {
            title: "Architectural systems",
            description:
              "Elevators, climate, lighting, and joinery are designed as one language—not afterthoughts. Interiors inherit engineered clarity from day one.",
          },
          {
            title: "Material discipline",
            description:
              "Corian, porcelain, glass, and metal are specified for longevity and touch. We choose surfaces that age with grace, not trends that date quickly.",
          },
          {
            title: "Bespoke coordination",
            description:
              "We design, brief suppliers, and align technical trades so renders become reality. Furniture, audio, and environmental comfort are orchestrated together.",
          },
          {
            title: "Discretion by design",
            description:
              "Private consultations, measured pacing, and direct access to the team behind the projects. Luxury, for us, includes how the process feels.",
          },
        ],
      },
      featuresIntro: {
        label: "Signature systems",
        title: "What you see in our homes is what we design for yours",
        subtitle:
          "The technical differentiators below are standard in our developments—and the same vocabulary guides our interior commissions.",
      },
      features: [
        {
          title: "Glass interior elevators",
          text: "Every house includes a fully integrated interior glass elevator. In our interior design projects, vertical circulation becomes an architectural statement—transparent shafts, refined lighting integration, and seamless floor transitions redefine movement inside the home.",
        },
        {
          title: "Integrated magnetic LED architecture",
          text: "Ceiling lighting is not applied—it is engineered. Magnetic tracks recessed into plasterboard, linear hidden stair LEDs, and architectural light lines create depth, shadow, and precision.",
        },
        {
          title: "Seamless motorized sliding systems",
          text: "All carpentry is sliding, motorized, and threshold-free. Access via fingerprint, code, or remote. Interior continuity without steps and without visual interruption.",
        },
        {
          title: "Perimeter linear pool lighting",
          text: "Pools are illuminated perimetrally with linear systems—never spotlights. A detail rarely seen even in luxury hotels. Light becomes a floating architectural plane.",
        },
        {
          title: "Architectural climate comfort",
          text: "Air conditioning is delivered through two-meter linear perimeter grilles instead of visible anemostats. Comfort without drafts. Performance without aesthetic compromise.",
        },
        {
          title: "Corian and porcelain material standard",
          text: "Sanitary elements are crafted in Corian, not ceramic. Walls are finished in premium porcelain instead of paint. Materials are chosen for longevity, precision, and tactile refinement.",
        },
        {
          title: "Multi-zone underfloor heating",
          text: "Invisible thermal comfort distributed per zone. No radiators. No visual noise. Pure architectural clarity.",
        },
        {
          title: "Architectural stair and balustrade detailing",
          text: "Linear LED stair illumination, full-length floor-fixed balustrades, and concealed LED glass integration. Structure and light working together.",
        },
        {
          title: "Technical exterior precision",
          text: "Forty-five-degree tubular aluminum fencing, reflective smoked glass garage doors, pivoting metal entrance doors with multi-code access, heated pools, and engineered rainwater drainage systems.",
        },
      ],
      process: {
        title: "From first conversation to handover",
        intro:
          "A calm, director-led path—so the experience matches the outcome.",
        steps: [
          {
            title: "Discover",
            description:
              "We listen to how you live, visit the space, and align ambitions with feasibility—architecture, light, and daily rituals.",
          },
          {
            title: "Concept",
            description:
              "Spatial direction, palettes, and lighting narratives take shape. You see the intent before commitments harden.",
          },
          {
            title: "Coordinate",
            description:
              "Suppliers, MEP, joinery, and audiovisual are integrated on a single thread—fewer gaps, fewer surprises.",
          },
          {
            title: "Handover",
            description:
              "Installation is executed to the agreed standard; the home is tuned so comfort, silence, and detail read as intended.",
          },
        ],
      },
      executionBand: {
        title: "From concept to execution",
        body: "We design. We coordinate suppliers. We integrate technical systems. We deliver furniture as rendered—with audio integration where specified, multi-zone heating, and architectural glazing language carried through.",
      },
      closing: {
        title: "Where property value meets life value",
        body: "Whether you purchase an Urban Estate residence or already own a property, our interior studio elevates your space to the same architectural standard that defines our projects.",
        ctaPrimary: "Start your interior project",
        ctaSecondary: "Explore residences",
      },
      media: {
        playVideoAria: "Play video",
        videoPreviewAlt: "Video preview thumbnail",
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
      interiorDesign: "DISEÑO DE INTERIORES",
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
      kicker: "Sitges · Garraf · Costa mediterránea",
      scrollHint: "Desliza para explorar nuestros pilares",
      chapterLabel: "Capítulo",
      bridgeTitle:
        "Residencias pensadas para perdurar, no para modas. Descubre la colección.",
      bridgeCta: "Ver residencias",
      carouselAria: "Nuestra filosofía en tres capítulos",
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
      form: {
        privacyConsentBeforeLink: "He leído la ",
        privacyConsentAfterLink:
          " y acepto el tratamiento de mis datos personales para gestionar esta solicitud.",
        marketingConsent:
          "Acepto recibir comunicaciones comerciales sobre propiedades y servicios (opcional).",
        submit: "Enviar",
        sending: "Enviando...",
        sentTitle: "Mensaje enviado",
        sentBody:
          "Gracias por contactarnos. Un miembro de nuestro equipo se pondrá en contacto contigo pronto.",
      },
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
      cookieSettings: "Configuración de cookies",
    },
    cookies: {
      title: "Tus opciones de privacidad",
      description:
        "Utilizamos cookies y tecnologías similares para operar el sitio, medir el tráfico (si lo permites) y mejorar tu experiencia. Puedes aceptar todas las cookies opcionales, rechazar las no esenciales o personalizar las categorías. Consulta nuestra Política de Privacidad para más información.",
      acceptAll: "Aceptar todas",
      rejectNonEssential: "Rechazar no esenciales",
      customize: "Personalizar",
      savePreferences: "Guardar preferencias",
      back: "Volver",
      necessaryTitle: "Estrictamente necesarias",
      necessaryDesc:
        "Necesarias para seguridad, equilibrio de carga, idioma y almacenamiento del consentimiento. Siempre activas.",
      necessaryLocked: "Siempre activas",
      analyticsTitle: "Análisis y rendimiento",
      analyticsDesc:
        "Nos ayudan a entender el uso del sitio (p. ej. Vercel Analytics y Google Analytics si está activado).",
      marketingTitle: "Marketing",
      marketingDesc:
        "Para ofertas relevantes o medición de campañas si activamos etiquetas publicitarias.",
      privacyLink: "Política de Privacidad",
    },
    legal: {
      lastUpdated: "Última actualización",
      privacyTitle: "Política de Privacidad",
      termsTitle: "Términos del Servicio",
    },
    listings: {
      title: "PROPIEDADES",
      description: "Explora nuestra colección exclusiva de propiedades de lujo en todo el mundo.",
      all: "TODAS",
      houses: "CASAS",
      apartments: "APARTAMENTOS",
      lands: "TERRENOS",
      noProperties: "No se encontraron propiedades en esta categoría.",
      kicker: "Sitges · Garraf · Costa mediterránea",
      resultsCount: "{count} residencias",
      resultsCountOne: "1 residencia",
      filterSwipeHint: "Desliza para filtrar la colección",
      viewListing: "Ver detalles de la residencia",
      exploreDetails: "Explorar",
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
    property: {
      description: "Descripción",
      details: "Detalles de la Propiedad",
      amenities: "Comodidades",
      amenitiesHighlightLabel: "Incluido de serie",
      amenitiesHighlightTitle: "Especificaciones distintivas",
      amenitiesHighlightBody:
        "Cada elemento que ves a continuación forma parte de la entrega de la vivienda, no son extras opcionales. Materiales de grado arquitectónico, climatización e iluminación integradas y acabados pensados para la longevidad son lo que distingue estas casas de las ofertas habituales.",
      amenitiesHighlightFooter: "{count} especificaciones incluidas de serie",
      amenitiesHighlightRibbon:
        "CORIAN · PORCELANOSA · Climatización e iluminación de especificación arquitectónica",
      amenitiesCarouselSwipeHint: "Desliza a los lados",
      amenitiesCarouselArrowsHint: "o usa las flechas",
      amenitiesCarouselPrevAria: "Tres especificaciones anteriores",
      amenitiesCarouselNextAria: "Siguientes tres especificaciones",
      amenitiesCarouselPageStatus: "Grupo de especificaciones {current} de {total}",
      amenitiesCarouselDotAria: "Ir al grupo de especificaciones {n}",
      backToListings: "Volver a Propiedades",
      scheduleViewing: "Programar Visita",
      requestInformation: "Solicitar Información",
      seeCompleteDescription: "Ver descripción completa",
      showLess: "Mostrar menos",
      landArea: "Superficie del Terreno",
      totalBuiltArea: "Superficie Construida Total",
      basementArea: "Superficie Sótano",
      groundFloorArea: "Superficie Planta Baja",
      upperFloorArea: "Superficie Planta Alta",
      porchesArea: "Superficie Porches",
      terraceArea: "Superficie Terraza",
      poolArea: "Superficie Piscina",
      specSheetLabel: "Métricas homologadas",
      specSheetTitle: "Superficies y volúmenes",
      specSheetSubtitle:
        "Cifras según el visado (proyecto aprobado). Porches, terraza y piscina están incluidos en la superficie construida total cuando corresponde.",
      statBedrooms: "Dormitorios",
      statBathrooms: "Baños",
      buttons: {
        images: "Imágenes",
        floorPlans: "Planos",
        virtualTour: "Tour Virtual 3D",
        video: "Video",
        map: "Mapa",
        renders: "Renderizados",
      },
      renders: {
        label: "VISUALIZACIÓN ARQUITECTÓNICA",
        title: "Experimenta Cada Detalle Antes de que se Construya",
        description: "Explora renders fotorrealistas de cada habitación y espacio. Cada imagen refleja los materiales, la iluminación y la atmósfera exactos de la residencia terminada — para que te sientas en casa antes de girar la primera llave.",
        cta: "Ver Todos los Renders",
      },
      relatedProperties: {
        label: "Propiedades similares",
        title: "También te puede interesar",
        subtitle:
          "Descubre más residencias con la misma especificación dirigida por arquitectos.",
      },
    },
    interiorDesignPage: {
      hero: {
        kicker: "Urban Estate · Oficio · Composición interior",
        titleLine1: "Somos constructores, artesanos",
        titleAccent: "y diseñadores de interiores.",
        description:
          "Nuestros desarrollos son un portafolio vivo: prueba de disciplina, honestidad material y mirada al detalle. La misma exigencia que aportamos a la arquitectura define ahora un servicio discreto de diseño de interiores para clientes exigentes.",
        ctaPrimary: "Solicitar consulta privada",
        ctaSecondary: "Ver la galería",
      },
      mainVisual: {
        alt: "Mobiliario curado y detalle arquitectónico",
      },
      bridge: {
        title: "Cada residencia anticipa cómo pensamos",
        body: "Luz, proporción y tactilidad no son eslóganes: son decisiones que se recorren. Al encargar nuestro estudio interior, heredáis los mismos estándares que moldean nuestras casas desde la estructura hasta la última línea de luz.",
      },
      pillars: {
        sectionTitle: "La promesa detrás de cada encargo",
        carouselAria: "Cuatro pilares del servicio de diseño de interiores",
        swipeHint: "Desliza para explorar",
        prevAria: "Pilar anterior",
        nextAria: "Pilar siguiente",
        dotAria: "Ir al pilar {n}",
        pageStatus: "Pilar {current} de {total}",
        items: [
          {
            title: "Sistemas arquitectónicos",
            description:
              "Ascensores, climatización, iluminación y carpintería se diseñan como un solo lenguaje, no como remiendos. Los interiores heredan claridad proyectada desde el inicio.",
          },
          {
            title: "Disciplina material",
            description:
              "Corian, porcelánico, vidrio y metal se especifican por longevidad y tacto. Elegimos superficies que envejecen con dignidad, no tendencias que caducan pronto.",
          },
          {
            title: "Coordinación a medida",
            description:
              "Diseñamos, briefeamos proveedores y alineamos oficios técnicos para que los renders se vuelvan realidad. Mobiliario, audio y confort ambiental se orquestan juntos.",
          },
          {
            title: "Discreción por diseño",
            description:
              "Consultas privadas, ritmo medido y acceso directo al equipo detrás de los proyectos. El lujo, para nosotros, incluye cómo se vive el proceso.",
          },
        ],
      },
      featuresIntro: {
        label: "Sistemas distintivos",
        title: "Lo que ves en nuestras casas es lo que diseñamos para la tuya",
        subtitle:
          "Los diferenciadores técnicos siguientes son estándar en nuestros desarrollos—y el mismo vocabulario guía nuestros encargos de interior.",
      },
      features: [
        {
          title: "Ascensores interiores de vidrio",
          text: "Cada vivienda incluye un ascensor interior de vidrio totalmente integrado. En nuestros proyectos de interior, la circulación vertical es una declaración arquitectónica: huecos transparentes, iluminación refinada y transiciones de forjado sin fisuras.",
        },
        {
          title: "Arquitectura LED magnética integrada",
          text: "La luz de techo no se coloca: se proyecta. Rieles magnéticos empotrados en cartón yeso, LED lineal oculto en escaleras y líneas de luz arquitectónica generan profundidad, sombra y precisión.",
        },
        {
          title: "Sistemas corredizos motorizados sin umbral",
          text: "Toda la carpintería es corrediza, motorizada y sin resalto. Acceso por huella, código o mando. Continuidad interior sin escalones ni ruptura visual.",
        },
        {
          title: "Iluminación perimetral lineal en piscinas",
          text: "Las piscinas se iluminan perimetralmente con sistemas lineares, nunca con focos. Un detalle poco habitual incluso en hoteles de lujo. La luz se convierte en plano arquitectónico flotante.",
        },
        {
          title: "Confort climático arquitectónico",
          text: "El aire acondicionado se distribuye con rejillas lineales perimetrales de dos metros en lugar de anemostatos visibles. Confort sin corrientes. Rendimiento sin comprometer la estética.",
        },
        {
          title: "Estándar material Corian y porcelánico",
          text: "Los elementos sanitarios se elaboran en Corian, no en cerámica. Los paramentos se acaban en porcelánico premium en lugar de pintura. Materiales por longevidad, precisión y refinamiento táctil.",
        },
        {
          title: "Calefacción por suelo radiante multizona",
          text: "Confort térmico invisible por zonas. Sin radiadores. Sin ruido visual. Claridad arquitectónica pura.",
        },
        {
          title: "Detalle de escalera y barandilla",
          text: "Iluminación LED lineal en escalera, barandillas ancladas a forjado a todo lo largo e integración LED en vidrio. Estructura y luz trabajando juntas.",
        },
        {
          title: "Precisión técnica exterior",
          text: "Cerramiento tubular de aluminio a 45°, puertas de garaje de vidrio ahumado reflectante, puertas pivotantes de entrada metálicas con acceso multicódigo, piscinas climatizadas y sistemas de drenaje pluvial proyectados.",
        },
      ],
      process: {
        title: "Del primer encuentro a la entrega",
        intro:
          "Un recorrido sereno y dirigido—para que la experiencia iguale al resultado.",
        steps: [
          {
            title: "Descubrir",
            description:
              "Escuchamos cómo vivís, visitamos el espacio y alineamos ambición con viabilidad—arquitectura, luz y rituales cotidianos.",
          },
          {
            title: "Concepto",
            description:
              "Toman forma la dirección espacial, las paletas y la narrativa lumínica. Veis la intención antes de fijar compromisos.",
          },
          {
            title: "Coordinar",
            description:
              "Proveedores, instalaciones, carpintería y audiovisual en un solo hilo—menos fisuras, menos sorpresas.",
          },
          {
            title: "Entrega",
            description:
              "La instalación se ejecuta al estándar acordado; la vivienda se ajusta para que confort, silencio y detalle se lean como se pretendía.",
          },
        ],
      },
      executionBand: {
        title: "Del concepto a la ejecución",
        body: "Diseñamos. Coordinamos proveedores. Integramos sistemas técnicos. Entregamos el mobiliario como en el render—con integración de audio donde se especifica, calefacción multizona y lenguaje de acristalamiento arquitectónico mantenido.",
      },
      closing: {
        title: "Donde el valor del inmueble se encuentra con el valor de vida",
        body: "Tanto si adquirís una residencia Urban Estate como si ya tenéis una propiedad, nuestro estudio de interiores eleva el espacio al mismo estándar arquitectónico que define nuestros proyectos.",
        ctaPrimary: "Iniciar proyecto de interior",
        ctaSecondary: "Explorar residencias",
      },
      media: {
        playVideoAria: "Reproducir vídeo",
        videoPreviewAlt: "Miniatura de vista previa del vídeo",
      },
    },
  },
};

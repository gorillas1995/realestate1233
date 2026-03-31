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
    /** Uppercase site / place line above the headline */
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };

  /** Homepage metric cards (below hero) */
  homeStats: { value: string; label: string }[];

  // Stats Section — location band copy below metric cards
  stats: {
    aboutUs: string;
    heading: string;
    /** Location narrative — rendered as stacked paragraphs */
    descriptionParagraphs: string[];
    viewListings: string;
  };

  // Featured Listings
  featuredListings: {
    label: string;
    title: string;
    description: string;
    viewListings: string;
  };

  /** Homepage philosophy — band + intro + pillar cards */
  homePhilosophy: {
    bandKicker: string;
    bandHeading: string;
    bandBody: string;
    sectionKicker: string;
    title: string;
    introParagraphs: string[];
    pillars: { title: string; body: string }[];
  };

  /** Homepage Sitges culture & events (replaces former testimonials strip) */
  homeTown: {
    label: string;
    title: string;
    introParagraphs: string[];
    events: { name: string; detail: string }[];
    outro: string;
  };

  // CTA Section
  cta: {
    title: string;
    description: string;
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
    /** Brand wordmark next to logo area */
    brandName: string;
    /** Entity name after © in the bottom bar */
    copyrightEntity: string;
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
    /** Property page video modal when videoPending and no URL yet */
    videoPendingTitle: string;
    videoPendingBody: string;
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
      kicker:
        "SITGES CAPITAL ESTATE · LA PLANA · SITGES · BARCELONA COAST",
      title: "We don't build units.",
      subtitle: "We commission homes.",
      description:
        "Ten villas on the hillside of La Plana, each designed by an architect as a singular work — oriented to the sea, shaped by the site, and built for the way you actually choose to live.",
      cta: "Browse the residences",
    },
    homeStats: [
      { value: "35 km", label: "from Barcelona city centre" },
      { value: "300+", label: "sunny days per year" },
      { value: "10", label: "villas, each unique" },
    ],
    stats: {
      aboutUs: "THE LOCATION",
      heading: "35 minutes from Barcelona. Entirely its own world.",
      descriptionParagraphs: [
        "Sitges is not a suburb. It is a town with centuries of accumulated character — a promenade lined with modernist mansions, a historic centre of whitewashed streets and Gothic architecture, 17 beaches, a marina, and a cultural life that operates year-round without interruption.",
        "Barcelona is 35 kilometres away via direct motorway and rail. Close enough to use. Far enough to forget about.",
      ],
      viewListings: "Explore the residences",
    },
    featuredListings: {
      label: "The residences",
      title: "Each villa is presented individually.",
      description:
        "Browse floor plans, architecture, and specifications for each home across this site.",
      viewListings: "VIEW LISTINGS",
    },
    homePhilosophy: {
      bandKicker: "THE PHILOSOPHY",
      bandHeading: "Architecture as identity, not repetition.",
      bandBody:
        "Most residential developments begin with a template and work outward. We begin with the plot, the light, the view, and the person — and work from there.",
      sectionKicker: "La Plana",
      title: "The result is ten homes, not one project replicated ten times.",
      introParagraphs: [
        "Each of the ten villas at La Plana has been conceived independently, with its own architectural character, its own relationship to the Mediterranean, and its own interior logic. They share a hillside and a horizon. Nothing else is assumed.",
      ],
      pillars: [
        {
          title: "Architect-designed, individually",
          body: "No two villas share the same floor plan, facade, or spatial sequence. Each is a commission in its own right — resolved at the level of detail that matters.",
        },
        {
          title: "Built to last, not to sell quickly",
          body: "Materials, systems, and construction standards chosen for the life of the building — not the speed of the sale. Energy performance, durability, and craft in equal measure.",
        },
        {
          title: "Sea views as the premise",
          body: "Every villa has been positioned and orientated around its relationship to the Mediterranean. The view is not a bonus — it is the starting point of the design.",
        },
        {
          title: "Private, not isolated",
          body: "La Plana sits within walking distance of Sitges town centre, the promenade, and the beach — while maintaining the calm and privacy of a residential hillside address.",
        },
      ],
    },
    homeTown: {
      label: "Sitges",
      title: "A town that is always alive",
      introParagraphs: [
        "Sitges does not have a season. It has a calendar.",
        "For those who find stillness in routine but need culture within reach — Sitges delivers both without compromise. The town's event calendar fills every month of the year with events that draw international audiences and keep the town genuinely, permanently alive.",
      ],
      events: [
        {
          name: "Sitges Film Festival",
          detail:
            "Oscar-qualified. One of the world's top 3 genre festivals. Every October since 1968.",
        },
        {
          name: "Carnival",
          detail:
            "300,000+ visitors. The finest carnival in Catalonia. February.",
        },
        {
          name: "Festa de la Verema",
          detail:
            "Wine harvest festival. Penedès vineyards begin at Sitges' edge.",
        },
        {
          name: "Corpus & Flower Carpets",
          detail:
            "Streets become art. One of the most striking traditions on the Catalan coast.",
        },
        {
          name: "Pride Sitges",
          detail: "International, open, and celebrated on the beach. June.",
        },
        {
          name: "Vintage Car Rally",
          detail:
            "Barcelona to Sitges. Classic cars, cliffside roads, and a finish line on the promenade.",
        },
      ],
      outro:
        "Complement that with a permanent offer of restaurants, galleries, and beach clubs that operate at a level disproportionate to the town's size — and the picture becomes clear: this is somewhere you will never exhaust.",
    },
    cta: {
      title: "Each villa is presented individually.",
      description:
        "Browse the individual projects across this site — floor plans, architecture, and specifications are available for each residence. When you are ready to discuss, we are available for a private appointment at a time that suits you.",
      button: "Request a private appointment",
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
      description: "La Plana · Sitges · Barcelona Coast",
      brandName: "SITGES CAPITAL ESTATE",
      copyrightEntity: "Sitges Capital Estate",
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
      videoPendingTitle: "Video coming soon",
      videoPendingBody:
        "A new walkthrough for this residence will be linked here shortly. For a private viewing in the meantime, please contact us.",
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
      kicker:
        "SITGES CAPITAL ESTATE · LA PLANA · SITGES · COSTA DE BARCELONA",
      title: "No construimos unidades.",
      subtitle: "Encargamos hogares.",
      description:
        "Diez villas en la ladera de La Plana, cada una diseñada por un arquitecto como una obra singular — orientada al mar, moldeada por el emplazamiento y construida para la forma en que realmente eliges vivir.",
      cta: "Ver las residencias",
    },
    homeStats: [
      { value: "35 km", label: "desde el centro de Barcelona" },
      { value: "300+", label: "días de sol al año" },
      { value: "10", label: "villas, cada una única" },
    ],
    stats: {
      aboutUs: "LA UBICACIÓN",
      heading: "A 35 minutos de Barcelona. Un mundo totalmente propio.",
      descriptionParagraphs: [
        "Sitges no es un suburbio. Es un pueblo con siglos de carácter acumulado — un paseo marítimo bordeado de mansiones modernistas, un casco histórico de calles encaladas y arquitectura gótica, 17 playas, un puerto deportivo y una vida cultural que late todo el año sin interrupción.",
        "Barcelona dista 35 kilómetros por autopista y ferrocarril directos. Lo bastante cerca para usarla. Lo bastante lejos para olvidarla.",
      ],
      viewListings: "Explorar las residencias",
    },
    featuredListings: {
      label: "Las residencias",
      title: "Cada villa se presenta de forma individual.",
      description:
        "Consulta planos, arquitectura y especificaciones de cada hogar en este sitio.",
      viewListings: "VER PROPIEDADES",
    },
    homePhilosophy: {
      bandKicker: "LA FILOSOFÍA",
      bandHeading: "Arquitectura como identidad, no como repetición.",
      bandBody:
        "La mayoría de promociones residenciales parten de una plantilla y avanzan hacia fuera. Nosotros partimos de la parcela, la luz, las vistas y la persona — y construimos desde ahí.",
      sectionKicker: "La Plana",
      title: "El resultado son diez hogares, no un proyecto replicado diez veces.",
      introParagraphs: [
        "Cada una de las diez villas de La Plana ha sido concebida de forma independiente, con su propio carácter arquitectónico, su propia relación con el Mediterráneo y su propia lógica interior. Comparten una ladera y un horizonte. Nada más se da por sentado.",
      ],
      pillars: [
        {
          title: "Diseñadas por arquitectos, una a una",
          body: "Ninguna villa comparte la misma planta, fachada o secuencia espacial. Cada una es un encargo propio — resuelto al nivel de detalle que importa.",
        },
        {
          title: "Construidas para durar, no para vender rápido",
          body: "Materiales, sistemas y estándares constructivos elegidos para la vida del edificio — no para la velocidad de la venta. Rendimiento energético, durabilidad y oficio a partes iguales.",
        },
        {
          title: "Las vistas al mar como premisa",
          body: "Cada villa se ha situado y orientado en torno a su relación con el Mediterráneo. La vista no es un extra — es el punto de partida del diseño.",
        },
        {
          title: "Privadas, no aisladas",
          body: "La Plana queda a poca distancia a pie del centro de Sitges, del paseo marítimo y de la playa — manteniendo la calma y la privacidad de una ladera residencial.",
        },
      ],
    },
    homeTown: {
      label: "Sitges",
      title: "Un pueblo que siempre está vivo",
      introParagraphs: [
        "Sitges no tiene temporada. Tiene calendario.",
        "Para quien encuentra quietud en la rutina pero necesita cultura al alcance — Sitges ofrece ambas cosas sin renuncias. El calendario de eventos del pueblo llena todos los meses del año con citas que atraen público internacional y mantienen el lugar genuina y permanentemente vivo.",
      ],
      events: [
        {
          name: "Festival de Cine de Sitges",
          detail:
            "Preclasificatorio para los Oscar. Uno de los tres mejores festivales de género del mundo. Cada octubre desde 1968.",
        },
        {
          name: "Carnaval",
          detail:
            "Más de 300.000 visitantes. El carnaval más destacado de Cataluña. Febrero.",
        },
        {
          name: "Festa de la Verema",
          detail:
            "Fiesta de la vendimia. Los viñedos del Penedès comienzan al borde de Sitges.",
        },
        {
          name: "Corpus y alfombras florales",
          detail:
            "Las calles se convierten en arte. Una de las tradiciones más llamativas de la costa catalana.",
        },
        {
          name: "Pride Sitges",
          detail: "Internacional, abierto y celebrado en la playa. Junio.",
        },
        {
          name: "Rally de coches de época",
          detail:
            "Barcelona a Sitges. Coches clásicos, carreteras sobre el acantilado y meta en el paseo marítimo.",
        },
      ],
      outro:
        "Complétalo con una oferta permanente de restaurantes, galerías y beach clubs que funcionan a un nivel desproporcionado al tamaño del pueblo — y la imagen queda clara: aquí no te quedarás sin nada por descubrir.",
    },
    cta: {
      title: "Cada villa se presenta de forma individual.",
      description:
        "Explora en este sitio los proyectos uno a uno — hay planos, arquitectura y especificaciones para cada residencia. Cuando quieras hablarlo, concertamos una cita privada en el momento que te venga bien.",
      button: "Solicitar cita privada",
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
      description: "La Plana · Sitges · Costa de Barcelona",
      brandName: "SITGES CAPITAL ESTATE",
      copyrightEntity: "Sitges Capital Estate",
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
      videoPendingTitle: "Vídeo próximamente",
      videoPendingBody:
        "En breve enlazaremos un nuevo recorrido de esta residencia. Mientras tanto, para una visita privada, contáctanos.",
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

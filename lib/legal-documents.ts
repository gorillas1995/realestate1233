/**
 * Template legal copy for Privacy Policy and Terms of Service (EN / ES).
 * Interpolates values from site-legal.ts. Not a substitute for counsel.
 */

import type { Language } from "@/lib/translations";
import { LEGAL_LAST_UPDATED, SITE_LEGAL } from "@/lib/site-legal";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export { LEGAL_LAST_UPDATED };

const S = SITE_LEGAL;

export function getPrivacySections(lang: Language): LegalSection[] {
  if (lang === "es") {
    return getPrivacySectionsEs();
  }
  return getPrivacySectionsEn();
}

function getPrivacySectionsEn(): LegalSection[] {
  return [
    {
      id: "controller",
      heading: "1. Data controller",
      paragraphs: [
        `The data controller responsible for processing personal data collected through ${S.siteDomain} (the “Website”) is ${S.controllerName}, with address at ${S.registeredAddress}. You may contact us regarding privacy matters at ${S.privacyContactEmail}.`,
        `This Website is primarily directed at individuals interested in properties and services in Sitges, Garraf, and the Barcelona area, Spain. If you are in the European Economic Area (EEA) or the United Kingdom, the General Data Protection Regulation (GDPR) and applicable local laws (including Spanish data protection legislation) apply to our processing of your personal data.`,
      ],
    },
    {
      id: "scope",
      heading: "2. Scope of this policy",
      paragraphs: [
        "This Privacy Policy explains what personal data we collect, why we use it, how long we keep it, who we share it with, and what rights you have. It should be read together with our Terms of Service and our cookie information (available when you open the cookie preferences on the Website).",
        "We do not knowingly collect data from children under 16 for marketing purposes. If you believe we have done so, please contact us and we will delete it.",
      ],
    },
    {
      id: "data-collected",
      heading: "3. Data we collect",
      paragraphs: [
        "Contact form: when you submit our contact form, we collect the information you provide (such as name, email address, telephone number, inquiry type, budget range, property of interest, preferred contact method, timing preferences, and your message).",
        "Browsing and technical data: our hosting and infrastructure providers may process server logs (e.g. IP address, browser type, date/time of requests) for security and reliability.",
        "Analytics (optional): if you consent via our cookie tool, we may use Vercel Web Analytics and, when configured, Google Analytics and/or Google Tag Manager to understand aggregate traffic and usage. These tools may use cookies or similar technologies.",
        "Marketing tags (optional): if you consent to the marketing category, we may load tags used for advertising or campaign measurement when we enable them.",
      ],
    },
    {
      id: "purposes",
      heading: "4. Purposes and legal bases (GDPR)",
      paragraphs: [
        "To respond to your contact request and, where relevant, to take steps before entering into a contract — legal bases: performance of a contract (Article 6(1)(b) GDPR) and/or our legitimate interests in responding to business enquiries (Article 6(1)(f) GDPR), depending on the nature of your request.",
        "To operate and secure the Website, including fraud prevention and abuse detection — legal basis: legitimate interests (Article 6(1)(f) GDPR).",
        "To comply with legal obligations (e.g. tax or accounting rules where applicable) — legal basis: legal obligation (Article 6(1)(c) GDPR).",
        "For analytics and marketing cookies or similar technologies — legal basis: your consent (Article 6(1)(a) GDPR), which you can withdraw at any time via “Cookie settings” in the footer without affecting the lawfulness of processing before withdrawal.",
        "For optional commercial communications, where you have ticked a separate consent box — legal basis: consent (Article 6(1)(a) GDPR).",
      ],
    },
    {
      id: "cookies",
      heading: "5. Cookies and similar technologies",
      paragraphs: [
        "We use strictly necessary cookies (or local storage) to remember your language preference, store your cookie choices, and deliver core functionality. These do not require consent under the ePrivacy rules in the same way as optional analytics or marketing tools.",
        "Optional categories (analytics, marketing) are only activated after you accept them in our cookie drawer or save customised preferences. You can change your mind at any time using “Cookie settings” in the footer.",
      ],
    },
    {
      id: "recipients",
      heading: "6. Recipients and processors",
      paragraphs: [
        "Form submissions are transmitted to Formsync (formsync.app) or the endpoint we configure to receive form data, which acts as a processor on our behalf for the purpose of delivering your message to our team.",
        "The Website is hosted on Vercel, Inc. (United States and other regions). Vercel may process technical and analytics data as described in their documentation.",
        "If we enable Google Analytics or Google Tag Manager, Google Ireland Limited / Google LLC may process data according to Google’s policies.",
        "We may also use other service providers (e.g. email, CRM) as our business needs evolve; we will update this policy when we add materially new categories of recipients.",
      ],
    },
    {
      id: "transfers",
      heading: "7. International transfers",
      paragraphs: [
        "Some processors are located outside the EEA. Where required, we rely on appropriate safeguards such as the European Commission’s Standard Contractual Clauses (SCCs) or other mechanisms recognised under GDPR, in addition to any supplementary measures the provider implements.",
      ],
    },
    {
      id: "retention",
      heading: "8. Retention",
      paragraphs: [
        "We keep contact form submissions and related correspondence only as long as needed to handle your request, manage our relationship with you, and comply with legal obligations. Retention periods may vary depending on the nature of the enquiry and applicable law.",
        "Server and security logs are kept for a limited period consistent with operational and security needs.",
      ],
    },
    {
      id: "rights",
      heading: "9. Your rights",
      paragraphs: [
        "Depending on your location and applicable law, you may have the right to: access your personal data; rectify inaccurate data; erase data; restrict processing; object to processing based on legitimate interests; data portability (where processing is based on consent or contract and automated); and withdraw consent at any time where processing is consent-based.",
        "To exercise these rights, contact us at " +
          S.privacyContactEmail +
          ". You also have the right to lodge a complaint with a supervisory authority. In Spain, the Agencia Española de Protección de Datos (AEPD) — www.aepd.es.",
      ],
    },
    {
      id: "changes",
      heading: "10. Changes",
      paragraphs: [
        `We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do. If we make material changes to how we use cookies, we may increase our consent policy version so that you are invited to review your choices again.`,
      ],
    },
  ];
}

function getPrivacySectionsEs(): LegalSection[] {
  return [
    {
      id: "controller",
      heading: "1. Responsable del tratamiento",
      paragraphs: [
        `El responsable del tratamiento de los datos personales recogidos a través de ${S.siteDomain} (el “Sitio web”) es ${S.controllerName}, con domicilio en ${S.registeredAddress}. Puede contactarnos en materia de privacidad en ${S.privacyContactEmail}.`,
        `Este Sitio web se dirige principalmente a personas interesadas en propiedades y servicios en Sitges, Garraf y el área de Barcelona, España. Si se encuentra en el Espacio Económico Europeo (EEE) o en el Reino Unido, el Reglamento General de Protección de Datos (RGPD) y la legislación local aplicable (incluida la normativa española de protección de datos) resultan de aplicación.`,
      ],
    },
    {
      id: "scope",
      heading: "2. Ámbito de esta política",
      paragraphs: [
        "Esta Política de Privacidad explica qué datos personales recogemos, con qué finalidades los utilizamos, durante cuánto tiempo los conservamos, con quién los compartimos y qué derechos tiene. Debe leerse junto con nuestros Términos del Servicio y la información sobre cookies (disponible al abrir las preferencias de cookies en el Sitio web).",
        "No recopilamos conscientemente datos de menores de 16 años con fines de marketing. Si cree que lo hemos hecho, contacte con nosotros y los eliminaremos.",
      ],
    },
    {
      id: "data-collected",
      heading: "3. Datos que recogemos",
      paragraphs: [
        "Formulario de contacto: cuando envía nuestro formulario, recogemos la información que nos facilita (por ejemplo, nombre, correo electrónico, teléfono, tipo de consulta, rango de presupuesto, propiedad de interés, forma y horario de contacto preferidos y su mensaje).",
        "Datos de navegación y técnicos: nuestro alojamiento e infraestructura pueden tratar registros de servidor (p. ej. dirección IP, tipo de navegador, fecha/hora de las solicitudes) por seguridad y fiabilidad.",
        "Análisis (opcional): si usted lo consiente mediante nuestra herramienta de cookies, podemos utilizar Vercel Web Analytics y, cuando esté configurado, Google Analytics y/o Google Tag Manager para conocer el tráfico y el uso de forma agregada. Estas herramientas pueden usar cookies o tecnologías similares.",
        "Etiquetas de marketing (opcional): si consiente la categoría de marketing, podemos cargar etiquetas publicitarias o de medición de campañas cuando las activemos.",
      ],
    },
    {
      id: "purposes",
      heading: "4. Finalidades y bases legales (RGPD)",
      paragraphs: [
        "Atender su solicitud de contacto y, en su caso, adoptar medidas previas a la celebración de un contrato — bases legales: ejecución de un contrato (art. 6.1.b RGPD) y/o interés legítimo en responder a consultas comerciales (art. 6.1.f RGPD), según el caso.",
        "Operar y asegurar el Sitio web, incluida la prevención del fraude — base legal: interés legítimo (art. 6.1.f RGPD).",
        "Cumplir obligaciones legales (p. ej. fiscales o contables cuando aplique) — base legal: obligación legal (art. 6.1.c RGPD).",
        "Cookies o tecnologías similares de análisis y marketing — base legal: su consentimiento (art. 6.1.a RGPD), que puede retirar en cualquier momento mediante “Configuración de cookies” en el pie de página, sin afectar a la licitud del tratamiento previo.",
        "Comunicaciones comerciales opcionales, cuando marque una casilla de consentimiento independiente — base legal: consentimiento (art. 6.1.a RGPD).",
      ],
    },
    {
      id: "cookies",
      heading: "5. Cookies y tecnologías similares",
      paragraphs: [
        "Utilizamos cookies (o almacenamiento local) estrictamente necesarias para recordar su idioma, guardar sus decisiones sobre cookies y prestar la funcionalidad esencial.",
        "Las categorías opcionales (análisis, marketing) solo se activan tras aceptarlas en el panel de cookies o guardar preferencias personalizadas. Puede cambiar de opinión en cualquier momento con “Configuración de cookies” en el pie de página.",
      ],
    },
    {
      id: "recipients",
      heading: "6. Destinatarios y encargados del tratamiento",
      paragraphs: [
        "Los envíos del formulario se transmiten a Formsync (formsync.app) o al punto final que configuremos para recibir los datos, que actúa como encargado del tratamiento en nuestro nombre para entregar su mensaje a nuestro equipo.",
        "El Sitio web está alojado en Vercel, Inc. (Estados Unidos y otras regiones). Vercel puede tratar datos técnicos y de análisis según su documentación.",
        "Si activamos Google Analytics o Google Tag Manager, Google Ireland Limited / Google LLC puede tratar datos según las políticas de Google.",
        "Podemos utilizar otros proveedores (p. ej. correo, CRM) según evolucionen las necesidades; actualizaremos esta política si añadimos destinatarios relevantes.",
      ],
    },
    {
      id: "transfers",
      heading: "7. Transferencias internacionales",
      paragraphs: [
        "Algunos encargados están fuera del EEE. Cuando sea necesario, nos basamos en garantías adecuadas, como las Cláusulas Contractuales Tipo de la Comisión Europea u otros mecanismos reconocidos por el RGPD, además de medidas complementarias que implemente el proveedor.",
      ],
    },
    {
      id: "retention",
      heading: "8. Conservación",
      paragraphs: [
        "Conservamos los envíos del formulario y la correspondencia relacionada solo el tiempo necesario para gestionar su solicitud, mantener la relación con usted y cumplir obligaciones legales. Los plazos pueden variar según la naturaleza de la consulta.",
        "Los registros de servidor y seguridad se conservan un tiempo limitado acorde con necesidades operativas y de seguridad.",
      ],
    },
    {
      id: "rights",
      heading: "9. Sus derechos",
      paragraphs: [
        "Según su situación y la ley aplicable, puede tener derecho a: acceso; rectificación; supresión; limitación del tratamiento; oposición al tratamiento basado en interés legítimo; portabilidad (cuando el tratamiento se base en consentimiento o contrato y sea automatizado); y retirar el consentimiento cuando el tratamiento se base en el mismo.",
        "Para ejercerlos, escriba a " +
          S.privacyContactEmail +
          ". También puede presentar una reclamación ante una autoridad de control. En España: Agencia Española de Protección de Datos (AEPD) — www.aepd.es.",
      ],
    },
    {
      id: "changes",
      heading: "10. Cambios",
      paragraphs: [
        "Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha de “Última actualización” en la parte superior cambiará. Si modificamos de forma sustancial el uso de cookies, podemos incrementar la versión de la política de consentimiento para que pueda revisar de nuevo sus opciones.",
      ],
    },
  ];
}

export function getTermsSections(lang: Language): LegalSection[] {
  if (lang === "es") {
    return getTermsSectionsEs();
  }
  return getTermsSectionsEn();
}

function getTermsSectionsEn(): LegalSection[] {
  return [
    {
      id: "acceptance",
      heading: "1. Acceptance",
      paragraphs: [
        `By accessing or using ${S.siteDomain}, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Website.`,
      ],
    },
    {
      id: "service",
      heading: "2. The service",
      paragraphs: [
        "The Website provides general information about properties, projects, and related services offered in the Sitges / Barcelona area. Listings, images, descriptions, areas, and availability are indicative and subject to change without notice. Nothing on the Website constitutes an offer to sell or lease that can be accepted by submitting a form alone.",
      ],
    },
    {
      id: "not-advice",
      heading: "3. Not legal, tax, or investment advice",
      paragraphs: [
        "Content on the Website is for general information only. It is not legal, tax, financial, or investment advice. You should obtain independent professional advice before making decisions relating to property transactions.",
      ],
    },
    {
      id: "ip",
      heading: "4. Intellectual property",
      paragraphs: [
        "Text, images, logos, renders, plans, and other materials on the Website are protected by intellectual property laws. You may not copy, scrape, redistribute, or exploit them for commercial purposes without our prior written consent, except as allowed by mandatory law.",
      ],
    },
    {
      id: "liability",
      heading: "5. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law (including Spanish law), we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Website or reliance on its content.",
        "We do not guarantee that the Website will be uninterrupted or error-free. Links to third-party sites are provided for convenience; we are not responsible for their content or practices.",
      ],
    },
    {
      id: "law",
      heading: "6. Governing law and jurisdiction",
      paragraphs: [
        "These Terms are governed by the laws of Spain, without regard to conflict-of-law rules. Subject to mandatory consumer protections where applicable, you agree that the courts of Barcelona, Spain, shall have exclusive jurisdiction over disputes arising from these Terms or the Website — update this clause with your lawyer if a different venue is required.",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact",
      paragraphs: [
        `Questions about these Terms: ${S.privacyContactEmail}.`,
      ],
    },
    {
      id: "changes-terms",
      heading: "8. Changes",
      paragraphs: [
        "We may update these Terms from time to time. Continued use of the Website after changes constitutes acceptance of the revised Terms, except where stricter formalities apply.",
      ],
    },
  ];
}

function getTermsSectionsEs(): LegalSection[] {
  return [
    {
      id: "acceptance",
      heading: "1. Aceptación",
      paragraphs: [
        `Al acceder o utilizar ${S.siteDomain}, usted acepta estos Términos del Servicio y nuestra Política de Privacidad. Si no está de acuerdo, no utilice el Sitio web.`,
      ],
    },
    {
      id: "service",
      heading: "2. El servicio",
      paragraphs: [
        "El Sitio web ofrece información general sobre propiedades, proyectos y servicios relacionados en el área de Sitges / Barcelona. Los anuncios, imágenes, descripciones, superficies y disponibilidad son orientativos y pueden cambiar sin previo aviso. Nada en el Sitio web constituye una oferta de venta o arrendamiento aceptable solo con el envío de un formulario.",
      ],
    },
    {
      id: "not-advice",
      heading: "3. No es asesoramiento legal, fiscal ni de inversión",
      paragraphs: [
        "El contenido del Sitio web tiene fines informativos generales. No constituye asesoramiento legal, fiscal, financiero ni de inversión. Debe obtener asesoramiento profesional independiente antes de tomar decisiones sobre operaciones inmobiliarias.",
      ],
    },
    {
      id: "ip",
      heading: "4. Propiedad intelectual",
      paragraphs: [
        "Textos, imágenes, logotipos, renders, planos y demás materiales están protegidos por la legislación de propiedad intelectual. No puede copiarlos, extraerlos masivamente, redistribuirlos o explotarlos con fines comerciales sin nuestro consentimiento previo por escrito, salvo lo permitido por la ley imperativa.",
      ],
    },
    {
      id: "liability",
      heading: "5. Limitación de responsabilidad",
      paragraphs: [
        "En la medida máxima permitida por la ley aplicable (incluida la española), no seremos responsables de daños indirectos, incidentales, especiales o consecuenciales derivados del uso del Sitio web o de la confianza depositada en su contenido.",
        "No garantizamos que el Sitio web sea ininterrumpido o libre de errores. Los enlaces a sitios de terceros se ofrecen por conveniencia; no somos responsables de su contenido o prácticas.",
      ],
    },
    {
      id: "law",
      heading: "6. Ley aplicable y jurisdicción",
      paragraphs: [
        "Estos Términos se rigen por la legislación española, sin perjuicio de las normas imperativas de consumidores cuando correspondan. Salvo lo dispuesto por ley, usted acepta que los tribunales de Barcelona (España) tendrán jurisdicción exclusiva sobre las controversias derivadas de estos Términos o del Sitio web — revise esta cláusula con su abogado si necesita otro fuero.",
      ],
    },
    {
      id: "contact",
      heading: "7. Contacto",
      paragraphs: [
        `Consultas sobre estos Términos: ${S.privacyContactEmail}.`,
      ],
    },
    {
      id: "changes-terms",
      heading: "8. Cambios",
      paragraphs: [
        "Podemos actualizar estos Términos ocasionalmente. El uso continuado del Sitio web tras los cambios implica la aceptación de los Términos revisados, salvo que la ley exija formalidades distintas.",
      ],
    },
  ];
}

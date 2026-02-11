"use client";

import { useState } from "react";

const features = [
  {
    title: "Glass Interior Elevators",
    text: "Every house includes a fully integrated interior glass elevator. In our interior design projects, vertical circulation becomes an architectural statement. Transparent shafts, refined lighting integration and seamless floor transitions redefine movement inside the home.",
    image: "/lift-sticla.jpg",
  },
  {
    title: "Integrated Magnetic LED Architecture",
    text: "Ceiling lighting is not applied - it is engineered. Magnetic tracks recessed into plasterboard, linear hidden stair LEDs and architectural light lines create depth, shadow and precision.",
    video: "https://www.youtube.com/embed/vzRmFYQrqMs",
  },
  {
    title: "Seamless Motorized Sliding Systems",
    text: "All carpentry is sliding, motorized and threshold-free. Access via fingerprint, code or remote. Interior continuity without steps, without visual interruption.",
    video: "https://www.youtube.com/embed/0pGht6Bso-o",
  },
  {
    title: "Perimeter Linear Pool Lighting",
    text: "Pools are illuminated perimetrally with linear systems - never spotlights. A detail rarely seen even in luxury hotels. Light becomes a floating architectural plane.",
    video: "/hero-dessktop.mp4",
  },
  {
    title: "Architectural Climate Comfort",
    text: "Air conditioning is delivered through 2-meter linear perimeter grilles instead of visible anemostats. Comfort without drafts. Performance without aesthetic compromise.",
    image: "/tavan-aer.png",
  },
  {
    title: "Corian & Porcelain Material Standard",
    text: "Sanitary elements are crafted in Corian, not ceramic. Walls are finished in premium porcelain instead of paint. Materials are chosen for longevity, precision and tactile refinement.",
    image: "/corian.jpg",
  },
  {
    title: "Multi-Zone Underfloor Heating",
    text: "Invisible thermal comfort distributed per zone. No radiators. No visual noise. Pure architectural clarity.",
    image: "/pardoseala.png",
  },
  {
    title: "Architectural Stair & Balustrade Detailing",
    text: "Linear LED stair illumination, full-length floor-fixed balustrades and concealed LED glass integration. Structure and light working together.",
    image: "/xirgu69-3.jpg", // <-- image added here
  },
  {
    title: "Technical Exterior Precision",
    text: "45-degree tubular aluminum fencing, reflective smoked glass garage doors, pivoting metal entrance doors with 8-code access, heated pools and engineered rainwater drainage systems.",
    video: "https://www.youtube.com/embed/z8BPOBTYw1c",
  },
];

// Optional: Click-to-play Video component (lazy load)
function VideoEmbed({ video }: { video: string }) {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden bg-black cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.split("/embed/")[1]}/hqdefault.jpg`}
            alt="Video preview"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-black text-xl">
              ▶
            </div>
          </div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`${video}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function InteriorDesignServicePage() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="bg-white text-black"
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#428BC7]/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <p className="text-[#428BC7] tracking-[0.3em] text-xs mb-6">
            SITGES CAPITAL · INTERIOR DESIGN
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8">
            We design interiors
            <span className="block text-[#428BC7]">
              with architectural precision
            </span>
          </h1>
          <p className="text-lg text-black/70 max-w-2xl mb-10">
            The same engineering, detailing and technical superiority that
            differentiate our real estate projects now define our interior
            design service. We do not decorate. We execute architectural
            interiors.
          </p>
          <button
            className="bg-[#428BC7] text-white px-8 py-4 text-sm tracking-wide hover:opacity-90 transition"
            onClick={() => (window.location.href = "/contact")}
          >
            REQUEST CONSULTATION
          </button>
        </div>
      </section>

      {/* MAIN VISUAL */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="h-[420px] sm:h-[560px] bg-[#F1F3F4] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/canapea-profil.jpg"
              alt="Contemporary sofa profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F1F3F4] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-light mb-8">
            What makes our interiors different from the market
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Our developments are known for technical differentiation: glass
            elevators, invisible lighting systems, motorized carpentry,
            architectural climate distribution and material standards rarely
            seen in residential projects. Our interior design service extends
            exactly this philosophy into any home.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Media Column */}
              <div
                className={index % 2 === 0 ? "order-1" : "order-2 lg:order-1"}
              >
                {feature.video ? (
                  <VideoEmbed video={feature.video} />
                ) : feature.image ? (
                  <div className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-[320px] sm:h-[420px] bg-[#F1F3F4] rounded-xl" />
                )}
              </div>

              {/* Text Column */}
              <div
                className={index % 2 === 0 ? "order-2" : "order-1 lg:order-2"}
              >
                <h3 className="text-2xl sm:text-3xl font-light mb-6 text-[#428BC7]">
                  {feature.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-lg">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXECUTION */}
      <section className="bg-[#428BC7] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-8">
            From Concept to Execution
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            We design. We coordinate suppliers. We integrate technical systems.
            We deliver furniture exactly as rendered. Audio integration every 5
            meters. Multi-zone heating. Architectural glazing systems.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            Where property value meets life value
          </h2>
          <p className="text-black/70 mb-10">
            Whether you purchase one of our Xirgu developments or already own a
            property, our interior design service elevates your space to the
            same architectural standard that defines our projects.
          </p>
          <button className="bg-[#428BC7] text-white px-10 py-4 text-sm tracking-wide hover:opacity-90 transition">
            START YOUR INTERIOR PROJECT
          </button>
        </div>
      </section>
    </div>
  );
}

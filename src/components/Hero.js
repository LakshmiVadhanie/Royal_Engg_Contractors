"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const industries = ["Oil & Gas", "Petrochemical", "Power", "Marine", "Infrastructure"];

  const services = [
    {
      title: "CORROSION PROTECTION",
      description: "Extending asset life in harsh environments",
      icon: (
        <svg className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "SURFACE PREPARATION EXCELLENCE",
      description: "Sa 2.5 / SSPC-SP10 standards",
      icon: (
        <svg className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      title: "HIGH PERFORMANCE COATINGS",
      description: "Epoxy, Polyurethane, Zinc & Specialized Systems",
      icon: (
        <svg className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Paint spray gun vector */}
          <path d="M10 11H5c-.6 0-1-.4-1-1s.4-1 1-1h5" />
          <path d="M11 9V4c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5" />
          <path d="M12 11l2 8c.2.6-.2 1-.8 1h-1.5c-.5 0-.9-.3-1-.8l-1.7-6.2" />
          <path d="M9 11v3c0 .6.4 1 1 1h1" />
          <path d="M2 8l-1-1" />
          <path d="M1.5 10H0" />
          <path d="M2 12l-1 1" />
          <circle cx="3" cy="7" r="0.5" fill="#D4A853" />
          <circle cx="3" cy="13" r="0.5" fill="#D4A853" />
        </svg>
      ),
    },
    {
      title: "SAFETY. QUALITY. COMMITMENT",
      description: "Zero compromise on safety and quality",
      icon: (
        <svg className="w-10 h-10 md:w-11 md:h-11 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 15c0-5.5 4.5-10 10-10s10 4.5 10 10" />
          <path d="M12 5v4" />
          <path d="M1 15h22c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        background: "#0a0a0a",
      }}
    >
      {/* Background Image with Multi-layer Premium Overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-85"
          style={{
            backgroundImage: "url('/Royal_Engg_Contractors/images/hero-split.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark gradient from left to ensure perfect readability of text while leaving middle and right visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 38%, rgba(10,10,10,0.2) 65%, transparent 100%)",
          }}
        />
        {/* Bottom vignette gradient to blend seamlessly into the bottom features bar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 60%, rgba(10,10,10,0.95) 100%)",
          }}
        />
      </div>

      {/* Main Content Area */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-10 max-w-[1440px] mx-auto w-full pt-36 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Company Branding Top Layer */}
        <motion.div className="mb-4" variants={slideInLeft}>
          <h2
            className="text-lg md:text-2xl font-extrabold tracking-[0.25em] uppercase"
            style={{ color: "#D4A853", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            ROYAL ENGINEERING CONTRACTORS
          </h2>
        </motion.div>

        {/* Main Headlines */}
        <motion.div className="mb-2" variants={slideInRight}>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
            style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
          >
            BUILT TO PROTECT.
          </h1>
        </motion.div>

        <motion.div className="mb-4" variants={slideInLeft}>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
            style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
          >
            ENGINEERED TO LAST.
          </h1>
        </motion.div>

        {/* Core Specialization Subheading */}
        <motion.div className="mb-6" variants={slideInUp}>
          <h3
            className="text-xs md:text-base font-bold tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.9)", borderLeft: "2px solid #D4A853", paddingLeft: "12px" }}
          >
            SURFACE PREPARATION <span style={{ color: "#D4A853", margin: "0 6px" }}>•</span> PRECISION COATING
          </h3>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-xl mb-10 max-w-2xl font-normal"
          style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
          variants={slideInUp}
        >
          Specialists in industrial pipe blasting and painting delivering enduring
          protection in the toughest environments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="mb-12 flex flex-wrap items-center gap-4" variants={slideInUp}>
          <a
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-md transition-all duration-300 hover:bg-[#D4A853] hover:text-black group backdrop-blur-sm"
            style={{
              border: "1.5px solid #D4A853",
              color: "#D4A853",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
            }}
          >
            <span>OUR SERVICES</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Industry Focus */}
        <motion.div variants={fadeIn} className="mt-2">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: "#D4A853" }}
            >
              - INDUSTRY FOCUS •
            </span>
          </div>
          <motion.div
            className="flex flex-wrap items-center gap-2 md:gap-3"
            variants={containerVariants}
          >
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                className="text-sm md:text-base font-medium tracking-wide"
                style={{ color: "#ffffff" }}
                variants={slideInUp}
              >
                {industry}
                {index < industries.length - 1 && (
                  <span style={{ color: "#D4A853", margin: "0 10px", opacity: 0.8 }}>•</span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Features Horizontal Bar */}
      <motion.div
        className="relative z-20 w-full border-t border-b border-[rgba(212,168,83,0.25)] bg-[rgba(10,10,10,0.85)] backdrop-blur-md py-8 px-6 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex items-start gap-4 lg:px-6 py-1 ${index !== 3 ? "lg:border-r lg:border-[rgba(212,168,83,0.2)]" : ""
                  } ${index === 0 || index === 2 ? "md:border-r md:border-[rgba(212,168,83,0.2)]" : ""}`}
                variants={slideInUp}
                custom={index}
              >
                {service.icon}
                <div>
                  <h3
                    className="text-sm md:text-base font-bold tracking-wider mb-1.5 leading-snug"
                    style={{ color: "#ffffff" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs md:text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// --- Data for client logos ---
// Replace placeholder paths with your actual logo image files.
const clientLogos = [
  { name: "Delta", path: "/logos/delta-logo.png" },
  { name: "Shuwaiger", path: "/logos/shuwaiger-logo.png" },
  { name: "Shiro", path: "/logos/shiro-logo.png" },
  { name: "Diesel", path: "/logos/diesel-logo.png" },
  { name: "Innovators", path: "/logos/innovators-logo.png" },
  { name: "Altu", path: "/logos/altu-logo.png" },
  { name: "Aspen Medical", path: "/logos/aspen-medical-logo.png" },
  { name: "Expert Partners", path: "/logos/expert-partners-logo.png" },
  { name: "Al Dammami Hospital", path: "/logos/al-dammami-hospital-logo.png" },
  { name: "T-Force", path: "/logos/tforce-logo.png" },
  { name: "Gasco", path: "/logos/gasco-logo.png" },
  // { name: "Al-Othman", path: "/logos/al-othman-logo.png" },
  // Add more clients as needed
];

export default function OurClients() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
  });

  // Animation for the title
  const titleOpacity = useTransform(smoothScrollYProgress, [0, 0.3], [0, 1]);
  const titleY = useTransform(smoothScrollYProgress, [0, 0.3], ["30px", "0px"]);

  // Animation for the entire grid
  const gridOpacity = useTransform(smoothScrollYProgress, [0.2, 0.6], [0, 1]);
  const gridY = useTransform(
    smoothScrollYProgress,
    [0.2, 0.6],
    ["30px", "0px"]
  );

  return (
    <section
      ref={targetRef}
      className='py-24'
      style={{
        background: "linear-gradient(to bottom, #C5A56D, #EAE0C8)",
      }}
      id='who-we-serve'
    >
      <div className='container mx-auto px-6'>
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className='mb-16 text-center text-4xl font-bold tracking-tight text-[#004d55] md:text-5xl'
        >
          Our Clients
        </motion.h1>

        <motion.div
          style={{ opacity: gridOpacity, y: gridY }}
          className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
        >
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className='flex h-32 items-center justify-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105'
            >
              <img
                src={logo.path}
                alt={logo.name}
                className='max-h-20 w-auto object-contain'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x80/f0f0f0/ccc?text=Logo";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

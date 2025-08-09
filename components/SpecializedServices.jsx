"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function SpecializedServices() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
  });

  // --- Animation Hooks ---
  const useItemAnimation = (start, end) => {
    const opacity = useTransform(smoothScrollYProgress, [start, end], [0, 1]);
    const y = useTransform(
      smoothScrollYProgress,
      [start, end],
      ["30px", "0px"]
    );
    return { opacity, y };
  };

  const item1Animation = useItemAnimation(0, 0.25);
  const item2Animation = useItemAnimation(0.15, 0.4);
  const item3Animation = useItemAnimation(0.3, 0.55);
  const item4Animation = useItemAnimation(0.45, 0.7);

  const services = [
    {
      title: "Organizational Charts",
      description:
        "Designing and optimizing organizational structures, including creating charts.",
      style: item1Animation,
    },
    {
      title: "Enterprise Governance",
      description:
        "Creating comprehensive policies and procedures, authority matrices, and job descriptions across the organizations.",
      style: item2Animation,
    },
    {
      title: "Standard Operating Procedures (SOPs)",
      description:
        "Developing comprehensive SOPs that minimize errors and boost overall performance in the supply chain.",
      style: item3Animation,
    },
  ];

  return (
    <section
      ref={targetRef}
      className='py-24'
      style={{
        background: "linear-gradient(to top, #C5A56D, #EAE0C8)",
      }}
    >
      <div className='container mx-auto max-w-4xl px-6 text-[#004d55]'>
        <div className='space-y-10'>
          {/* The first three services */}
          {services.map((service) => (
            <motion.div
              key={service.title}
              style={{ opacity: service.style.opacity, y: service.style.y }}
            >
              <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                {service.title}
              </h3>
              <p className='text-lg text-[#004d55] md:text-xl'>
                {service.description}
              </p>
            </motion.div>
          ))}

          {/* The final service with an image */}
          <motion.div
            style={{
              opacity: item4Animation.opacity,
              y: item4Animation.y,
            }}
            className='grid grid-cols-1 items-center gap-8 pt-6 md:grid-cols-2'
          >
            <div>
              <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                Preparation Healthcare Facilities
              </h3>
              <p className='text-lg text-[#004d55] md:text-xl'>
                Equipping health facilities of all types and operational
                capacity with the highest modern and advanced medical equipment.
              </p>
            </div>
            <div>
              <img
                src='/healthcare-facilities-prep.png' // Replace with your image path
                alt='Healthcare facilities preparation'
                className='w-full rounded-lg object-cover shadow-lg'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/004d55/FFFFFF?text=Image+Not+Found";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

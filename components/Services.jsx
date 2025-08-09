"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function OurServices() {
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

  const titleAnimation = useItemAnimation(0, 0.2);
  const pair1Animation = useItemAnimation(0.15, 0.35);
  const pair2Animation = useItemAnimation(0.3, 0.5);
  const pair3Animation = useItemAnimation(0.45, 0.65);
  const pair4Animation = useItemAnimation(0.6, 0.8);

  const services = [
    {
      title: "Strategy and Design",
      description:
        "Develop comprehensive strategies aligning with your business objectives, identify and assess risks, and design new models.",
      style: pair1Animation,
    },
    {
      title: "Procurement and Sourcing",
      description:
        "Optimize processes to reduce costs and improve efficiency, negotiate contracts and assist with tenders to find other sources.",
      style: pair1Animation,
    },
    {
      title: "Logistics and Transportation",
      description:
        "Design efficient networks, optimize warehouse operations, and manage risks.",
      style: pair2Animation,
    },
    {
      title: "Inventory Management",
      description:
        "Optimize levels to reduce costs and improve the services, implement forecasting and planning systems, and manage turnover and stockouts.",
      style: pair2Animation,
    },
    {
      title: "Technology and Analytics",
      description:
        "Select and implement software solutions, use data analytics for insights, and develop digital transformation initiatives.",
      style: pair3Animation,
    },
    {
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate supply chain risks like disruptions, contingency plans, and compliance issues.",
      style: pair3Animation,
    },
    {
      title: "Warehouse Preparation",
      description:
        "Standard warehouse rehabilitation compatible with the requirements of official and relevant authorities.",
      style: pair4Animation,
    },
  ];

  return (
    <section
      ref={targetRef}
      className='min-h-screen flex flex-col justify-center'
      style={{
        background: "linear-gradient(to bottom, #C5A56D, #EAE0C8)",
      }}
      id='services'
    >
      <div className='container mx-auto max-w-6xl px-6 py-12 text-[#004d55]'>
        <motion.h1
          style={{ opacity: titleAnimation.opacity, y: titleAnimation.y }}
          className='mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl'
        >
          Our Services
        </motion.h1>

        {/* List of Services in a 2-column grid */}
        <div className='grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2'>
          {services.map((service) => (
            <motion.div
              key={service.title}
              // The special className for the last item has been removed
              style={{
                opacity: service.style.opacity,
                y: service.style.y,
              }}
            >
              <h3 className='mb-2 text-xl font-semibold md:text-2xl'>
                {service.title}
              </h3>
              <p className='text-base text-[#004d55] md:text-lg'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function OurValues() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  // --- Animation Hooks ---

  // Main Title Animation
  const titleOpacity = useTransform(smoothScrollYProgress, [0, 0.25], [0, 1]);
  const titleY = useTransform(
    smoothScrollYProgress,
    [0, 0.25],
    ["30px", "0px"]
  );

  // First Pair of Values Animation
  const pair1Opacity = useTransform(smoothScrollYProgress, [0.2, 0.5], [0, 1]);
  const pair1Y = useTransform(
    smoothScrollYProgress,
    [0.2, 0.5],
    ["30px", "0px"]
  );

  // Second Pair of Values Animation
  const pair2Opacity = useTransform(smoothScrollYProgress, [0.4, 0.7], [0, 1]);
  const pair2Y = useTransform(
    smoothScrollYProgress,
    [0.4, 0.7],
    ["30px", "0px"]
  );

  return (
    <section
      ref={targetRef}
      className='relative z-10 py-24'
      style={{
        background: "linear-gradient(to bottom, #C5A56D, #EAE0C8)",
      }}
    >
      <div className='container mx-auto px-6 text-[#004d55]'>
        {/* Main Title */}
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className='mb-16 text-center text-4xl font-bold tracking-tight md:text-5xl'
        >
          Our Values
        </motion.h1>

        {/* Grid for the four values */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          {/* Value 1: Excellence and Quality */}
          <motion.div style={{ opacity: pair1Opacity, y: pair1Y }}>
            <h3 className='mb-3 text-2xl font-semibold'>
              Excellence and Quality
            </h3>
            <p className='text-lg text-[#004d55]'>
              We are committed to delivering outstanding results in every
              project. We set high standards for ourselves to ensure we provide
              the best possible service.
            </p>
          </motion.div>

          {/* Value 2: Integrity and Transparency */}
          <motion.div style={{ opacity: pair1Opacity, y: pair1Y }}>
            <h3 className='mb-3 text-2xl font-semibold'>
              Integrity and Transparency
            </h3>
            <p className='text-lg text-[#004d55]'>
              We build trust-based relationships with our clients and partners.
              We believe in open and honest communication at all times.
            </p>
          </motion.div>

          {/* Value 3: Customer Focus */}
          <motion.div style={{ opacity: pair2Opacity, y: pair2Y }}>
            <h3 className='mb-3 text-2xl font-semibold'>Customer Focus</h3>
            <p className='text-lg text-[#004d55]'>
              We put our customers at the heart of everything we do. We listen
              carefully to their needs to provide them with the best solutions.
            </p>
          </motion.div>

          {/* Value 4: Innovation and Development */}
          <motion.div style={{ opacity: pair2Opacity, y: pair2Y }}>
            <h3 className='mb-3 text-2xl font-semibold'>
              Innovation and Development
            </h3>
            <p className='text-lg text-[#004d55]'>
              We continuously seek to improve and innovate. We embrace new
              technologies and ideas to help our clients stay ahead in a
              changing world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

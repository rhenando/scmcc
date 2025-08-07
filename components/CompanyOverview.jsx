"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import DetailedContent from "./DetailedContent";

export default function CompanyOverview() {
  const imageUrl =
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3132&auto=format&fit=crop";

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Use a spring for a smoother animation feel
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animation logic for the curtain and content reveal
  const curtainY = useTransform(smoothScrollYProgress, [0, 1], ["0%", "-100%"]);
  const contentY = useTransform(smoothScrollYProgress, [0, 1], ["0%", "-150%"]);
  const contentOpacity = useTransform(
    smoothScrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0]
  );

  // The SVG path remains static
  const staticPath = "M 0,1 L 0,0.2 L 1,0 L 1,1 Z";

  // Variants for the initial appearance of content
  const containerVariants = { hidden: {}, visible: {} };
  const shapeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const leftTextVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };
  const rightTextVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <section
      ref={targetRef}
      id='overview'
      className='relative h-[200vh]'
      // CORRECTED: The section's base background is now dark green
      style={{ backgroundColor: "#2a4b41" }}
    >
      {/* This is the "curtain" layer that is sticky and slides up */}
      <motion.div style={{ y: curtainY }} className='sticky top-0 h-screen'>
        <div className='relative w-full h-full overflow-hidden'>
          {/* Background Image Layer */}
          <Image
            src={imageUrl}
            alt='Professional team'
            layout='fill'
            objectFit='cover'
            className='z-0' // Stays at the bottom of the stack
          />

          {/* CORRECTED: Overlay is now a separate div on top of the image only */}
          <div
            className='absolute inset-0 z-10' // Sits above the image
            style={{ backgroundColor: "rgba(42, 75, 65, 0.6)" }}
          ></div>

          {/* This container for the shaped content is now on top of the image and overlay */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className='absolute bottom-0 left-0 w-full z-20' // Sits on top of the overlay
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            {/* THIS SHAPED ELEMENT IS UNCHANGED, AS REQUESTED */}
            <motion.div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, white, hsl(var(--accent)))",
                clipPath: "url(#custom-shape)",
              }}
              variants={shapeVariants}
            >
              <svg width='0' height='0' className='absolute'>
                <defs>
                  <clipPath id='custom-shape' clipPathUnits='objectBoundingBox'>
                    <path d={staticPath} />
                  </clipPath>
                </defs>
              </svg>
              <div className='container mx-auto grid md:grid-cols-2 gap-16 items-center pt-24 pb-16 md:pt-32 md:pb-24 px-6'>
                <motion.div variants={leftTextVariants}>
                  <p className='text-3xl md:text-4xl font-bold text-white leading-snug'>
                    We deliver practical, tailor-made solutions that combine
                    deep local market knowledge with global best practices.
                  </p>
                </motion.div>
                <motion.div
                  variants={rightTextVariants}
                  className='text-left md:text-center'
                >
                  <p className='text-7xl md:text-8xl font-bold text-white'>
                    25%
                  </p>
                  <p className='text-lg text-gray-200 mt-2'>
                    Cost reduction achieved for a leading consumer goods
                    company.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* The revealed content remains below */}
      <DetailedContent />
    </section>
  );
}

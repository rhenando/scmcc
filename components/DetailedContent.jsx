"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function DetailedContent() {
  const imageUrl = "/company-overview-bg.png";

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- SMOOTHING ---
  // Add a spring effect to the scroll progress for a smoother animation.
  // You can tweak the stiffness and damping to change the "feel" of the spring.
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  // --- TEXT ANIMATIONS (Updated Ranges) ---
  // The animation ranges are adjusted to create a smoother, overlapping cascade effect.

  // Heading appears first
  const headingOpacity = useTransform(
    smoothScrollYProgress,
    [0.05, 0.2],
    [0, 1]
  );
  const headingY = useTransform(
    smoothScrollYProgress,
    [0.05, 0.2],
    ["20px", "0px"]
  );

  // Subheading follows, slightly overlapping with the heading's animation
  const subheadingOpacity = useTransform(
    smoothScrollYProgress,
    [0.18, 0.35],
    [0, 1]
  );
  const subheadingY = useTransform(
    smoothScrollYProgress,
    [0.18, 0.35],
    ["20px", "0px"]
  );

  // First paragraph overlaps with the subheading
  const p1Opacity = useTransform(smoothScrollYProgress, [0.33, 0.5], [0, 1]);
  const p1Y = useTransform(smoothScrollYProgress, [0.33, 0.5], ["20px", "0px"]);

  // Second paragraph overlaps with the first
  const p2Opacity = useTransform(smoothScrollYProgress, [0.48, 0.65], [0, 1]);
  const p2Y = useTransform(
    smoothScrollYProgress,
    [0.48, 0.65],
    ["20px", "0px"]
  );

  // --- IMAGE ANIMATION ---
  // The image animation starts early and completes as the text begins to appear.
  const imageScale = useTransform(smoothScrollYProgress, [0, 0.3], [0.9, 1]);
  const imageOpacity = useTransform(smoothScrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section ref={targetRef} className='relative z-10 h-[250vh]'>
      <div className='sticky top-0 h-screen'>
        <div
          className='relative flex h-full w-full items-center overflow-hidden'
          style={{ background: "#F9F6F2" }}
        >
          <div className='container relative z-10 mx-auto grid grid-cols-1 items-center px-6 lg:grid-cols-5 lg:gap-16'>
            {/* Left Column with updated text content */}
            <div className='lg:col-span-3'>
              <div className='space-y-6' style={{ color: "#4A4A4A" }}>
                <motion.h2
                  style={{ opacity: headingOpacity, y: headingY }}
                  className='text-4xl font-bold tracking-tight md:text-5xl'
                >
                  Company Overview
                </motion.h2>
                <motion.h3
                  style={{
                    opacity: subheadingOpacity,
                    y: subheadingY,
                    color: "#A98C6A",
                  }}
                  className='text-2xl font-semibold md:text-3xl'
                >
                  Supply Chain Management Consulting Company (SCMCC)
                </motion.h3>
                <div
                  className='space-y-4 text-lg md:text-xl'
                  style={{ color: "#5A5A5A" }}
                >
                  <motion.p style={{ opacity: p1Opacity, y: p1Y }}>
                    is a Saudi consulting firm specialized in the development of
                    supply chains. We work with companies across various
                    industries to deliver practical, tailor-made solutions that
                    combine deep local market knowledge with global best
                    practices.
                  </motion.p>
                  <motion.p style={{ opacity: p2Opacity, y: p2Y }}>
                    Founded by seasoned experts in the field, our approach is
                    flexible, pragmatic, and results-oriented. In every project,
                    we are committed to working closely with our clients to
                    ensure tangible and sustainable improvements in supply chain
                    efficiency, reliability, and future readiness.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* SVG arrow is rendered second to appear on top */}
            <svg
              className='absolute top-30 left-0 h-full w-full text-[#A98C6A] opacity-50'
              viewBox='0 0 400 400'
              fill='currentColor'
              preserveAspectRatio='xMidYMid meet'
            >
              <path d='M50 180 H300 L300 150 L400 200 L300 250 L300 220 H50 Z' />
            </svg>

            {/* Right Column (Image and shapes) */}
            <div className='relative hidden h-full items-center lg:col-span-2 lg:flex'>
              <motion.div
                style={{ scale: imageScale, opacity: imageOpacity }}
                className='relative w-full max-w-md mx-auto' // Constrain size
              >
                <img
                  className='w-full'
                  src={imageUrl}
                  alt='Professionals collaborating over a project'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/f9f6f2/5a5a5a?text=Image+Not+Found";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Helper component for the icons
const Icon = ({ children }) => (
  <svg
    className='mr-4 h-8 w-8 flex-shrink-0'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    {children}
  </svg>
);

export default function VisionMission() {
  const imageUrl = "/vision-mission-bg.png";

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  // --- TEXT ANIMATIONS (Much more delayed to ensure DetailedContent fully shows) ---
  const visionTitleOpacity = useTransform(
    smoothScrollYProgress,
    [0.6, 0.7],
    [0, 1]
  );
  const visionTitleY = useTransform(
    smoothScrollYProgress,
    [0.6, 0.7],
    ["20px", "0px"]
  );
  const visionTextOpacity = useTransform(
    smoothScrollYProgress,
    [0.68, 0.78],
    [0, 1]
  );
  const visionTextY = useTransform(
    smoothScrollYProgress,
    [0.68, 0.78],
    ["20px", "0px"]
  );
  const missionTitleOpacity = useTransform(
    smoothScrollYProgress,
    [0.76, 0.86],
    [0, 1]
  );
  const missionTitleY = useTransform(
    smoothScrollYProgress,
    [0.76, 0.86],
    ["20px", "0px"]
  );
  const missionTextOpacity = useTransform(
    smoothScrollYProgress,
    [0.84, 0.94],
    [0, 1]
  );
  const missionTextY = useTransform(
    smoothScrollYProgress,
    [0.84, 0.94],
    ["20px", "0px"]
  );

  // --- IMAGE ANIMATION (Also much more delayed) ---
  const imageScale = useTransform(smoothScrollYProgress, [0.6, 0.8], [0.9, 1]);
  const imageOpacity = useTransform(
    smoothScrollYProgress,
    [0.6, 0.8],
    [0.5, 1]
  );

  return (
    <section ref={targetRef} className='relative z-20 h-[250vh]'>
      <div className='sticky top-0 h-screen'>
        {/* Dark background */}
        <div
          className='relative flex h-full w-full items-center overflow-hidden'
          style={{
            background: "linear-gradient(to top, #C5A56D, #EAE0C8)",
          }}
        >
          <div className='container relative z-10 mx-auto grid grid-cols-1 items-center px-6 lg:grid-cols-5 lg:gap-16'>
            {/* Image is now first (on the left) */}
            <div className='relative hidden h-full items-center lg:col-span-2 lg:flex'>
              <motion.div
                style={{ scale: imageScale, opacity: imageOpacity }}
                className='relative mx-auto w-full max-w-md'
              >
                <img
                  className='w-full'
                  src={imageUrl}
                  alt='Business professional pointing at a city scape'
                  onError={(e) => {
                    e.target.onerror = null;
                    // Updated placeholder for dark theme
                    e.target.src =
                      "https://placehold.co/600x400/004d55/FFFFFF?text=Image+Not+Found";
                  }}
                />
              </motion.div>
            </div>

            {/* Text is now second (on the right) */}
            <div className='lg:col-span-3'>
              {/* White text color */}
              <div className='space-y-6 text-[#004d55]'>
                {/* --- VISION SECTION --- */}
                <motion.h2
                  style={{ opacity: visionTitleOpacity, y: visionTitleY }}
                  className='flex items-center text-4xl font-bold tracking-tight md:text-5xl'
                >
                  <Icon>
                    {/* Eye Icon for Vision */}
                    <path d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' />
                    <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </Icon>
                  Our Vision
                </motion.h2>
                <div className='text-lg text-[#004d55] md:text-xl'>
                  <motion.p
                    style={{ opacity: visionTextOpacity, y: visionTextY }}
                  >
                    To be the first option for local and regional clients in
                    search of reliable consulting services, and to establish
                    their confidence by consistently delivering outcomes that
                    support them in achieving their goals.
                  </motion.p>
                </div>

                {/* --- MISSION SECTION --- */}
                <motion.h2
                  style={{ opacity: missionTitleOpacity, y: missionTitleY }}
                  className='mt-12 flex items-center text-4xl font-bold tracking-tight md:text-5xl'
                >
                  <Icon>
                    {/* Target Icon for Mission */}
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 21a9 9 0 01-9-9 9 9 0 019-9m9 9a9 9 0 01-9 9v-9m-9 0h9m9 0a9 9 0 01-9 9m-9-9h9m9 0h-9m9 0a9 9 0 01-9 9'
                    />
                  </Icon>
                  Our Mission
                </motion.h2>
                <div className='text-lg text-[#004d55] md:text-xl'>
                  <motion.p
                    style={{ opacity: missionTextOpacity, y: missionTextY }}
                  >
                    Empower our customers to make significant change, innovative
                    supply chain solutions and achieve sustainable positive
                    transformations that create lasting value.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

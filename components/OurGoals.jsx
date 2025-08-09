"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Helper Icon for list items
const BulletIcon = () => (
  <svg
    className='mr-4 h-6 w-6 flex-shrink-0 text-white/80'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

export default function OurGoals() {
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
  const useGoalAnimation = (start, end) => {
    const opacity = useTransform(smoothScrollYProgress, [start, end], [0, 1]);
    const y = useTransform(
      smoothScrollYProgress,
      [start, end],
      ["20px", "0px"]
    );
    return { opacity, y };
  };

  const titleAnimation = useGoalAnimation(0, 0.2);
  const goal1Animation = useGoalAnimation(0.1, 0.3);
  const goal2Animation = useGoalAnimation(0.2, 0.4);
  const goal3Animation = useGoalAnimation(0.3, 0.5);
  const goal4Animation = useGoalAnimation(0.4, 0.6);
  const goal5Animation = useGoalAnimation(0.5, 0.7);

  const goals = [
    {
      text: "Achieving excellence in consulting services",
      style: goal1Animation,
    },
    {
      text: "Building sustainable relationships with our clients",
      style: goal2Animation,
    },
    {
      text: "Enhancing innovation and continuous development",
      style: goal3Animation,
    },
    {
      text: "Promoting a positive and stimulating work environment",
      style: goal4Animation,
    },
    {
      text: "Expanding our services to cover new markets",
      style: goal5Animation,
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
        {/* Main Title */}
        <motion.h1
          style={{ opacity: titleAnimation.opacity, y: titleAnimation.y }}
          className='mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl'
        >
          Our Goals
        </motion.h1>

        {/* List of Goals */}
        <div className='space-y-6'>
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              style={{ opacity: goal.style.opacity, y: goal.style.y }}
              className='flex items-start'
            >
              <BulletIcon />
              <p className='text-xl text-[#004d55] md:text-2xl'>{goal.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

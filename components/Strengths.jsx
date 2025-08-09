"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const BulletIcon = () => (
  <svg
    className='mr-3 mt-1 h-5 w-5 flex-shrink-0 text-white/60'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.92.05l4.25 4.5a.75.75 0 01-1.01 1.1l-3.7-3.91-1.7 1.8a.75.75 0 01-1.06-1.06l2.25-2.25z'
      clipRule='evenodd'
    />
  </svg>
);

export default function OurStrengths() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
  });

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
  const pair1Animation = useItemAnimation(0.15, 0.4);
  const pair2Animation = useItemAnimation(0.35, 0.6);

  const strengths = [
    {
      category: "Expertise and Experience",
      points: [
        "Deep knowledge and understanding of supply chain management principles and practices.",
        "Proven track record of success in helping clients achieve their supply chain goals.",
        "Experience working with diverse industries and business models.",
      ],
      style: pair1Animation,
    },
    {
      category: "Methodology and Tools",
      points: [
        "Established methodologies for analyzing supply chain challenges and developing solutions.",
        "Access to and expertise in utilizing cutting-edge technology and tools for supply chain management.",
        "Ability to tailor their approach to each client's unique needs and challenges.",
      ],
      style: pair1Animation,
    },
    {
      category: "Collaboration and Communication",
      points: [
        "Strong communication and collaboration skills to build trust and rapport with clients.",
        "Ability to effectively communicate complex information in a clear and concise manner.",
        "Collaborative approach that involves the client in the decision-making process.",
      ],
      style: pair2Animation,
    },
    {
      category: "Flexibility and Adaptability",
      points: [
        "Ability to adapt their services to meet the evolving needs of the supply chain industry.",
        "Openness to new technologies and innovative solutions.",
        "Willingness to work with clients of all sizes and across different industries.",
      ],
      style: pair2Animation,
    },
  ];

  return (
    <section
      ref={targetRef}
      className='py-24'
      style={{
        background: "linear-gradient(to bottom, #C5A56D, #EAE0C8)",
      }}
      id='strengths'
    >
      <div className='container mx-auto max-w-6xl px-6 text-[#004d55]'>
        <motion.h1
          style={{ opacity: titleAnimation.opacity, y: titleAnimation.y }}
          className='mb-16 text-center text-4xl font-bold tracking-tight md:text-5xl'
        >
          Our Strengths
        </motion.h1>

        <div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2'>
          {strengths.map((strength) => (
            <motion.div
              key={strength.category}
              style={{ opacity: strength.style.opacity, y: strength.style.y }}
            >
              <h3 className='mb-4 text-2xl font-semibold md:text-3xl'>
                {strength.category}
              </h3>
              <ul className='space-y-3'>
                {strength.points.map((point, index) => (
                  <li key={index} className='flex'>
                    <BulletIcon />
                    <span className='text-lg text-[#004d55]'>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

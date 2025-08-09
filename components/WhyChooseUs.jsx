"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Helper Icon for list items
const BulletIcon = () => (
  <svg
    className='mr-4 mt-1.5 h-6 w-6 flex-shrink-0 text-white/80'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
      clipRule='evenodd'
    />
  </svg>
);

export default function WhyChooseUs() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
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
      ["20px", "0px"]
    );
    return { opacity, y };
  };

  const titleAnimation = useItemAnimation(0.05, 0.15);
  const reason1Animation = useItemAnimation(0.15, 0.25);
  const reason2Animation = useItemAnimation(0.25, 0.35);
  const reason3Animation = useItemAnimation(0.35, 0.45);
  const reason4Animation = useItemAnimation(0.45, 0.55);
  const reason5Animation = useItemAnimation(0.55, 0.65);
  const reason6Animation = useItemAnimation(0.65, 0.75);
  const reason7Animation = useItemAnimation(0.75, 0.85);
  const reason8Animation = useItemAnimation(0.85, 0.95);
  const reason9Animation = useItemAnimation(0.9, 1.0);

  const imageScale = useTransform(smoothScrollYProgress, [0.05, 0.4], [0.9, 1]);
  const imageOpacity = useTransform(
    smoothScrollYProgress,
    [0.05, 0.4],
    [0.5, 1]
  );

  const reasons = [
    {
      text: "We help you improve the performance of your supply chain.",
      style: reason1Animation,
    },
    {
      text: "We provide you innovative solutions that meet your needs.",
      style: reason2Animation,
    },
    {
      text: "We help you achieve your strategic goals.",
      style: reason3Animation,
    },
    {
      text: "We provide you with a team of qualified experts.",
      style: reason4Animation,
    },
    {
      text: "We provide you with high quality services at competitive prices.",
      style: reason5Animation,
    },
    {
      text: "We tailor the plans specially for your business.",
      style: reason6Animation,
    },
    {
      text: "We have a successful track record and long term relationships with our clients.",
      style: reason7Animation,
    },
    {
      text: "Participated in obtaining accreditation from the Joint Commission International (JCI) and the Saudi Center for Accreditation of Health Institutions (CBAHI) several times.",
      style: reason8Animation,
    },
    {
      text: "We help in detecting and exploring resource gaps to fulfil the goals.",
      style: reason9Animation,
    },
  ];

  return (
    <section
      ref={targetRef}
      className='relative z-10 h-[350vh]'
      id='why-choose-us'
    >
      <div
        className='sticky top-0 h-screen'
        style={{
          background: "linear-gradient(to top, #C5A56D, #EAE0C8)",
        }}
      >
        <div className='container mx-auto grid h-full grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2'>
          {/* Left Column: Text Content */}
          <div className='text-[#004d55]'>
            <motion.h1
              style={{
                opacity: titleAnimation.opacity,
                y: titleAnimation.y,
              }}
              className='mb-10 text-4xl font-bold tracking-tight md:text-5xl '
            >
              Why choose us?
            </motion.h1>
            <ul className='space-y-4'>
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  style={{
                    opacity: reason.style.opacity,
                    y: reason.style.y,
                  }}
                  className='flex'
                >
                  <BulletIcon />
                  <span className='text-lg text-[#004d55] md:text-xl'>
                    {reason.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className='relative hidden h-full items-center lg:flex'>
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className='relative mx-auto w-full max-w-md'
            >
              <img
                src='/why-choose-us.png' // Replace with your image path
                alt='Business growth chart'
                className='w-full rounded-lg object-cover shadow-lg'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/004d55/FFFFFF?text=Image";
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

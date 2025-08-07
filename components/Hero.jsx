"use client"; // Required for Framer Motion

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const videoUrl = "/hero-video.mp4"; // Make sure this filename matches your video

  // Animation variants for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Time delay between each child animation
      },
    },
  };

  // Animation variants for the child text elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className='relative w-full h-[90vh] text-white overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* UPDATED: Overlay color changed to the new requested dark green */}
      <div
        className='absolute inset-0 z-10'
        style={{ backgroundColor: "rgba(42, 75, 65, 0.7)" }}
      />

      {/* Decorative skewed shapes now use the consistent accent color */}
      {/* <div
        className='absolute w-[60%] h-32 z-20'
        style={{
          backgroundColor: "#A98C6A",
          opacity: 0.8,
          bottom: "25%",
          left: "-5%",
          transform: "skew(30deg)",
        }}
      />
      <div
        className='absolute w-[60%] h-32 z-20'
        style={{
          backgroundColor: "#A98C6A",
          opacity: 0.8,
          bottom: "22%",
          right: "-10%",
          transform: "skew(30deg)",
        }}
      /> */}

      {/* Animated Content Container */}
      <motion.div
        className='relative container mx-auto flex flex-col justify-start h-full z-30 px-6 pt-40'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='max-w-4xl text-left'>
          <motion.p
            variants={itemVariants}
            className='text-2xl md:text-3xl font-light'
          >
            Delivering world-class supply chain solutions
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className='text-6xl md:text-8xl font-bold my-2 leading-tight'
            style={{ color: "#A98C6A" }}
          >
            Your Partner in Excellence
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-2xl md:text-3xl font-light'
          >
            with a local vision in Saudi Arabia.
          </motion.p>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className='absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }} // Appears after the main text
      >
        <span className='text-sm'>Make it happen with SCMCC</span>
        <ArrowDown className='animate-bounce' />
      </motion.div>
    </section>
  );
}

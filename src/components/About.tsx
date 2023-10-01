"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideBottomVariants,
  slideTopVariants,
} from "@/lib/utils";


/**
 * Renders a section with images and text about furniture.
 * The heading and paragraph have animation effects applied to them.
 */
const About: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <Image
        className="w-full"
        src="/images/image-about-dark.jpg"
        alt="about-img"
        width={420}
        height={266}
      />
      <div className="container py-12">
        <motion.h3
          className="font-bold tracking-[0.25em] uppercase"
          variants={slideTopVariants}
          initial="hidden"
          animate="visible"
        >
          About our furniture
        </motion.h3>
        <motion.p
          className="pt-6 text-base text-dark-gray"
          variants={slideBottomVariants}
          initial="hidden"
          animate="visible"
        >
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space
        </motion.p>
      </div>
      <Image
        className="w-full"
        src="/images/image-about-light.jpg"
        alt="about-img"
        width={420}
        height={266}
      />
    </section>
  );
};

export default About;


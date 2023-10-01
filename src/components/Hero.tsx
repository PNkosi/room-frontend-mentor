"use client";

import RightArrow from "@/icons/RightArrow";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { slideLeftVariants, slideTopVariants } from "@/lib/utils";

type Slide = {
  image: string;
  desktopImage: string;
  title: string;
  description: string;
  link: string;
};


const slideData: Slide[] = [
  {
    image: "/images/mobile-image-hero-1.jpg",
    desktopImage: "/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    link: "/shop",
  },
  {
    image: "/images/mobile-image-hero-2.jpg",
    desktopImage: "/images/desktop-image-hero-2.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    link: "/shop",
  },
  {
    image: "/images/mobile-image-hero-3.jpg",
    desktopImage: "/images/desktop-image-hero-3.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we are in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Do not hestitate to contact us today.",
    link: "/shop",
  },
];

const Hero = () => {
  const slideRef = useRef(0)
  const [currentSlide, setCurrentSlide] = useState<Slide>(slideData[slideRef.current]);


  const nextSlide = () => {
    slideRef.current += 1
    if (slideRef.current >= slideData.length) {
      slideRef.current = 0
      setCurrentSlide(slideData[0])
    }

    setCurrentSlide(slideData[slideRef.current])
  }

  const prevSlide = () => {
    slideRef.current -= 1
    if (slideRef.current < 0) {
      slideRef.current = slideData.length - 1
      setCurrentSlide(slideData[slideRef.current])
    }

    setCurrentSlide(slideData[slideRef.current])
  }

  return (
    <header className="w-full lg:flex lg:h-[80vh]">
      <section className="relative lg:flex-grow">
        <Image
          className="w-full lg:hidden"
          src={currentSlide.image}
          alt="img"
          width={375}
          height={360}
        />

        <Image
          className="w-full h-full hidden lg:inline-block"
          src={currentSlide.desktopImage}
          alt="img"
          width={840}
          height={534}
        />


        <div className="absolute lg:hidden bottom-0 right-0 flex">
          <Controls prevSlide={prevSlide} nextSlide={nextSlide}/>
        </div>
      </section>
      <section className="relative container py-16 lg:px-12 lg:py-12 lg:w-[45%]">
        <motion.h1 
        variants={slideTopVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold">{currentSlide.title}</motion.h1>
        <motion.p 
        variants={slideTopVariants}
        initial="hidden"
        animate="visible"
        className="text-base mt-6">{currentSlide.description}</motion.p>
        
        <motion.div
          variants={slideLeftVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: 'spring', stiffness: 50 }}
        >
        <Link className="flex items-center gap-8 w-fit mt-12 font-medium tracking-[0.5em]" href={currentSlide.link}>
          SHOP NOW
          <RightArrow />
        </Link>
        </motion.div>

        <div className="absolute hidden bottom-0 left-0 lg:flex">
          <Controls prevSlide={prevSlide} nextSlide={nextSlide}/>
        </div>
      </section>
    </header>
  );
};

type ControlsProps = {
  prevSlide: () => void;
  nextSlide: () => void;
}

const Controls = (props: ControlsProps) => {
  return (
    <>
      <button
            className="p-8 bg-black text-dark-gray hover:bg-dark-gray hover:text-very-dark-gray"
            onClick={props.prevSlide}
          >
            <LiaAngleLeftSolid size={30} />
          </button>
          <button
            className="p-8 bg-black text-dark-gray hover:bg-dark-gray hover:text-very-dark-gray"
            onClick={props.nextSlide}
          >
            <LiaAngleRightSolid size={30} />
          </button>
    </>
  )
}

export default Hero;

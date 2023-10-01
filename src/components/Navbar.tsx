"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { slideLeftVariants } from "@/lib/utils";

type MenuLink = {
  text: string;
  href: string;
};

const menuLinks: MenuLink[] = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "shop",
    href: "/shop",
  },
  {
    text: "about",
    href: "/about",
  },
  {
    text: "contact",
    href: "/contact",
  },
];


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  return (
    <nav className="relative container py-6 flex items-center gap-12 z-50">
      {showMobileMenu && (
        <div
          onClick={handleClick}
          className="fixed top-0 left-0 h-screen w-screen bg-black/50"
        />
      )}

      <AiOutlineMenu
        size={30}
        className="lg:hidden cursor-pointer text-white"
        onClick={handleClick}
      />
      <Link className="mx-auto lg:mx-0" href="/">
        <h3 className="text-3xl font-bold text-white">room</h3>
      </Link>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate="visible"
            exit={{ x: -100, opacity: 0 }}
            className="lg:hidden container absolute left-0 top-0 bg-white w-full h-20 flex items-center justify-between"
          >
            <AiOutlineClose
              clasName="text-dark-gray cursor-pointer"
              size={30}
              onClick={handleClick}
            />
            <ul className="flex items-center gap-8 text-very-dark-gray">
              {menuLinks.map(({ text, href }, index) => (
                <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  delay: 0.25 * index,
                }}
                  key={text}
                  className="font-bold"
                >
                  <Link href={href}>{text}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="hidden lg:flex items-center gap-8 text-white font-semibold">
        {menuLinks.map(({ text, href }, index) => (
          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.25 * index,
            }}
            key={text}
          >
            <Link href={href}>{text}</Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import pcOne from "../assets/Screenshot from 2024-05-02 21-27-28.png";
import pc2 from "../assets/Screenshot from 2024-05-04 20-26-28.png";
import pc3 from "../assets/Screenshot from 2024-06-25 00-16-50.png";
import pc4 from "../assets/Screenshot from 2024-06-25 00-17-56.png";
import pc5 from "../assets/Screenshot from 2024-06-25 00-18-29.png";
import pc6 from "../assets/Screenshot from 2024-06-25 00-27-40.png";
import pc7 from "../assets/Screenshot from 2024-06-25 00-27-45.png";

import pc8 from "../assets/Screenshot from 2024-06-25 00-57-23.png";
import pc9 from "../assets/Screenshot from 2024-06-25 00-57-38.png";
import pc10 from "../assets/Screenshot from 2024-06-25 00-57-50.png";

import pc11 from "../assets/Screenshot from 2024-06-25 00-58-14.png";
import pc12 from "../assets/Screenshot from 2024-06-25 01-10-00.png";
import pc13 from "../assets/Screenshot from 2024-06-25 01-12-02.png";
import pc14 from "../assets/Screenshot from 2024-06-25 01-12-18.png";

interface Product {
  title: string;
  link: string;
  thumbnail: StaticImageData | string;
}
const products: Product[] = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail: pcOne,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc2,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc3,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc4,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc5,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc7,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc7,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc8,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc10,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc10,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc11,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc12,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc13,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc14,
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail: pc13,
  },
];

const HeroParallax = () => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        I am <br /> Soumen Bhunia
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        I build beautiful products with the latest technologies and frameworks.
        I am a passionate developer and designer who loves to build amazing products.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default HeroParallax;

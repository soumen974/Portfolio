"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        // initial={{
        //   opacity: 1,
        //   y: 20,
        // }}
        // animate={{
        //   y: visible ? 0 : -100,
        //   opacity: visible ? 1 : 0,
        // }}
        // transition={{
        //   duration: 0.2,
        // }}
        className={cn(
          "  max-w-4xl  md:pt-0 pr-10 md:pr-20",
          className
        )}
      >
        <div className=" flex flex-row-reverse  justify-between">
          <div className="flex    border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#18181B] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  pr-2 pl-4 py-2  items-center justify-center space-x-2">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-4 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
            <button className=" text-sm font-medium relative   text-black dark:text-white  px-4 ">
              <span className="block sm:hidden"><RiTwitterXLine/></span>
              <span className="hidden sm:block text-sm">Connect me</span>
              
              <span className="absolute inset-x-0 w-12 mx-auto -bottom-2 rounded-r-full bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
          <div className="flex    border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#18181B] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  p-2 px-4 items-center justify-center ">
          <MdOutlineLightMode/>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

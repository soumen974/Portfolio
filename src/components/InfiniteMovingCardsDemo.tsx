"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";


export function InfiniteMovingCardsDemo() {
  return (
    <div className=" overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "next",
    title: "A Tale of Two Cities",
    icon: <RiNextjsLine className="h-12 w-12 text-neutral-500 dark:text-white" />,
  },
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "William Shakespeare",
    title: "react",
    icon: <FaReact className="h-12 w-12 text-neutral-500 dark:text-white" />,
  }
  ,
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "William Shakespeare",
    title: "mongo db",
    icon: <BiLogoMongodb className="h-12 w-12 text-neutral-500 dark:text-white" />,
  }
  ,
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "",
    title: "exp",
    icon: <SiExpress className="h-12 w-12  text-neutral-500 dark:text-white" />,
  }
  ,
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "",
    title: "node",
    icon: <FaNodeJs className="h-12 w-12 text-neutral-500 dark:text-white" />,
  }
  ,
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "",
    title: "sql",
    icon: <SiMysql className="h-12 w-12 text-neutral-500 dark:text-white" />,
  }
  ,
  {
    quote:
      "/images/soumenbhunia.svg",
    name: "",
    title: "sbt",
    icon: <BiLogoSpringBoot className="h-12 w-12 text-neutral-500 dark:text-white" />,
  }
];

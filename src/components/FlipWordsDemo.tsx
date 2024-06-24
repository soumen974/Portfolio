import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
// import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";


export function FlipWordsDemo() {
  const words = ["Fullstack Developer", "Frontend Developer", "UI/UX Designer "];

  return (
    <>
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hi, I’am Soumen Bhunia , a
        <FlipWords words={words} /> <br />
        <h1 className="flex justify-center">i build web applications</h1>
      </div>
      
    </div>
    
    </>
  );
}
export default  FlipWordsDemo;
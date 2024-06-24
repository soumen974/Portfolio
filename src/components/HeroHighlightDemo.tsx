"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"; 
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FiGithub } from "react-icons/fi";


export function HeroHighlightDemo() {
  const words = ["Fullstack Developer", "Frontend Developer", "UI/UX Designer "];
  const words2 = [
    {
      text: " I ",
    },
    {
      text: " Build ",
    },
    {
      text: "awesome",
    },
    {
      text: "Web",
    },
    {
      text: "applications.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (

    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=""
      >
        <div className="flex justify-around pt-5">
          
          <div className="left">
              <div
            className="dark:bg-black bg-white text-black dark:text-white flex items-center  justify-center"
          >
            <FiGithub />
           
          </div>
            
          </div>

        </div>
        <div className="h-[40rem] flex items-center  justify-center">
            <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
              <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              <h1 className="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl">
                I’am a <span className="text-blue-500 dark:text-blue-500">Fullstack Developer</span> and  <span className="text-blue-500 dark:text-blue-500">Ui Designer</span>
            </h1>
            <div className="flex flex-col text-sm text-white justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row" >
                <a
                className="w-full mb-4 p-2 rounded-sm whitespace-no-wrap bg-indigo-600 btn btn-tall md:w-auto hover:bg-indigo-500 sm:mr-2"
                href="mailto:me.soumen.bhunia@gmail.com?subject=Hiring%20Inquiry&amp;body=Hi%20Soumen%2C%0A%0AI%20am%20[Your%20Name].%20I%20want%20you%20to%20work%20with%20us.%20I%20want%20to%20hire%20you."
                >
               Open for Discussion
                </a>
                <a
                className="w-full mb-4 p-2 rounded-sm whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2"
                href="https://github.com/soumen974"
                >
                View on Github
                </a>
            </div>

            

            
              </div>
              {/* <TypewriterEffectSmooth className="flex justify-center" words={words2} /> */}

             
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import HeroParallax from "@/components/HeroParallaxDemo";
import FlipWordsDemo from "@/components/FlipWordsDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import BackgroundBeamsDemo from "@/components/BackgroundBeamsDemo";
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import EvervaultCard  from "@/components/EvervaultCardDemo";
import  BackgroundBeams  from "@/components/ui/background-beams";


import  Navigationbar  from "../components/Navigation/Navigationbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soumen Bhunia | Portfolio",
  description: "Generated by Soumen Bhunia , a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      
    <body  className={''}>
    <div className="relative mx-auto max-w-screen  px-2  ">
      <div className="absolute -z-10 inset-x-0 -inset-y-[4rem] ">
          <BackgroundBeams/>
      </div>
       <div className="mx-auto max-w-4xl   p-5  bg-red-00 ">
         <div className="z-50"><Navigationbar/></div>
         <div className="max-w-2xl mx-auto mt-28 ">
         {children}
         {/* <TracingBeamDemo/> */}
         </div>
      </div>
    </div>

      {/* <div className="">
        <HeroHighlightDemo/>
        <HeroParallax/>
        <h1 className="flex justify-center py-10 text-4xl">Projects</h1>

        <div className="grid grid-cols-2 px-10 py-10 lg:grid-cols-3">
          <AnimatedPinDemo />
          <EvervaultCard />
          <EvervaultCard/>
          <EvervaultCard/>
          <EvervaultCard/>
          <EvervaultCard/>
        </div>
        
        
       
        <BackgroundBeamsDemo/>
      </div> */}
    </body>
  </html>
  );
}

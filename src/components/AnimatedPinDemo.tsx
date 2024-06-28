"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { RiSlashCommands2 } from "react-icons/ri";

export function AnimatedPinDemo() {
  return (
    <div className="  ">
      <PinContainer
        title="/ui.aceternity.com"
      >
        <div className=" grid md:flex-col-2  gap-5 md:flex">
           <div className="border-[#ababb25a] grid gap-y-3 border-[1.6px] w-fit px-6 py-8 rounded-md">
              <h1 className='font-bold text-xl'>Placement module</h1>
              <p className='font-thin'>Ecommerce website for buyers and sellers.Ecommerce website for buyers and sellers
              Ecommerce website for buyers and sellers
              Ecommerce website for buyers and sellers
              </p>
              <div className=" flex flex-wrap gap-2 w-[90%]">
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>React.js</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Tailwind.css</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Springboot</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Mysql</h1>
              </div>
            </div>
        </div>
      </PinContainer>
    </div>
  );
}

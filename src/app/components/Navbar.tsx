import React from 'react'
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useRouter } from 'next/router';
import { MdOutlineLightMode } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { GoProjectSymlink } from "react-icons/go";



export default function Navbar() {

    // const router = useRouter();
    
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About me",
          link: "/about",
          icon: (
            <IconUser  className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Projects",
          link: "/projects",
          icon: <GoProjectSymlink className="h-4 w-4 text-neutral-500 dark:text-white" />,
        }
        
      ];
  return (
    <div className="fixed w-full">
        <div className='max-w-4xl  md:pt-0 pr-10 md:pr-20'>
            <div className=" flex flex-row-reverse  justify-between">
            <div className="flex    border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#18181B] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  pr-2 pl-4 py-2  items-center justify-center space-x-4 md:space-x-2">
               
                {navItems.map((navItem) => (
                <div
                    key={navItem.link}
                    className={"relative dark:text-neutral-50 items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"}
                >
                <Link href={navItem.link}>
                <div className="flex items-center space-x-4">
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block text-sm">{navItem.name}</span>
                </div>
                </Link>
            </div>
            ))}
                <button className=" text-sm font-medium relative   text-black dark:text-white  px-4 ">
                <Link href={'https://twitter.com/Soumen81845556'} className="block sm:hidden"><RiTwitterXLine/></Link>
                <Link href={'https://twitter.com/Soumen81845556'} className="hidden sm:block text-sm">Connect me</Link>
                
                <span className="absolute -inset-x-2 w-12 mx-auto -bottom-[0.6rem] rounded-full  bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
            </div>

            </div>

        </div>
    </div>
  )
}

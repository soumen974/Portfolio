import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
        <footer className='py-5' >
          <h2 className='flex justify-center text-xl text-white font-light py-6'>Follow me </h2>
          <div className=" flex justify-evenly px-0 sm:px-32">
            <Link href={'https://github.com/soumen974'}><FaGithub className='h-6 w-6 '/></Link>
            <Link href={'https://www.linkedin.com/in/soumen-bhunia-me-dvp/'}><FaLinkedin className='h-6 w-6'/></Link>
            <Link href={'https://twitter.com/Soumen81845556'}><RiTwitterXFill className='h-6 w-6'/></Link>
            <Link href={'https://www.instagram.com/Soumen_.02'}><FaInstagram className='h-6 w-6'/></Link>
            <Link href={'https://www.upwork.com/freelancers/~018b00e28a0f4232b7?mp_source=share'}><FaUpwork className='h-6 w-6'/></Link>
          </div>

        </footer>
    </div>
  )
}

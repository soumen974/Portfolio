import React from 'react'
import ConnectMeSVG from "../images/connect-me.svg";

export default function Nav() {
  return (
    <>
            <div className="flex items-center justify-between py-6">
                <a href="\">
                    <h1 className='font-extrabold text-3xl text-white flex justify-end items-center '>S <span className='text-indigo-700 '>B</span></h1>
                </a>

                <div className="flex items-center mb-4 md:block">
                
                <a className="bg-indigo-600 btn rounded-full hover:bg-indigo-500 flex items-center gap-4" href="https://www.linkedin.com/in/soumen-bhunia-me-dvp/">
                    Connect me
                    <img className='w-4' src={ConnectMeSVG} alt="" />
                </a>
                </div>

            </div>
    </>
  )
}

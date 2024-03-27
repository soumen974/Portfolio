import React from 'react'
import ConnectMeSVG from "../images/connect-me.svg";

export default function Nav() {
  return (
    <>
            <div className="flex items-center justify-between py-6">
                <a href="#">
                    <h1 className='font-extrabold text-3xl text-white'>S <span className='text-indigo-700'>B</span></h1>
                </a>

                <a href="#">
                    <svg
                        className="w-6 h-6 fill-current md:hidden"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </a>

                <div className="flex items-center mb-4 md:block">
                
                <a className="bg-indigo-600 btn rounded-full hover:bg-indigo-500 flex items-center gap-4" href="#">
                    Connect me
                    <img className='w-4' src={ConnectMeSVG} alt="" />
                </a>
                </div>

            </div>
    </>
  )
}

import React from 'react'
import CubeEcomPAge from '../images/cube-ecom-prj-img.png'


export default function ComsPrj() {
  return (
    <>
        <div className="flex justify-end mb-8 sm:flex-row ">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img
                className=""
                src={CubeEcomPAge}
                alt=""
                />
            </div>
            
            <div
                className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
            >
                <p
                className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
                >
                Lightning fast workflow
                </p>
                <h3 className="title title-small sm:text-left md:text-4xl">
                Cubikor-Ecommers
                </h3>
                <p className="text md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
         </div>
    </>
  )
}

import React from 'react'
import ComsPrj from './ComsPrj'
import CubeEcomPAge from '../images/cube-ecom-prj-img.png'
import workfoilio from '../images/workfoilio.png'
import PlacementModule from '../images/PlacementModule.png'



export default function Projects() {
  return (
    <>
    <div id='projects' className="mb-16 border-b border-gray-800 mt-8">
                <h2 className="mb-2 title sm:text-4xl md:text-5xl">
                Process of creating creative pages
                </h2>
                <p className="mb-20 mx-auto intro sm:max-w-xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum — semper quis lectus nulla
                at volutpat diam ut venenatis.
                </p>

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
                 E-Commerce rubics cube selling and buying platform
                </p>
                <h3 className="title title-small sm:text-left md:text-4xl">
                Cubikor-Ecommers fullstack Project
                </h3>
                <p className="text md:text-left">
                The Cube E-Commerce Frontend is a web application designed to provide users with an intuitive and seamless shopping experience. It leverages the Cube UI framework to create a responsive, visually appealing, and user-friendly interface for browsing and purchasing products online.

                Features
                
                <ul role="list" className="list-disc space-y-2 pl-4 pt-4 text-sm">
                    
                  
                    <li>Browse through a wide range of products organized into categories.</li>
                    <li>View product details, including images, descriptions, prices, and availability.</li>
                    <li>Add products to the shopping cart.</li>
                    <li>Adjust product quantities and remove items from the cart...more</li>
                    
                </ul>

                </p>
            </div>
         </div>

               

                <div className="flex flex-col mb-8 sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                    <img
                    className="rounded-sm"
                    src={workfoilio}
                    alt=""
                    />
                </div>
                <div
                    className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
                >
                    <p
                    className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left"
                    >
                    Lightning fast workflow
                    </p>
                    <h3 className="title title-small sm:text-left md:text-4xl">
                    Data-driven insights
                    </h3>
                    <p className="text md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                </div>
                <div className="flex flex-col mb-8 sm:flex-row">
                <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                    <img
                    className="rounded-sm"
                    src={PlacementModule}
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
                    Data-driven insights
                    </h3>
                    <p className="text md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                </div>
            </div>
    </>
  )
}

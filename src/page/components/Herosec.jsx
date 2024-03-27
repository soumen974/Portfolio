import React from 'react'
import ViewImage from "../images/video-placeholder.jpg";
import MyBannerImage from "../images/hero-banner.png";

export default function Herosec() {
  return (
    <>
             <h1 className="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl">
                I’am a <span className="text-indigo-700">Frontend Developer</span> and  <span className="text-indigo-700">Ui Designer</span>
            </h1>

            <p className="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
                I'm a web developer with a passion for creating engaging, user-friendly, and responsive websites using React.js,Next.js, Tailwind CSS, and other technologies. 
            </p>

            <div className="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row" >
                <a
                className="w-full mb-4 whitespace-no-wrap bg-indigo-600 btn btn-tall md:w-auto hover:bg-indigo-500 sm:mr-2"
                href="mailto:me.soumen.bhunia@gmail.com?subject=Hiring%20Inquiry&amp;body=Hi%20Soumen%2C%0A%0AI%20am%20[Your%20Name].%20I%20want%20you%20to%20work%20with%20us.%20I%20want%20to%20hire%20you."
                >
               Open for Discussion
                </a>
                <a
                className="w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2"
                href="https://github.com/soumen974"
                >
                View on Github
                </a>
            </div>
            <div id='myimage' className="mb-16">
                <img
                className="block w-full max-w-5xl mx-auto rounded"
                src={MyBannerImage}
                alt=""
                />
            </div>
    
    </>
  )
}

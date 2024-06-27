import Image from 'next/image';
import {TracingBeamDemo} from "../components/TracingBeamDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";

export default function Home() {

  return (
    <>
      <div className="h-100vh">
        {/* intro */}
        <div className="flex-col-1 gap-y-2 flex flex-wrap-reverse justify-between">
          <div className="">
            <h1 className="text-3xl  sm:text-5xl font-extrabold  bg-clip-text">Soumen Bhunia</h1>
            <h5 className="py-1 text-[#62626A] text-[1.1rem] pt-4">
              I build <span className="bg-[#3F3F46] rounded-full text-gray-100 px-3 py-[0.15rem]">Web Apps</span> and <span className="bg-[#3F3F46] rounded-full px-3 py-[0.15rem] text-gray-100">Designs</span> understanding the user experience.
            </h5>
          </div>

          <div className="">
            <Image src="/images/soumenbhunia.svg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />
          </div>
        </div>


        <div className="py-8 text-[#62626A] text-[1.1rem]">
         <a href="https://github.com/soumen974" className='text-white'>IBM</a> certified web developer, I builds user friendly web apps. <br/>
          check me on  <a href="https://github.com/soumen974" className='text-white'>Github</a>
        </div>

        {/* recent experience */}

        <div className="py-5">
          <h1 className='text-2xl md:text-4xl font-extrabold'>Recent Experience</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-3 md:grid-cols-2  justify-between ">

              <div className="bg-[#4d4d4d8e] sm:grid flex gap-x-5  gap-y-2  mt-4 p-3 w-full  border-[1.7px] rounded-md border-[#696969]">
                
                <div className="">
                  <Image src="/images/buildspaceso_logo.jpeg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />
                </div>

                <div className="">
                  <h1 className='font-bold'>buildspace n&w s5 Cohort</h1>
                  <h2 className='text-white text-sm font-thin'>buildspace</h2>
                  <h3 className='text-gray-100 font-thin text-sm' >Jun 2024 - Present · 1 mo</h3>
                </div>
              </div>

              <div className="bg-[#4d4d4d8e] sm:grid flex gap-x-5  gap-y-2  mt-4 p-3 w-full  border-[1.7px] rounded-md border-[#696969]">
                
                <div className=" p-1 bg-white  w-16 h-16  rounded-md">
                  <Image src="/images/zidio_development_logo.jpeg" className="" alt="SoumenBhunia" width={64} height={64} />
                </div>

                <div className="">
                  
                  <h1 className='font-bold'>Web Developer Internship</h1>
                  <h2 className='text-white text-sm font-thin'>Zidio Development</h2>
                  <h3 className='text-gray-100 font-thin text-sm' >Jun 2024 - Present · 1 mo</h3>

                </div>
              </div>
              {/* <h3>San Francisco Bay Area </h3> */}

              

            </div>

        </div>

        {/* projects */}
        <div className="py-5">
          <h1 className='text-2xl md:text-4xl font-extrabold'>Projects</h1>
          <div className="pt-5 grid md:flex-col-2  gap-5 md:flex">
            
            <div className="border-[#ababb25a] grid gap-y-3 border-[1.6px] w-fit px-6 py-8 rounded-md">
              <h1 className='font-bold text-xl'>Cubikor</h1>
              <p className='font-thin'>The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.
              </p>
              <div className=" flex flex-wrap gap-2 w-[90%]">
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>React.js</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Tailwind.css</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Node.js</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Express.js</h1>
                <h1 className='bg-[#ababb25a] w-fit rounded-full text-sm px-2'>Mariadb</h1>
              </div>
            </div>

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
        </div>

        {/* teck stack */}

        <div className="py-5">
          <h1 className='text-2xl md:text-4xl font-extrabold'>Tech Stack</h1>
          <div className="">
            <InfiniteMovingCardsDemo/>
          </div>
        </div>

       
      </div>
    </>
  );
}

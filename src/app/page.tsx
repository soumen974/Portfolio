import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-[100vh">
        <div className="flex-col-1 flex flex-wrap-reverse justify-between">
          <div className="">
            <h1 className="text-4xl sm:text-5xl font-extrabold  bg-clip-text">Soumen Bhunia</h1>
            <h5 className="py-1 text-[#62626A] text-[1.1rem] pt-4">
              I build <span className="bg-[#3F3F46] rounded-full text-gray-100 px-3 py-[0.15rem]">Web Apps</span> and <span className="bg-[#3F3F46] rounded-full px-3 py-[0.15rem] text-gray-100">Designs</span> understanding the user experience.
            </h5>
          </div>

          <div className="">
            <Image src="/images/soumenbhunia.svg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />
          </div>
        </div>


        <div className="py-8 text-[#62626A] text-[1.1rem]">
         <a href="https://github.com/soumen974" className='text-white'>IBM</a> certified web developer, I builds user friendly websites. <br/>
          check me on  <a href="https://github.com/soumen974" className='text-white'>Github</a>
        </div>

        {/* Intern @Zidio Development | Full stack developer |  */}

        <div className="py-5">
          <h1 className='text-4xl font-extrabold'>Recent works</h1>
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
                
                <div className="">
                  <Image src="/images/zidio_development_logo.jpeg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />
                </div>

                <div className="">
                  <h1> Web Developer Internship </h1>
                  <h2 className='text-gray-400'>Zidio Development</h2>
                  <h3 className='text-gray-200 text-sm' >Jun 2024 - Present · 1 mo</h3>
                  <h3>Odisha, India · Remote </h3>
                </div>
              </div>
              {/* <h3>San Francisco Bay Area </h3> */}

              

            </div>

        </div>
      </div>
    </>
  );
}

import Image from 'next/image';

export default function Home() {
  return (
   <>
    <div className="">
       {/* intro */}
       <div className="flex-col-1 gap-y-2 flex flex-wrap-reverse justify-between">
          <div className="">
            <h1 className="text-3xl  sm:text-5xl font-extrabold  bg-clip-text">Soumen Bhunia</h1>
            <h5 className="py-1 text-[#62626A] text-[1.1rem] pt-4">
              I build <span className="bg-purple-500 rounded-full text-[.8rem]  text-gray-100 px-3 py-[0.15rem]">Web Apps</span> and <span className="bg-violet-500 rounded-full px-3 py-[0.15rem] text-[.8rem]  text-gray-100">Designs</span> understanding the user experience.
            </h5>
          </div>

          <div className="">
            <Image src="/images/soumenbhunia.svg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />
          </div>
        </div>

        <div className="py-10 relative">
            <div className="flex absolute sm:left-20 right-5 sm:right-0 top-5 w-fit  border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#18181B] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  p-2 px-4 items-center justify-center ">
            Who
            </div>          
            <div  className="border-[#ababb25a] text-white grid gap-y-3 border-[1.6px] w-fit px-6 py-8 rounded-xl sm:rounded-md leading-6 text-md font-light">
                <p>I&apos;m a web developer passionate about creating responsive websites using React.js, Next.js, and Tailwind CSS. I&apos;ve collaborated with design and backend teams at Oasis Infobyte to deliver high-quality web solutions. Currently, I&apos;m pursuing a B.Tech in Computer Science at Centurion University of Technology and Management, gaining a strong foundation in programming and software engineering.
                
                </p>
                <p>
                Through internships at Zidio Development, buildspace, OctaNet Services Pvt Ltd., and Oasis Infobyte, I&apos;ve applied my skills in real-world scenarios. I&apos;m eager to learn new technologies and trends, and I&apos;m looking forward to connecting with fellow frontend professionals to share insights and explore collaborations.
                </p>
          </div>
          
        </div>

    </div>
   </>
  );
}

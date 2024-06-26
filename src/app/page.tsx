
import mypic from "../../public/images/mypic.png";
export default function Home() {
  return (
   <>
    <div className="h-[100vh]  ">
      <div className="flex-col-1 flex  flex-wrap-reverse justify-between ">
        <div className="">
          <h1 className="text-4xl sm:text-6xl font-bold relative  bg-clip-text  ">Soumen Bhunia</h1>
          <h5 className="py-1 text-[#868585] ">I'm a <span className="bg-[#464649] text-gray-100 px-1 py-[0.15rem]">Fullstack Developer</span> and <span className="bg-[#464649] px-1 py-[0.15rem] text-gray-100">Designer</span>  </h5>
        </div>
      
        <div className="ht-[9rem] w-[6rem]  dark:bg-[#18181B] bg-white  dark:bg-grid-white/[0.2] bg-grid-[#18181B] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#18181B] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <img src="/images/mypic.png" className="w-16 h-16" alt="soumenBhunia"  />
        </div>
      </div>
      
      <div className="py-8">
        I'm a full stack web developer with a passion for creating engaging, user-friendly, and responsive websites using React.js,Next.js, Tailwind CSS, and other technologies. 
      </div>
    </div>
   </>
  );
}

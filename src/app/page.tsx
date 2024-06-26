import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <div className="flex-col-1 flex flex-wrap-reverse justify-between">
          <div className="">
            <h1 className="text-4xl sm:text-5xl font-bold relative bg-clip-text">Soumen Bhunia</h1>
            <h5 className="py-1 text-[#62626A] text-[1.1rem] pt-4">
              I build <span className="bg-[#3F3F46] rounded-full text-gray-100 px-3 py-[0.15rem]">Web Apps</span> and <span className="bg-[#3F3F46] rounded-full px-3 py-[0.15rem] text-gray-100">Designs</span> understanding the user experience.
            </h5>
          </div>

          <div className="ht-[9rem]  w-[6rem] dark:bg-[#18181B]   flex items-center justify-center">
           
            <Image src="/images/soumenbhunia.svg" className="w-16 h-16 rounded-md" alt="soumenBhunia" width={64} height={64} />
          </div>
        </div>

        <div className="py-8 text-[#62626A] text-[1.1rem]">
          I&apos;m a full stack web developer , I builds user friendly websites. <br/>
          check me on  <a href="https://github.com/soumen974" className='text-white'>Github</a>
        </div>
      </div>
    </>
  );
}

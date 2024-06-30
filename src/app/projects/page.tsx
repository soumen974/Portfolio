import Image from 'next/image';

export default function Home() {
  
  const projects = [
    {
      title:"Cubikor",
      image:<Image src="/images/cubikor.svg" className="w-fit h-60 rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
      discription:" The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Node.js"},
        {name:"Express.js"},
        {name:"Mariadb"},
      ],
    },
    {
      title:"Placement module",
      image:<Image src="/images/cubikor.svg" className="w-fit h-60 rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
      discription:" The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },
    {
      title:"Workfolio",
      image:<Image src="/images/cubikor.svg" className="w-fit h-60 rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
      discription:" The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },
    {
      title:"Cashlash",
      image:<Image src="/images/cubikor.svg" className="w-fit h-60 rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
      discription:" The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },


  ]
  return (
   <>
    <div className="">
      <div className="">
        <div className="relative">
            <div className="text-2xl ">
            Projects
            </div> 
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2  justify-between  ">
          {projects.map((project)=>(
            <div key={project.title} className=" ">
              <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative ">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  <div className="">
                  {project.image}
                  </div>
                  <div className="">
                    <h1>{project.title}</h1>
                  </div>

                  <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                    {project.discription}
                  </h2>
            
              </div>
            
            </div>

          ))}
        </div>

        <div className="pt-5 grid md:flex-col-2  gap-5 md:flex">
            {projects.map((project)=>(
              <div key={project.title} className="border-[#ababb25a] grid gap-y-3 border-[1.6px] w-fit px-6 py-8 rounded-xl sm:rounded-md">
                  <h1 className='font-bold text-xl'>{project.title}</h1>
                  <p className='font-thin'>
                    {project.discription}
                  </p>
                  <div className=" flex flex-wrap gap-2 w-[90%]">
                    {project.Skills.map((skill)=>(
                      <h1 key={skill.name} className='odd:bg-black  even:bg-indigo-400 w-fit rounded-full text-sm t px-[0.6rem]'>{skill.name}</h1>
                    ))}
                  </div>
              </div>
            ))}
          </div>
          
      </div>
    </div>
   </>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

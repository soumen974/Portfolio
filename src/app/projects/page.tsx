import Image from 'next/image';

export default function Home() {
  
  const projects = [
    {
      title:"Cubikor",
      image:<Image src="/images/cubikor.svg" className="h-full w-full  rounded-md" alt="SoumenBhunia" width={64} height={64} />,
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
      image:<Image src="/images/cubikor.svg" className="w-fit  rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
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
      image:<Image src="/images/workfolio.svg" className="w-fit rounded-md " alt="SoumenBhunia" width={64} height={64} />,
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
      image:<Image src="/images/cubikor.svg" className="w-fit  rounded-xl " alt="SoumenBhunia" width={64} height={64} />,
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
              <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col gap-4 items-start max-w-sm mx-auto p-4 relative ">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  <div className="">
                  {project.image}
                  </div>

                  <div className="grid gap-2">
                      <div className="">
                        <h1>{project.title}</h1>
                      </div>

                      <h2 className="dark:text-white text-black  text-sm font-light">
                        {project.discription}
                      </h2>
                    </div>
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

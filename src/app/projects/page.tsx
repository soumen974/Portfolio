import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
export default function Home() {
  
  const projects = [
    {
      title:"Cubikor",
      Ghlink:"https://github.com/soumen974/Cubikor-react",
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
      Ghlink:"https://github.com/sambit826059/Placement_Module",
      image:<Image src="/images/placement_module.svg" className="w-fit  rounded-md " alt="SoumenBhunia" width={64} height={64} />,
      discription:" The Placement Module is designed to facilitate seamless interaction and communication between students, the training and placement cell, and hiring managers.Here's the module of group can benefit from this ",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },
    {
      title:"Workfolio",
      Ghlink:"https://github.com/soumen974/WorkFolio",
      image:<Image src="/images/workfolio.svg" className="w-fit rounded-md " alt="SoumenBhunia" width={64} height={64} />,
      discription:" Workfolio [Resume Builder] is a responsive React.js portfolio showcasing skills, achievements, and experiences, featuring a dynamic portfolio, mobile-first design, and an interactive resume creation form.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },
    {
      title:"Cashslash",
      Ghlink:"https://github.com/soumen974/CashSlash",
      image:<Image src="/images/cashlash.svg" className="w-fit  rounded-md " alt="SoumenBhunia" width={64} height={64} />,
      discription:" CashSlash is designed to revolutionize how you manage your money. Whether you're tracking personal expenses, splitting bills with friends, or analyzing your financial progress, CashSlash has you covered.",
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

                  <div className="grid gap-2 relative">
                      <div className="">
                        <Link href={project.Ghlink} className='absolute border-none bg-white w-fit rounded-full -top-8 right-8'>
                        < FaGithub className='w-8 text-black h-8'/>
                        </Link>
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

interface IconProps {
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
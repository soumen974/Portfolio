import Image from 'next/image';
import {TracingBeamDemo} from "../components/TracingBeamDemo";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import { RiSlashCommands2 } from "react-icons/ri";
import { SiAltiumdesigner } from "react-icons/si";
import { TbCodeDots } from "react-icons/tb";
import { PiCodeBold } from "react-icons/pi";

export default function Home() {

  const recent_experience= [
    {
      image:<Image src="/images/buildspaceso_logo.jpeg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />,
      position:"buildspace n&w s5 Cohort",
      company:"buildspace",
      time:"Jun 2024 - Present · 1 mo",
    },
    {
      image:<Image src="/images/zidio_development_logo.jpeg" className="w-16 h-16 rounded-md" alt="SoumenBhunia" width={64} height={64} />,
      position:"Web Developer Internship",
      company:"Zidio Development",
      time:"Jun 2024 - Present · 1 mo",
    },  
  ];

  const projects = [
    {
      title:"Cubikor",
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
      discription:" The Cube E-Commerce , is a web application designed to provide users with an intuitive and seamless shopping experience.and user-friendly interface for browsing and purchasing products online.",
      Skills:[
        {name:"React.js"},
        {name:"Tailwind.css"},
        {name:"Springboot"},
        {name:"Mysql"},
      ],
    },

  ]

  const services = [
    {
      title: "Frontend developement",
      discription:"Smooth API Integration.",
      icon: <PiCodeBold className='w-full h-full object-cover object-center  font-thin text-black sm:text-white  '/>,
    },
    {
      title: "Fullstack developement",
      discription:"Optimized System Architecture.",
      icon: <TbCodeDots className='w-full h-full object-cover object-center  font-thin text-black sm:text-white   '/>,
    },
    {
      title: "Designing",
      discription:"UI/UX , Elegant Digital Experiences ",
      icon: <SiAltiumdesigner className='w-full h-full object-cover object-center  font-thin  text-black sm:text-white   '/>,
    },
   
  ];

  const Licences_and_certifiaction = [
    {
      image:<Image src="/images/ibm-crt.svg" className="w-60 h-40 rounded-md" alt="ibm" width={64} height={64} />,
      company:"IBM",
      logo:<Image src="/images/ibm_logo.jpeg" className=" sm:w-24 w-28 sm:h-24 h-28 rounded-md" alt="ibm" width={64} height={64} />,
      title:"Web Development with HTML, CSS, JavaScript",
      time:"- Jun 2023  ",
      Skills:[
        {name:"HTML5"},
        {name:"CSS3" },
        {name:" JavaScript"},

      ],
    },
    {
      image:<Image src="/images/ibm-crt.svg" className="w-60 h-40 rounded-md" alt="ibm" width={64} height={64} />,
      company:"Meta",
      logo:<Image src="/images/meta_logo.jpeg" className=" sm:w-24 w-28 sm:h-24 h-28 rounded-md" alt="ibm" width={64} height={64} />,
      title:"React Basics",
      time:"- Oct 2023  ",
      Skills:[
        {name:"React.js"},

      ],
    },
    {
      image:<Image src="/images/infosys-crt.svg" className="w-60 h-40 rounded-md" alt="ibm" width={64} height={64} />,
      company:"infosys",
      logo:<Image src="/images/infosys_logo.jpeg" className=" sm:w-24 w-28 sm:h-24 h-28 rounded-md" alt="ibm" width={64} height={64} />,
      title:"Spring: An Overview of the Spring Framework",
      time:"- Nov 2023  ",
      Skills:[
        {name:"Spring Framework"},

      ],
    },
    {
      image:<Image src="/images/ibm-crt.svg" className="w-60 h-40 rounded-md" alt="ibm" width={64} height={64} />,
      company:"MongoDB",
      logo:<Image src="/images/mongodbinc_logo.jpeg" className=" sm:w-24 w-28 sm:h-24 h-28 rounded-md" alt="ibm" width={64} height={64} />,
      title:"MongoDB for SQL Professionals",
      time:"- Jun 2024  ",
      Skills:[
        {name:"MongoDB"},

      ],
    },
    
    
    
  ]
  

  return (
    <>
      <div className="h-100vh">
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


        <div className="py-8 text-[#62626A] text-[1.1rem]">
         <a href="https://github.com/soumen974" className='text-white'>IBM</a> certified web developer, I builds user friendly web apps. <br/>
          check me on  <a href="https://github.com/soumen974" className='text-white'>Github</a>
        </div>

        {/* recent experience */}

        <div className="py-5">
          <h1 className='text-2xl md:text-4xl '>Recent Experience</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-3 md:grid-cols-2  justify-between ">
            
              {recent_experience.map((experience)=>(
              <div key={experience.company} className="bg-[#2e2e2ec6] sm:grid flex gap-x-5  gap-y-2  mt-4 p-3 w-full  border-[1.7px] rounded-md border-[#494949]">
                <div className="">
                  {experience.image}
                </div>

                <div className="">
                  <h1 className='font-bold'>{experience.position}</h1>
                  <h2 className='text-white text-sm font-thin'>{experience.company}</h2>
                  <h3 className='text-gray-100 font-thin text-sm' >{experience.time}</h3>
                </div>
              </div>
            ))}

            </div>

        </div>

        {/* projects */}
        <div className="py-5">
          <h1 className='text-2xl md:text-4xl '>Projects</h1>
          <div className="pt-5 grid md:flex-col-2  gap-5 md:flex">
            {projects.map((project)=>(
              <div key={project.title} className="border-[#ababb25a] grid gap-y-3 border-[1.6px] w-fit px-6 py-8 rounded-md">
                  <h1 className='font-bold text-xl'>{project.title}</h1>
                  <p className='font-thin'>
                    {project.discription}
                  </p>
                  <div className=" flex flex-wrap gap-2 w-[90%]">
                    {project.Skills.map((skill)=>(
                      <h1 key={skill.name} className='odd:bg-black even:text-black even:bg-violet-500 w-fit rounded-full text-sm px-2'>{skill.name}</h1>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>

        {/* teck stack */}
        <div className="py-5">
          <h1 className='text-2xl md:text-4xl '>Tech Stack</h1>
          <div className="py-2">
            <InfiniteMovingCardsDemo/>
          </div>
        </div>

        {/* services */}
        <div className="py-5">
          <h1 className='text-2xl md:text-4xl '>Services</h1>
          <div className="py-5 grid grid-cols-3 gap-3 md:grid-cols-3  justify-between ">
          {services.map((services) => (
            <div key={services.title} className=" flex justify-center sm:grid bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500  p-2 md:p-4 rounded-xl">
              <div className=" py-4 h-20 w-20 flex justify-center ">
                {services.icon}
              </div>
              <h1 className=' text-xl text-white font-bold w-fit hidden sm:block'>{services.title}</h1>
              <p className='font-normal text-base text-slate-100 hidden sm:block'>{services.discription} </p>
            </div>
          ))}
 
          </div>
        </div>

        {/* Licences and certifiaction */}
        <div className="py-">
          <h1 className='text-2xl md:text-4xl '>Licenses & certifications</h1>
          <div className="py-3 flex-col-reverse flex">
            {Licences_and_certifiaction.map((LnC)=>(
              <div key={LnC.title} className=" py-5 flex gap-5">

                <div className="">
                  {LnC.logo}
                </div>

                <div className=" grid">
                  <h1 className="font-bold">
                    {LnC.title}
                  </h1>

                  <h1 className="">
                  { LnC.company}
                  </h1>

                  <h1 className='text-gray-100 font-thin text-sm'>
                    {LnC.time} 
                  </h1>
                  {/* Skills */}

                  <div className="w-fit flex gap-1 overflow-x-hidden">
                    {LnC.Skills.map((skill)=>(
                      <h1 key={skill.name} className='bg-green-400 text-black font-bold flex items-center text-[0.6rem] px-2 rounded-full'>
                        {skill.name}
                      </h1>
                    ))}
                  </div>

                </div>

              </div>
            ))}
           </div>

        </div>

        {/* Education */}
        
       
      </div>
    </>
  );
}

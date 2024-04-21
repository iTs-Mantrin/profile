 import React from 'react'

export default function Projects() {
    const projects = [
        {
            name:"Portfolio",
            description:"Portfolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
            visitNow:"./",
            caseStudty:"https://github.com/iTs-Mantrin/myportfolio",
            image:"images/project-img/portfolio.png"      
        },
        {
            name:"Smart School",
            description:"Designing a Smart School Project involves creating a comprehensive plan to integrate technology into various aspects of education. This may include implementing smart classrooms, interactive learning platforms, automated administrative systems, and leveraging data analytics for personalized student progress tracking. The project aims to enhance overall efficiency, engagement, and learning outcomes within the educational institution.",
            visitNow:"https://smart-school-education.netlify.app/",
            caseStudty:"https://github.com/iTs-Mantrin/smart-school",
            image:"images/project-img/Smart School.png"      
        },
        {
            name:"Boreal Coffee Clone",
            description:"I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. ",
            image:"images/project-img/boreal-coffee-clone.jpeg"      
        },
        {
            name:"Crown Template",
            description:"Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
            image:"images/project-img/crown-template.jpeg"      
        },
    ]
  return (
    <section id="projects" className=' py-[6rem] max-sm:py-5'>
        <div className='max-w-[120rem] w-[92%] m-auto'>
            <div className='text-center mb-[4rem]'>
                <h2 className='text-[35px] uppercase font-bold tracking-[1px] pb-[4rem] max-sm:text-[30px] max-sm:pb-3'>Projects</h2>
                <p className='text-center text-[20px] text-[#555555] max-w-[80rem] w-[80%] m-auto max-sm:w-full m-auto max-sm:text-[16px]'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            <div>
                {
                    projects.map(
                        (project,index) => {
                            return(
                                <div key={index} className='flex max-w-[100rem] gap-10 py-[4rem] max-sm:flex-col'>
                                    <div className='w-[50%] px-[10px] max-sm:w-full'>
                                        <img src={project.image} alt={project.name} />
                                    </div>
                                    <div className='w-[50%] px-[10px] max-sm:w-full'>
                                        <h3 className='text-[25px] font-bold tracking-[1px] py-[1rem]  max-sm:text-[20px]'>{project.name}</h3>
                                        <p className='text-[18px] text-[#555555] max-sm:text-[14px]'>{project.description}</p>
                                        <div className='flex py-[40px] space-x-10 space-x-1 items-center'>
                                            <a href={project.visitNow} target='_blank' rel='noopener noreferrer' className='text-[15px] max-sm:text-[10px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] max-sm:px-8 max-sm:py-3 rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)] hover:translate-y-[-3px] duration-300'>Visit Now</a>
                                            <a href={project.caseStudty} target='_blank' rel='noopener noreferrer'  className='text-[15px] max-sm:text-[10px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] max-sm:px-8 max-sm:py-3 rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)] hover:translate-y-[-3px] duration-300'>Case Study</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    </section>
  )
}

 import React from 'react'

export default function Projects() {
    const projects = [
        {
            name:"Portfolio",
            description:"Portfolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
            visitNow:"./",
            caseStudty:"https://github.com/iTs-Mantrin/profile",
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
            name:"Glassberry",
            description:"Glassberry is a digital marketing agency that specializes in sales, business growth, and business consulting services. Digital marketing agencies play a crucial role in today's business landscape by helping companies reach their target audiences, increase brand awareness, and drive sales through various online channels such as social media, search engines, and email marketing.",
            visitNow:"https://glassberry.netlify.app/",
            caseStudty:"https://github.com/iTs-Mantrin/Glassberry",
            image:"images/project-img/express-cattering.png",    
        },
        {
            name:"Express Cattering",
            description:"Express Catering, a service that likely offers quick and efficient catering solutions for events or gatherings. Express catering typically focuses on providing delicious food options with fast turnaround times, making it suitable for corporate events, meetings, parties, and other occasions where timely service is crucial",
            visitNow:"https://express-catering.netlify.app",
            caseStudty:"https://github.com/iTs-Mantrin/Restaurant",
            image:"images/project-img/express-cattering.png",     
        }
    ]
  return (
    <section id="projects" className=' py-[6rem]'>
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
                                <div key={index} className='flex max-sm:flex-col max-w-[100rem] gap-10 py-[4rem] max-sm:py-5'>
                                    <div className='w-[50%] px-[10px] max-sm:w-full'>
                                        <img src={project.image} alt={project.name} />
                                    </div>
                                    <div className='w-[50%] px-[10px] max-sm:w-full'>
                                        <h3 className='text-[25px] font-bold tracking-[1px] py-[1rem]  max-sm:text-[20px]'>{project.name}</h3>
                                        <p className='text-[18px] text-[#555555] max-sm:text-[14px]'>{project.description}</p>
                                        <div className='flex py-[40px] space-x-10 max-sm:space-x-1 items-center'>
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

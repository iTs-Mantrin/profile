import React from 'react'

export default function About() {
    const skills = [
        {
            skill:"HTML"
        },
        {
            skill:"CSS"
        },
        {
            skill:"JavaScript"
        },
        {
            skill:"ReactJs"
        },
        {
            skill:"Bootstrap"
        },
        {
            skill:"TailwindCSS"
        },
        {
            skill:"GIT"
        },
        {
            skill:"Github"
        },
        {
            skill:"SEO"
        },
        {
            skill:"Express Basics"
        },
        {
            skill:"Responsive Design"
        },
        
    ]
  return (
    <section id='about' className='bg-[#fafafa] py-[6rem]'>
        <div className='max-w-[120rem] w-[92%] m-auto'>
            <div className='text-center mb-[4rem]'>
                <h2 className='text-[35px] uppercase font-bold tracking-[1px] pb-[4rem]'>About me</h2>
                <p className='text-center text-[20px] text-[#555555] max-w-[80rem] w-[80%] m-auto'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='flex max-w-[100rem] gap-10'>
                <div className='w-[50%] px-[10px]'>
                    <h3 className='text-[25px] font-bold tracking-[1px] pb-[2rem]'>
                        Get to know me!
                    </h3>
                    <div className='text-[18px] text-[#555555]'>
                        <p>
                            I'm a <span className='font-bold'>Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className='font-bold'>Projects</span> section.
                        </p> 
                        <p className='py-[20px]'>
                            I also like sharing content related to the stuff that I have learned over the years in <span className='font-bold'>Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href='https://in.linkedin.com/in/itsmantrin?trk=public_profile_browsemap' target='_blank' rel='noopener noreferrer' className='text-[#7718f2] font-bold underline'>Linkedin</a> where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                            I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-bold'>contact</span> me. 
                        </p> 
                        <div className='flex py-[40px] space-x-10 items-center'>
                            <a href="./#contact" className='text-[15px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)] hover:translate-y-[-3px] duration-300'>
                            Contact
                            </a>
                            <a href="./#contact" className='text-[15px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)] hover:translate-y-[-3px] duration-300'>
                            Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] px-[10px]'>
                    <h3 className='text-[25px] font-bold tracking-[1px] pb-[2rem]'>
                        My Skills
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                        {
                            skills.map(
                                (s,index) => {
                                    return(<div key={index} className='text-[15px] bg-[#99999933] rounded text-[#555555] font-semibold px-[2rem] py-[.8rem] mr-0.5 mb-0.5'>{s.skill}</div>)
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

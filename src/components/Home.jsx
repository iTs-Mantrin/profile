import React from 'react'
import { FaLinkedin,FaGithub, FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";


export default function Home() {
    const social = [
        {
          name:"LinkedIn",
          icon:<FaLinkedin/>,
          link:"https://in.linkedin.com/in/itsmantrin?trk=public_profile_browsemap"
        },
        {
          name:"GitHub",
          icon:<FaGithub/>,
          link:"https://github.com/iTs-Mantrin"
        },
        {
          name:"Twitter",
          icon:<FaTwitter/>,
          link:"https://twitter.com/Justice_India_"
        },
        {
          name:"Instagram",
          icon:<FaInstagram/>,
          link:"https://www.instagram.com/its_mantrin"
        },
        {
          name:"Youtube",
          icon:<FaYoutube />,
          link:"https://www.youtube.com/@Its_mantrin"
        },
      ]
  return (
    <section id='home' className='w-[100%] relative'>
        <div className='px-[150px] pt-[180px] max-sm:px-[0px]'>
            <h1 className='text-[#111111] text-[50px] uppercase font-black tracking-[3px] text-center max-sm:text-[40px] max-sm:px-[10px]'>Hey, I'm Manish Kumar</h1>
            <div className='px-[50px] pt-[30px] max-sm:px-[10px]'>
                <p className='w-[100%] leading-[1.6] text-[#333333] text-[20px] font-medium text-center max-sm:text-[17px]'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className='text-center mt-[50px] hover:translate-y-[-3px] duration-300'>
                <a className='text-[20px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)]' href="./#projects">Projects</a>
            </div> 
            <div className='text-center pt-[90px]'>
                <img className='w-[20%] m-auto' src="/images/mousewheel.gif" alt="Mouse wheel" />
            </div>
        </div>
        <div className='absolute top-[30%] bg-white shadow-[0_7px_29px_0_rgba(100,100,111,.2)] p-[5px] max-sm:hidden'>
             {
                social.map(
                    (link, index) => {
                        return (
                            <div className='text-[30px] px-[10px] py-[10px] hover:bg-[#eedefe] duration-300 rounded'>
                                <a key={index} className='' target='_blank' rel='noopener noreferrer' href={link.link}>{link.icon}</a>
                            </div>
                        )
                    }
                )
            }
          </div>        
    </section>
  )
}

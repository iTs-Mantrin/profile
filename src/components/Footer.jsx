import React from 'react'
import { FaLinkedin,FaGithub, FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";

export default function Footer() {
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
    <footer className='bg-[#000] text-[#fff]'>
        <div className='max-w-[120rem] w-[92%] m-auto'>
            <div className='flex py-[4rem] max-sm:flex-col'>
              <div className='order-2 max-sm:order-1 ml-auto max-sm:m-0'>
                <h2 className='text-[18px] uppercase font-bold pb-[1.5rem] max-sm:pb-5 tracking-[1px]'>Social</h2>
                  <div className='flex gap-4 max-sm:gap-9 text-[20px] max-sm:pb-10'>
                    {
                      social.map(
                        (link,index) => {
                          return(<a key={index} target='_blank' rel='noopener noreferrer' href={link.link}>{link.icon}</a>)
                        }
                      )
                    }
                  </div>
              </div>
              <div className='order-1 max-sm:order-2 w-[40%] max-sm:w-full'>
                <h2 className='text-[18px] uppercase font-bold pb-[1.5rem] tracking-[1px]'>
                  <a target='_blank' rel='noopener noreferrer' href="https://in.linkedin.com/in/itsmantrin?trk=public_profile_browsemap">Manish Kumar</a>
                </h2>
                <p className='text-[15px] max-sm:text-[13px]'>
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                </p>
              </div>
            </div>
            <div className='text-[12px] text-center py-[2rem] border-t-[1px] border-[#4c4c4c]'>
            &copy; Copyright 2024. Made by <a className='underline font-bold' target='_blank' rel="noopener noreferrer"  href="https://in.linkedin.com/in/itsmantrin?trk=public_profile_browsemap">Manish Kumar
                </a>
            </div>
        </div>
    </footer>
  )
}

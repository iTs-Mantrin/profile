import React from 'react'

export default function Header() {
    const navs =[
        {
            name:"Home",
            link:"./#home"
        },
        {
            name:"About",
            link:"./#about"
        },
        {
            name:"Projects",
            link:"./#projects"
        },
        {
            name:"Contact",
            link:"./#contact"
        },
        
    ]
  return (
    <header className='fixed z-[999] w-full bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)]'>
        <div className='flex px-[5rem] py-[1rem] p-3 text-[#333333] text-[14px]'>
            <div className='flex items-center gap-3 cursor-pointer hover:text-[#983eee] duration-300'>
                <div className='w-[50px]'>
                    <a href="/">
                        <img src="images/logo.jpeg" className='rounded-full border-2' alt="" />
                    </a>
                </div>
                <a className='' href='/'>
                    <span className='uppercase font-bold tracking-[1px]'>Manish Kumar</span>
                </a>
            </div>
            <div className='flex items-center ml-auto'>
                <ul className='flex'>
                    {
                        navs.map(
                            (nav,index) => {
                                return(<li key={index} className='text-[#333333] uppercase font-bold tracking-[1px] px-[25px] py-[15px] hover:text-[#983eee] duration-300'>
                                        <a className='' href={nav.link}>{nav.name}</a>
                                    </li>)
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    </header>
  )
}

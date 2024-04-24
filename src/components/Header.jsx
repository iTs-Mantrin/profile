import React from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";


export default function Header() {
    const navs = [
        {
            name: "Home",
            link: "./#home"
        },
        {
            name: "About",
            link: "./#about"
        },
        {
            name: "Projects",
            link: "./#projects"
        },
        {
            name: "Contact",
            link: "./#contact"
        },

    ]

    const menu = () => {
        const close = document.getElementById("close");
        const menu = document.getElementById("menu");
        const menubar = document.getElementById("menubar");
        menu.classList.add("hidden");
        close.classList.remove("hidden");
        menubar.classList.remove("hidden");
    }

    const close = () => {
        const close = document.getElementById("close");
        const menu = document.getElementById("menu");
        const menubar = document.getElementById("menubar");

        // menu.style.visibility = "hidden";
        // close.style.visibility = "visible";
        close.classList.add("hidden");
        menu.classList.remove("hidden");
        menubar.classList.add("hidden");

    }

    

    return (
        <header className='fixed z-[999] w-full bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)]'>
            <div className='flex px-[5rem] max-sm:px-5 py-[1.5rem] p-3 text-[#333333] text-[14px]'>
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
                <div className='flex items-center ml-auto max-sm:hidden'>
                    <ul className='flex'>
                        {
                            navs.map(
                                (nav, index) => {
                                    return (<li key={index} className='text-[#333333] uppercase font-bold tracking-[1px] px-[25px] py-[15px] hover:text-[#983eee] duration-300'>
                                        <a className='' href={nav.link}>{nav.name}</a>
                                    </li>)
                                }
                            )
                        }
                    </ul>
                </div>
                <div className='items-center ml-auto invisible max-sm:visible'>
                    <img id="menu" src={IoMdMenu} onClick={menu} alt="Menu" />
                    <img id="close" src={IoMdClose} onClick={close} className='hidden' alt="Close" />
                </div>
            </div>
            <div id='menubar' className='bg-white w-full shadow-b-[0_10px_100px_rgba(0,0,0,0.1)] absolute hidden'>
                <div>
                    <ul className='border-t-[1px] border-solid border-[#eee]'>
                        {
                            navs.map(
                                (nav, index) => {
                                    return (<li key={index} className=''>
                                        <a onClick={close} className='block text-[13px] text-[#333333] uppercase font-bold tracking-[2px] px-[30px] py-[20px] hover:text-[#983eee] duration-300 text-right border-b-[1px] border-solid border-[#eee]' href={nav.link}>{nav.name}</a>
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

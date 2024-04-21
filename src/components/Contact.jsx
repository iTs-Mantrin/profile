import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_msw6dkw', 'template_y2fkb9p', form.current, {
            publicKey: 'XpV91IZV1uDHqlpax',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    document.getElementById("success").innerHTML = "Message sent successfully...";
                    document.getElementById("myForm").reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Something was wrong, message sent unsucces...")
                },
            );
    };

    
  return (
    <section id='contact' className='bg-[#fafafa] py-[6rem] max-sm:py-10'>
        <div className='max-w-[120rem] w-[92%] m-auto'>
            <div className='text-center mb-[4rem] max-sm:mb-5'>
                <h2 className='text-[35px] uppercase font-bold tracking-[1px] pb-[4rem] max-sm:text-[30px] max-sm:pb-3'>Contact</h2>
                <p className='text-center text-[20px] text-[#555555] max-w-[80rem] w-[80%] m-auto max-sm:text-[16px] max-sm:w-full'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
                <div className='bg-white p-[4rem] max-sm:p-5 max-w-[80rem] w-[70%] max-sm:w-full mt-[5rem] max-sm:mt-10 mb-0 mx-auto shadow-[0_7px_29px_0_rgba(100,100,111,.2)] rounded'>
                    <form id='myForm' name='contact-form' ref={form} onSubmit={sendEmail}>
                        <div className='mb-[2rem]'>
                            <label htmlFor="name" className='text-[#666666] tracking-[1px] font-bold mb-[.5rem] block text-left'>Name</label>
                            <input id='user_name' className='text-[#999999] text-[15px] opacity-100 font-semibold p-[1rem] w-[100%] bg-[#f0f0f0] rounded' required='' placeholder='Enter Your Name' name='user_name' type="text" />
                        </div>
                        <div className='mb-[2rem]'>
                            <label htmlFor="email" className='text-[#666666] tracking-[1px] font-bold mb-[1rem] block text-left'>Email</label>
                            <input  id='user_email' className='text-[#999999] text-[15px] opacity-100 font-semibold p-[1rem] w-[100%] bg-[#f0f0f0] rounded' required='' placeholder='Enter Your Email' name='user_email' type="email" />
                        </div>
                        <div className='mb-[2rem]'>
                            <label htmlFor="phone" className='text-[#666666] tracking-[1px] font-bold mb-[1rem] block text-left' >Phone Number</label>
                            <input id='user_phone' className='text-[#999999] text-[15px] opacity-100 font-semibold p-[1rem] w-[100%] bg-[#f0f0f0] rounded' required='' placeholder='Enter Your Phone Number' name='user_phone' type="text" />
                        </div>
                        <div className='mb-[1rem]'>
                            <label htmlFor="message" className='text-[#666666] tracking-[1px] font-bold mb-[1rem] block text-left' >Message</label>
                            <textarea name="message" id="message" className='text-[#999999] text-[15px] opacity-100 font-semibold p-[1rem] w-[100%] bg-[#f0f0f0] rounded' cols="30" rows="5" placeholder='Enter Your Message'></textarea>
                        </div>
                        <label id='success' htmlFor="message" className='max-sm:w-full text-[15px] max-sm:text-[10px] pl-[30px] max-sm:pl-3 max-sm:py-3 text-[#22bb33] tracking-[1px] font-bold block text-left' ></label>
                        <button type='submit' value="Send" className='max-sm:w-full text-[15px] text-[#fff] bg-[#7843e9] uppercase font-bold py-[15px] px-[60px] rounded tracking-[1px] shadow-[0_5px_15px_0_rgba(0, 0, 0, .15)] hover:translate-y-[-3px] duration-300'>Submit</button>
                    </form>
                </div>

            </div>
        </div>

    </section>
  )
}

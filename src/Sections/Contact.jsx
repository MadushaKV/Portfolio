import React, { useRef } from "react";
import emailjs from '@emailjs/browser'; // 1. Import emailjs
import { AboutMe } from "../Utils/data";
import ContactCard from "../Components/ContactCard";

import { IoMdMail } from "react-icons/io";
import { MdOutlineWeb } from 'react-icons/md';
import { IoPhonePortraitOutline} from 'react-icons/io5';

const Contact = () => {
    // 2. Create a ref to attach to the form element
    const form = useRef();

    // 3. Create the function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault(); // Prevents default form submission

        
        const SERVICE_ID = "service_6sty0fq"; 
        const TEMPLATE_ID = "template_uydyqri";
        const PUBLIC_KEY = "QmMC6IRpZ1gAvDW_u";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                //alert('Message Sent! Thank you for contacting me.'); // User feedback
                e.target.reset(); // Clear the form after success
            }, (error) => {
                console.error('Email failed to send...', error.text);
                //alert('Failed to send message. Please try again later.'); // User feedback
            });
    };

    return (
        <section id="contact">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">
                        Contact
                    </h4>
                    <p className="text-sm text-center mt-4 leading-6">
                        A versatile developer with hands on expertise in modern
                        technologies, tools, and frameworks, dedicated to builing
                        efficient, scalable, and user centric solution.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                    <div>
                        <ContactCard icon={<IoMdMail />} text={AboutMe.email} />
                        <ContactCard icon={<IoPhonePortraitOutline />} text={AboutMe.phone} />
                        <ContactCard icon={<MdOutlineWeb />} text={AboutMe.webSite} />
                        <div className="flex justify-center items-center gap-4 mt-6">
                            {AboutMe.socialLinks.map((item) => (
                                <a key={item.id} href={item.link} className="cursor-pointer group" >
                                    <item.icon className="text-2xl text-[#b56141] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-[#f6a64f]" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        {/* <h5 className="md:hidden text-[#b56141] text-lg font-medium mt-4 pb-5">Contact Form</h5> */}
                        
                        {/* 4. Attach the ref and the onSubmit handler to the form */}
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col"> 
                            {/* NOTE: The 'name' attributes (fullname, email, message) MUST match the variables in your EmailJS template! */}
                            <input type="text" name="fullname" placeholder="Full Name" id="fullname" className="input-box" autoComplete="off" required />
                            <input type="email" name="email" placeholder="Email" id="email" className="input-box" autoComplete="off" required />
                            <textarea name="message" placeholder="Message" rows={3} id="message" className="input-box" autoComplete="off" required />
                            <button className="action-btn btn-scale-anim" type="submit">Submit</button> 
                            {/* 5. Added type="submit" to the button for clarity */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
// import React from "react";

// import ProfilePicture from "../assets/Images/about.png";
// import {AboutMe} from "../Utils/data";

// const About = () => {
//     return (
//         <section id="about" className="container mx-auto px-auto py-16">
//             <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
//                 About Me
//             </h4>
//             <div className="flex flex-col lg:flex-row items-start gap-16 justify-between">
//                 <div className="w-[300px] mb:w-[370px] h-[350px] mb:h-[428px] bg-orange-100/50 rounded-3xl mx-auto ">
//                     <img src={ProfilePicture} alt="Profile Picture" className="profile-pic"/>
//                 </div>

//                 <div className="flex-1">
//                     <h4 className="hidden lg:block w-[200px] section-title text-left">About Me</h4>

//                     <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4"> 
//                         {AboutMe.content}
//                     </p>

//                     <div className="flex gap-4 mt-6">
//                         {AboutMe.socialLinks.map((item) => (
//                             <a key={item.id} href={item.link} className="cursor-pointer group" >
//                                 <item.icon className="text-2xl text-[#b56141] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-[#f6a64f]" />
//                             </a>
//                         ))}
//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }
// export default About;
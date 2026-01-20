import React from "react";

import ProfilePicture from "../assets/Images/profile.png";
import React1 from "../assets/Images/react.png";
import Html from "../assets/Images/html.png";
import NodeJS from "../assets/Images/node js.png";
import Angular from "../assets/Images/angular.png";

import {STATS} from "../Utils/data";
import StatInfoCard from "../Components/StatInfoCard";

// Import at the top of your file
import cvFile from '../assets/ICT 22 862_LGM Kavinda_Multimedia Technology.pdf';

const Hero = () => {
    return (
        <section id="hero" className="container mx-auto px-8">

            <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
                <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
                    <h3 className="text-xl lg:text-2xl font-medium text-black">👋Hi, I'm Madusha Kavinda</h3>
                    <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-[linear-gradient(to_right,#f6a64f,#b56141)] bg-clip-text text-transparent">Building Scalable & User Centric web Apps.</h1>

                    <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
                        Passionate Full-Stack Developer and Machine Learning enthusiast currently pursuing my undergraduate degree. 
                        I specialize in building scalable web applications using Angular and Express.
                        js, while exploring the intersection of data science and modern software engineering to solve real-world problems.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                        <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">View my Works</button>
                        <button 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = cvFile;
                                link.download = 'ICT 22 862_LGM Kavinda_Multimedia Technology.pdf';
                                link.click();
                            }}
                            className="flex-1 md:flex-none action-btn btn-scale-anim"
                            >
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
                        <img src={ProfilePicture} alt="Profile image" className="profile-pic" />

                        <img src={React1}  alt="React JS" className="icon-img -left-10 bottom-20 rorate-[1.75deg]" />
                        <img src={Html}  alt="Html" className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]"/>
                        <img src={NodeJS}  alt="Node JS" className="icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]"/>
                        <img src={Angular}  alt="Angular" className="icon-img left-[220px] md:left-[245px] -bottom-9 md:bottum-10 rotate-[4.75deg]"/>
                </div>

            </div>

            <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((item) => (
                    <StatInfoCard key={item.id} count={item.count} label={item.label} />
                )
                )}
            </div>

        </section>
    );  
}

export default Hero;
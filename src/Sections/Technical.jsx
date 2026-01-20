import React from "react";
import {SKILLS_TAB} from "../Utils/data";

import Tabs from "../Components/Tabs";
import {SKILLS} from "../Utils/data";
import SkillCard from "../Components/SkillCard";

import {motion} from "framer-motion";

const Technical = () => {
    const [tabData, setTabData] = React.useState(SKILLS);
    const [activeTab, setActiveTab] = React.useState("all");

    const handleTabChange = (tab) => {
        if(tab === "all"){
            setTabData(SKILLS);
            setActiveTab("all");
            return;
        }
        const updatedList = SKILLS.filter((skill) => skill.type === tab);
        setTabData(updatedList);
        setActiveTab(tab);
    }

    return (
        <section id="skills" className="bg-[#fffcf8]">       
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">
                        Technical Proficiency
                    </h4>

                    <p className="text-sm text-center mt-4 leading-6">
                        A versatile developer with hands-on expertice in modern technologies, tools and frameworks, dedicated to building
                        efficient, scalable, and user centric solutions.
                    </p>

                </div>

                <Tabs
                    tabList={SKILLS_TAB}
                    activeTab={activeTab}
                    onChange={handleTabChange}
                 />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
                    {tabData.map((skill, index) => (
                        <motion.div key={skill.id} className="" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: index * 0.1}}>
                            <div key={skill.id}>
                                <SkillCard icon={<skill.icon  className="w-6 h-6 text-[#f6a64f]" />}                           
                                skillName={skill.skills}
                                description={skill.description} 
                                progress={skill.progress} 
                                />  
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
export default Technical;
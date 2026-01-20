import React from "react";

import {motion} from "framer-motion";

const Tabs = ({tabList, activeTab, onChange}) => {
    const getActiveStyles = (value) => {
        return activeTab === value ? "bg-[#b56141] text-white" : "text-[#b56141] bg-transparent";
    };
    return (
        <div className="flex items-center justify-center my-10"> 
            <div className="bg-[#fff6eb] rounded-full flex" >

                {tabList.map((tab)=> (
                    <motion.button key={tab.id}
                    className={`text-xs md:text-[15px] ${getActiveStyles(tab.value)} rounded-full px-4 md:px-10 py-[6px] md:py-3`}
                    onClick={() => onChange(tab.value)}
                    initial={{opacity: activeTab === tab.value ? 1 : 0.8, scale: activeTab === tab.value ? 1.1 : 1}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: tab.id * 0.1}}
                    >
                        {tab.label}
                    </motion.button>
                ))}

            </div>
        </div>
    );
}

export default Tabs
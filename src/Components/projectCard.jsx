import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id ,imgURL, title, tags }) => {
    return (
        <div className="h-full">
            <Link to={`/project/${id}`} rel="noopener noreferrer">
                <div className="h-full bg-white rounded-xl overflow-hidden shaddow-mg mx-2 ">
                    <img src={imgURL} alt="Project image" className="w-full h-72 md:h-80 object-cover" />
                    <div className="px-4 py-5">
                        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                            {title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="text-xs text-[#b56141] bg-orange-100 px-3 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
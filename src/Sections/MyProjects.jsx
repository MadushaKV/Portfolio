import React, {useEffect, useState, useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward } from "react-icons/io";

import { PROJECTS } from "../Utils/data";
import ProjectCard from "../Components/projectCard";
import { use } from "react";

const MyProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollButton = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());

    }, [emblaApi]);

    useEffect(() => {
        if(!emblaApi) return;
        emblaApi.on("select", updateScrollButton);
        updateScrollButton();
    }, [emblaApi, updateScrollButton]);
    return (
        <section id="projects" className="bg-[#fffcf8] mt-14">
            <div className="container mx--auto px-8 md:px-18 py-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">Recent Projects</h4>
                    <p className="text-sm text-center mt-4 leading-6">
                        From concept to deployment, these project showcase my technical experiance.
                        I focus on clean code, performance and user experiance.
                    </p>
                </div>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex pt-14 pb-8">
                            {PROJECTS.map((project) => (
                                <div key={project.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]">
                                    <ProjectCard key={project.id} imgURL={project.imgURL} title={project.title} tags={project.tags} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Scroll buttons */}
                    <button className={`arrow-button -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => emblaApi && emblaApi.scrollPrev()} disabled={!canScrollPrev}>
                        <IoIosArrowForward className="rotate-180" />
                    </button>

                    <button className={`arrow-button -right-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => emblaApi && emblaApi.scrollNext()} disabled={!canScrollPrev}>
                        <IoIosArrowForward />
                    </button>

                </div>

            </div>
        </section>
    );

}

export default MyProjects;
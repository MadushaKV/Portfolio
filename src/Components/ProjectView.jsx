import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECT } from "../Utils/data";
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

function ProjectView() {
  const { id } = useParams();
  
  // 1. Find project and handle the String vs Number issue
  const project = PROJECT.find((p) => p.id === Number(id));

  // 2. Carousel Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-800">Project Not Found</h1>
        <Link to="/" className="mt-4 text-orange-600 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 md:px-18 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Conditional GitHub Button */}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-[#e0dddd] text-[#000000] px-6 py-2 rounded-full font-semibold hover:bg-[#000000] hover:text-white transition-all">
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </a>
          )}

          {/* Conditional Kaggle Button */}
          {project.kaggle && (
            <a href={project.kaggle} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-all">
              <SiKaggle className="text-xl" />
              <span>View on Kaggle</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl">{project.desc}</p>

      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
            <div className="flex">
              {project.images.map((img, index) => (
                <div key={index} className="min-w-full lg:min-w-[50%] p-2">
                  <img src={img} alt="Screenshot" className="w-full h-72 md:h-[500px] object-cover rounded-xl" />
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg disabled:opacity-30">
            <IoIosArrowBack size={24} />
          </button>
          
          <button onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg disabled:opacity-30">
            <IoIosArrowForward size={24} />
          </button>
        </div>
      )}

      {/* Features & Tech Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-[#b56141] pl-4">Key Features</h3>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#b56141] mt-1">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 border-l-4 border-[#b56141] pl-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-md text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
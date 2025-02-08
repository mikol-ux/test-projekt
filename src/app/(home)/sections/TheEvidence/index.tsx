
"use client";

import React, { useState } from "react";
import venue from "../../../../../public/img/home/venue.png"
import Image from "next/image";

const VisionList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      number: "01",
      title: "The Projekt",
      tags: ["2024", "UI/UX", "Branding"],
    },
    {
      number: "02",
      title: "Designing Narratives",
      tags: ["2024", "UI/UX", "Branding"],
    },
    {
      number: "03",
      title: "Protokol",
      tags: ["2024", "UI/UX", "Branding"],
    },
    {
      number: "04",
      title: "Build with the public",
      tags: ["2024", "UI/UX", "Branding"],
    },
    {
      number: "05",
      title: "Conduit",
      tags: ["2024", "UI/UX", "Branding"],
    },
  ];

  return (
    <section className="tpk-contained">
      <div className=" flex flex-col justify-center items-center text-white p-8">
        <div className="flex basis-full w-full   justify-center">
          <Image
				src={venue} // Path to the image in the public folder
				alt="Example Image"
				// width={600} // Required
				// height={800} // Required
				className="rounded-lg object-cover  w-full" 
			/>
        </div>
		
		<div className=" flex flex-col md:flex-row justify-between mt-10 items-start">
			<h1 className="md:w-1/2 text-4xl text-start font-normal mb-24">Innovative Solutions That <br/> Scale Seamlessly With <br /> Your Vision</h1>
			<p className="md:w-1/2 text-xl font-normal ps-10 mb-3 text-muted-4 ">Whether you’re launching or scaling, we handle the heavy lifting for small businesses and tech founders. Remote hiring, custom tools, and seamless execution—your success is priority.</p>
		</div>


        <div className="w-full lg:p-20 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
					absolute inset-0 transition-all duration-500 ease-in-out rounded-xl
					${
            hoveredIndex === index
              ? "bg-gradient-to-r from-sky-900/50 to-sky-600/30"
              : "bg-transparent"
          }
				`}
              />

              <div className="flex items-center p-8 border-b border-gray-800 relative  border-none rounded-lg  before:absolute before:inset-0 before:p-[1px] before:rounded-lg before:bg-bg-gradient-dir
		before:from-pitch-dark-blue before:from-10% before:via-deep-blue before:via-30% before:to-sky-blue
		before:to-90% before:-z-[1] before:mask-content-box before:mask-composite-exclude      hover:bg-bg-gradient-dir
		hover:from-pitch-dark-blue hover:from-40% hover:via-deep-blue hover:via-100% hover:to-sky-blue
		hover:to-100%">
                <span
                      className={`
						text-2xl font-light w-20
						${
              hoveredIndex === index
                ? "text-sky-blue"
                : "text-white"
            }
						transition-all duration-300
						`}
				>{item.number}</span>
                <span
                      className={`
						text-2xl font-light flex-grow
						${
              hoveredIndex === index
                ? "text-sky-blue"
                : "text-white"
            }
						transition-all duration-300
						`}
				>
                  {item.title}
                </span>
                <div className="flex gap-3">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`
						px-3 py-1 rounded-full text-sm border
						${
              hoveredIndex === index
                ? "border-white text-white"
                : "border-muted text-muted"
            }
						transition-all duration-300
						`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionList;

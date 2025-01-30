import { FC } from "react";
import GradientCircle from "../../../../../../components/circles/GradientCircle"; // Adjust the path as necessary

const Innovation: FC = () => {
  const highlights = ["INNOVATION", "CREATIVITY", "RELENTLESS FOCUS", "INNOVATION"];

  return (
    <section className="tpk-contained text-center py-16 px-6">
      <h1 className="text-4xl tpk-text-white sm:text-5xl">
        BUILT FROM GRIT,
        <br />
        <span className="text-deep-blue">FUELED BY PASSION</span>
      </h1>
      {/* Description Section */}
      <p className="mt-6 text-lg tpk-text-muted max-w-3xl mx-auto">
        The Projekt began with a simple mission:{" "}
        <span className="font-semibold tpk-text-white">
          to help founders who felt stuck in their journeys
        </span>
        . Inspired by personal growth, pivotal losses, and transformative
        moments, we sought to build not just products but partnerships.
      </p>
      {/* Highlight Circles */}
      <div className="relative py-16 flex justify-center items-center space-x-[-25px]">
        {highlights.map((text, index) => (
          <GradientCircle key={index} text={text} />
        ))}

        <div className="bottom-[40px]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 absolute h-[220px] w-[1150px] ">

         </div>
         <div className="drop-shadow-2xl flex justify-around items-center bottom-[145px]  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 absolute h-[120px] w-[1100px] ">
              <div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-blue-200 ml-10 text-sm">INOVATION</p></div>
              <div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-blue-200 ml-6 text-sm">CREATIVITY</p></div>
              <div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-blue-200 ml-2 text-sm">RELENTLESS FOCUS</p></div>
              <div className="flex justify-center items-center h-[100px] w-[200px] "><p className="text-blue-200 text-sm">INOVATION</p></div>
         </div>

      </div>

    </section>
  );
};

export default Innovation;
import HighLightBtn from "@/components/Buttons/HighLightBtn";
import { FC } from "react";

const OriginsPage: FC = () => {
  return (
    <section className="flex flex-col gap-4 tpk-contained">
      <div className="flex flex-col items-start pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 2xl:pt-48 ml-2 sm:ml-4 md:ml-4 lg:ml-8 xl:ml-12 2xl:ml-16">
        <div className="text-left max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div>
            {/* "OUR" Text */}
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] 2xl:text-[150px] mt-16 md:mt-12 lg:mt-4 xl:mt-1 2xl:mt-2">
              OUR
            </div>
            {/* "ORIGINS" Text */}
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[100px] 2xl:text-[150px]">
              ORIGINS
            </div>
          </div>
          {/* Subheading */}
          <h2 className="text-2xl mt-4 sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light mb-6 sm:mb-6 md:mb-6 lg:mb-4 xl:mb-6 2xl:mb-6">
            TURNING DREAMS INTO REALITY
          </h2>
          {/* Paragraph */}
          <p className="text-[#B3B3B3] text-xl md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl mt-4 mb-12 sm:mb-12 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-20 xl:mt-4 2xl:mt-14">
            We exist to help businesses transition seamlessly into{" "}
            <br className="hidden sm:block" />
            the digital era by creating tools, brands, and teams that{" "}
            <br className="hidden sm:block" />
            redefine what&apos;s possible.
          </p>
          {/* Button */}
          <HighLightBtn href="/about-us" className="tpk-text-md mt-4 uppercase">The Projekt Story</HighLightBtn>
        </div>
      </div>
    </section>
  );
};

export default OriginsPage;
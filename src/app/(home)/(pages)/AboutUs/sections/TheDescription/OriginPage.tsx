import { FC } from "react";

const OriginsPage: FC = () => {
  return (
    <section className="flex flex-col gap-4 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24 tpk-contained">
      <div className="flex flex-col items-start pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-40 2xl:pt-48 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-24">
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
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light mb-3 sm:mb-3 md:mb-3 lg:mb-2 xl:mb-3 2xl:mb-3">
            TURNING DREAMS INTO REALITY
          </h2>
          {/* Paragraph */}
          <p className="text-neutral-400 text-xl md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl mt-4 mb-4 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-10 2xl:mb-12 xl:mt-4 2xl:mt-14">
            We exist to help businesses transition seamlessly into{" "}
            <br className="hidden sm:block" />
            the digital era by creating tools, brands, and teams that{" "}
            <br className="hidden sm:block" />
            redefine what&apos;s possible.
          </p>
          {/* Button */}
          <a
            href="#"
            className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-8 lg:py-3 xl:px-12 xl:py-5 2xl:px-14 2xl:py-6 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black text-base sm:text-lg md:text-lg lg:text-lg xl:text-3xl 2xl:text-4xl"
          >
            THE PROJEKT STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default OriginsPage;
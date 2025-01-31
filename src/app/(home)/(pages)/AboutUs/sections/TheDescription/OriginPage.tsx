import { FC } from "react";

const OriginsPage: FC = () => {
  return (
    <section className="flex flex-col gap-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 tpk-contained">
      <div className="flex flex-col items-start pt-20 sm:pt-40 md:pt-60 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
        <div className="text-left max-w-4xl px-4 sm:px-6 md:px-8">
          <div>
            {/* "OUR" Text */}
            <div className="text-6xl sm:text-7xl md:text-8xl mt-20 lg:text-9xl xl:text-[150px] mb-4">
              OUR
            </div>
            {/* "ORIGINS" Text */}
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] mb-4">
              ORIGINS
            </div>
          </div>
          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
            TURNING DREAMS INTO REALITY
          </h2>
          {/* Paragraph */}
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            We exist to help businesses transition seamlessly into <br className="hidden sm:block" />
            the digital era by creating tools, brands, and teams that <br className="hidden sm:block" />
            redefine what&apos;s possible.
          </p>
          {/* Button */}
          <a
            href="#"
            className="px-6 py-2 sm:px-8 sm:py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black"
          >
            THE PROJEKT STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default OriginsPage;
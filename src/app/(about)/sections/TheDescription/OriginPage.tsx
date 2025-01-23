import { FC } from "react";

const OriginsPage: FC = () => {

  return (
    <section className="flex flex-col gap-8 ml-12 tpk-contained">
      <div className="flex flex-col items-start pt-60 ml-4">
        <div className="text-left max-w-4xl px-6">
          <div>
            <div className="text-6xl md:text-8xl mb-4">OUR</div>
            <div className="text-6xl md:text-8xl mb-4">ORIGINS</div>
          </div>
          <h2 className="text-xl md:text-2xl font-light mb-6">
            TURNING DREAMS INTO REALITY
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            We exist to help businesses transition seamlessly into <br /> 
            the digital era by creating tools, brands, and teams that <br />
            redefine what&apos;s possible.
          </p>
          <a href="#" className={`px-8 py-3 border rounded-lg transition duration-300 ease-in-out text-white bg-black hover:bg-white hover:text-black`}>
            THE PROJEKT STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default OriginsPage;
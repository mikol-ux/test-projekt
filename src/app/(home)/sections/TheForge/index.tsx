import React from "react";
import Image from "next/image";
import hoodie from "../../../../../public/img/home/Person in Red Hoodie Coding copy 1.png";
import Link from "next/link";
import GradientBtn from "@/components/Buttons/GradientBtn";
const ForgeSection = () => {
  return (
    <section className="bg-[url(/img/home/theforge.png)] bg-cover bg-no-repeat bg-center w-full min-h-screen border border-red-600">
      <div className="relative flex items-center justify-center mt-[60vh] mb-[15vh] tpk-contained border border-emerald-500">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full relative">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-[100px] 2xl:text-[170px] font-normal text-white">
              THE FORGE
            </h2>
            <span className="uppercase tpk-text-sm text-black dark:text-white">
              community Channel
            </span>
          </div>
          <div className="flex flex-col  lg:flex-row justify-between items-center">
            <div className="2xl:basis-1/2 relative mb-8 md:mb-0">
              <p className="text-center md:text-left tpk-text-lg mb-8 md:mb-0">
                JOIN THE PRIVATE NETWORK FOR DREAMERS TURNED HIGH-PERFORMING
                UPCOMING FOUNDERS.
              </p>

              <GradientBtn
                href="/"
                className="mt-12 inline-flex align-middle m-auto"
                isAnimated={true}
              >
                JOIN THE PROJEKT
              </GradientBtn>
            </div>

            {/* Community Channel Section */}
            <div className="2xl:basis-1/2 p-4 backdrop-blur-[60px] rounded-lg flex w-full flex-col md:flex-row">
              <p className="mb-4 md:mb-0 tpk-text-sm font-light mt-2 basis-1/2 dark:text-white text-black ">
                A private network for dreamers who become high-performing
                founders. Applicants face a tough interview process, leading to
                an acceptance rate under 10%. This guarantees that only
                committed individuals join The Forge, enhancing connections and
                experiences.
              </p>

              <div className="mt-4 basis-1/2">
                <Image
                  src={hoodie}
                  alt="Community Channel"
                  //   width={288}
                  //   height={221}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;

import GradientBtn from "@/components/Buttons/GradientBtn";

interface TheServiceProps {}

const TheService: React.FC<TheServiceProps> = () => {
  const options: string[] = [
    "(A) FULL-SERVICE WEB & CYBER SECURITY DEVELOPMENT COMPANY",
    "(B) UX/UI DESIGNERS AND BRAND STRATEGISTS",
    "(C) COMMUNITY OF DREAMERS TURNED ENTREPRENEURS",
    "(D) MULTIMEDIA CREATIVE STUDIO",
    "(E) WE ARE TALENT ACQUISITION SPECIALISTS - THE WATCHMEN",
  ];

  return (
    <section className="flex flex-col items-center justify-center tpk-contained">
      <div className="flex flex-col md:flex-row justify-start gap-10 md:gap-0">
        <div className="md:basis-3/12 flex flex-row items-start justify-start gap-3">
          <h4 className="text-black dark:text-muted-5 tpk-text-md font-normal uppercase md:mt-4">
            Who Are We
          </h4>
        </div>
        <div className="md:basis-9/12 flex flex-col gap-6">
          <h2 className="text-black dark:text-white text-start tpk-text-2xl leading-relaxed font-normal uppercase">
            WE ARE A WEB DEVELOPMENT & CYBER SECURITY AGENCY
          </h2>
          <p className="text-muted-4 dark:text-muted text-start tpk-text-lg">
            At The Projekt, we know what it&apos;s like to take big risks
            without having a huge budget and clarity. That&apos;s why we created
            the Foundation Program—designed for the dreamers, misfits, and
            rebels who are too busy chasing something bigger. It&apos;s not just
            about launching your business; it&apos;s about growing to the point
            where you&apos;re turning clients away because you&apos;re in such
            high demand.
          </p>
        </div>
      </div>
      {/* Options */}
      <div className="mt-8 w-full flex flex-col justify-center items-center tpk-contained">
        <ul className="grid grid-rows-5 w-full ">
          {options.map((option, index) => (
            <li
              key={index}
              className={`group bg-linear-to-r from-pitch-dark-blue from-[-4.81%] via-deep-blue via-[27%] to-sky-blue to-100% p-[1px] transition-all duration-1000 ease-in-out hover:p-0 w-full md:w-[90%] md:hover:w-[93%] hover:bg-none rounded-lg md:mx-auto `}
            >
              <div
                key={index}
                className="group relative w-full h-full ps-4 md:ps-0 py-4 lg:py-5 xl:py-7 2xl:py-10 
                    rounded-lg cursor-pointer 
                    transition-all duration-1000 ease-in-out 
                    overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-10 
                    tpk-text-lg font-light 
                    bg-black text-gray-300 hover:text-white hover:border-none 
                     before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-black before:to-[#438DB5] before:z-0 
                    before:transition-opacity before:duration-1000 before:opacity-0 
                    hover:before:opacity-100"
              >
                <span className="relative z-10 basis-1/4 flex md:items-center justify-between gap-1 text-black dark:text-white uppercase transition-opacity duration-1000 ease-in-out px-2 md:px-8 lg:px-16 opacity-0 group-hover:opacity-100">
                  <span className="">
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 10.1639V11.8361C22.5 12.0229 22.348 12.1749 22.1612 12.1793C19.7505 12.2618 17.5701 13.2043 15.9109 14.7246C15.8544 14.7724 15.7979 14.8245 15.7458 14.8766C15.698 14.92 15.6502 14.9635 15.6068 15.0113C15.5764 15.0417 15.546 15.0721 15.5113 15.1068C15.4678 15.1502 15.4244 15.198 15.3766 15.2458C13.7738 16.9224 12.7661 19.168 12.6793 21.6612C12.6749 21.848 12.5229 22 12.3361 22H10.6639C10.4771 22 10.3251 21.848 10.3207 21.6612C10.2425 19.2592 9.29566 17.0831 7.78845 15.4239C7.6842 15.3066 7.57562 15.1937 7.46703 15.0851C7.44965 15.0677 7.43662 15.0547 7.41925 15.0373C7.31066 14.9287 7.19339 14.8201 7.08045 14.7159C7.01965 14.6638 6.96318 14.6116 6.90237 14.5639C5.26486 13.1435 3.15824 12.2618 0.834452 12.1836C0.64768 12.1793 0.5 12.0316 0.5 11.8448V10.1682C0.5 9.98144 0.652024 9.82942 0.838796 9.82507C3.32764 9.7382 5.57759 8.7305 7.25419 7.12774C9.22616 5.07759 10.2382 2.83198 10.3207 0.343139C10.3251 0.152024 10.4771 0 10.6639 0H12.3361C12.5229 0 12.6749 0.152024 12.6793 0.338796C12.7661 2.82764 13.7695 5.0689 15.3679 6.74551C17.7178 8.85212 19.8331 9.7382 22.1612 9.81639C22.348 9.82073 22.4957 9.96841 22.4957 10.1552L22.5 10.1639Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  WE ARE
                </span>

                {/* The Option Text (Always visible) */}
                <span className="relative z-10 text-sky-blue">
                  {option.toUpperCase()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="block w-full mt-28 text-center">
        <GradientBtn href="/AboutUs" className="tpk-text-md">
          I Want The Full Story
        </GradientBtn>
      </div>
    </section>
  );
};

export default TheService;
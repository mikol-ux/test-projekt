"use client"; // Ensure it runs only on the client side

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface LottieAnimationProps {
  animationData: any; // JSON animation data
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = "w-full h-[300px] flex justify-center items-center",
}: LottieAnimationProps) {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={loop} autoPlay={autoplay} />
    </div>
  );
}

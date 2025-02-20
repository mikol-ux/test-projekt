"use client";
import { FC } from "react";
import Lottie from "react-lottie-player";

interface LottieData {
  json: any; // Changed from string to any (should be a JSON object)
  play: boolean;
  className?: string; // Made className optional
}

const LottieAni: FC<LottieData> = ({ json, play, className = "" }) => {
  return <Lottie animationData={json} play={play} className={className} />;
};

export default LottieAni;

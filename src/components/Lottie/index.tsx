"use client";
import { FC } from "react";
import Lottie from "react-lottie-player";

interface LottieData {
  json: object; // JSON object, not AnimationItem
  play: boolean;
  className?: string;
}

const LottieAni: FC<LottieData> = ({ json, play, className = "" }) => {
  return <Lottie animationData={json} play={play} className={className} />;
};

export default LottieAni;

"use client";

import React from "react";
import LottieAni from "@/components/Lottie";
import GradientBtn from "@/components/Buttons/GradientBtn";

// Import JSON animations directly
import DashboardAnimation from "../../../../../public/json/home/Create Dashboard.json";
import LoadingAnimation from "../../../../../public/json/home/Loading.json";
import ShareAnimation from "../../../../../public/json/home/Share.json";
import SecurityAnimation from "../../../../../public/json/home/Cyber Security.json";
import QualityAnimation from "../../../../../public/json/home/Brick Wall.json";
import FileSharingAnimation from "../../../../../public/json/home/File Sharing.json";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DashboardAnimation,
      title: "DASHBOARD",
      description:
        "Track and manage your projects efficiently with maximum impact and minimal risk from one place.",
    },
    {
      icon: LoadingAnimation,
      title: "MARKET READY",
      description: "Market-ready identity that attracts your audience.",
    },
    {
      icon: ShareAnimation,
      title: "CONNECT",
      description:
        "Learn from and connect with other founders and share your experiences.",
    },
    {
      icon: SecurityAnimation,
      title: "SECURE",
      description:
        "We comply with security protocols (CIA) throughout the cycle of development.",
    },
    {
      icon: QualityAnimation,
      title: "TOP NOTCH QUALITY",
      description:
        "Get high-quality premium results with web, software, media for your business.",
    },
    {
      icon: FileSharingAnimation,
      title: "SYNCHRONOUS",
      description:
        "We love meetings as essential moments to connect and brainstorm as a team.",
    },
  ];

  return (
    <section className="tpk-contained bg-black text-white flex flex-col items-center gap-6 2xl:gap-14">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="tpk-text-2xl font-normal leading-tight text-black dark:text-white">
          BUILDING DREAMS, <br /> NAVIGATING THE UNKNOWN
        </h2>
        <p className="mt-4 tpk-text-lg font-light text-muted-4 dark:text-muted-5 md:w-4/6 xl:w-3/6">
          We exist to help founders launch & test demand for their idea(s)
          without investing large amounts of money with designers, devs, or
          manufacturers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start"
          >
            <div className="p-4 flex justify-between items-center gap-4">
              <LottieAni json={benefit.icon} className="w-10" play />
              <h6 className="text-sky-blue tpk-text-lg font-light">
                {benefit.title}
              </h6>
            </div>
            <div>
              <p className="text-black dark:text-white text-center md:text-start font-light tpk-text-md">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <GradientBtn
        href="/about"
        className="mt-14 inline-flex"
        isAnimated={true}
      >
        I WANT TO BEGIN MY PROJEKT
      </GradientBtn>
    </section>
  );
};

export default BenefitsSection;

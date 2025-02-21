"use client";

import React from "react";

import GradientBtn from "@/components/Buttons/GradientBtn";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "https://lottie.host/embed/d9ac638f-c2f5-4b06-94b9-86d96c0ffb4f/OmYOlekPlB.lottie",
      title: "DASHBOARD",
      description:
        "Track and manage your projects efficiently with maximum impact and minimal risk from one place.",
    },
    {
      icon: "https://lottie.host/embed/144250a8-97f3-4501-b444-d60053d59d53/f0DxkU7Nrq.lottie",
      title: "MARKET READY",
      description: "Market-ready identity that attracts your audience.",
    },
    {
      icon: "https://lottie.host/embed/fa1d5922-6b81-43c9-86ec-91d51932ceff/1ITkzJiyiI.lottie",
      title: "CONNECT",
      description:
        "Learn from and connect with other founders and share your experiences.",
    },
    {
      icon: "https://lottie.host/embed/d740f9d9-c68a-45c6-ab7a-9db5b281131b/giMXMLtwHS.lottie",
      title: "SECURE",
      description:
        "We comply with security protocols (CIA) throughout the cycle of development.",
    },
    {
      icon: "https://lottie.host/embed/0f5c8dad-c9eb-4e00-ab6b-5c5c7720aa59/fn3itoPebo.lottie",
      title: "TOP NOTCH QUALITY",
      description:
        "Get high-quality premium results with web, software, media for your business.",
    },
    {
      icon: "https://lottie.host/embed/0f5c8dad-c9eb-4e00-ab6b-5c5c7720aa59/fn3itoPebo.lottie",
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
              <iframe src={benefit.icon}></iframe>
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

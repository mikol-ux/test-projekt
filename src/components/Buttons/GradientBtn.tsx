"use client";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  isAnimated?: boolean;
}

const GradientBtn: FC<ButtonProps> = ({
  href,
  className,
  children,
  isAnimated,
}) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const btnStyle =
    "relative text-center py-4 px-6 text-white bg-black dark:bg-transparent border-none uppercase rounded-md z-[1]";
  const btnAfterStyle =
    "after:content-[''] after:absolute after:top-1 after:left-1 after:right-1 after:bottom-1 after:bg-transparent after:rounded-sm after:z-[2]";
  const btnBeforeStyle = `before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-md before:-z-[1] before:mask-content-box`;

  useGSAP(() => {
    if (isAnimated && btnRef.current) {
      const btn = btnRef.current;
      gsap.to(btn, {
        duration: 6,
        ease: "none",
        repeat: -1,
        yoyo: false,
        onUpdate: function () {
          btn.style.setProperty(
            "--tw-gradient-direction",
            `${this.progress() * 360}deg`
          );
        },
      });
      console.info("Btn animating...");
    }
  }, [isAnimated]);

  return (
    <Link
      href={href}
      ref={btnRef}
      style={{ "--tw-gradient-direction": "0deg" } as React.CSSProperties}
      className={`${btnStyle} ${btnBeforeStyle} ${btnAfterStyle} ${className} before:bg-gradient-dir before:from-pitch-dark-blue before:from-10% before:via-deep-blue before:via-30% before:to-sky-blue before:to-90%`}
    >
      {children}
    </Link>
  );
};

export default GradientBtn;

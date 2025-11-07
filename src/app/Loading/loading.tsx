"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Loader1() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".letter",
      { opacity: 0, y: 60, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      }
    )
      .to(".loader-bar", {
        width: "100%",
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      })
      .to(".loader", {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(".content", {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
  

      <div className="loader fixed top-0 left-0 w-full h-full  bg-gradient-to-br from-[#0f011c] via-[#120023] to-[#1b0232] flex flex-col items-center justify-center gap-8">
        <div className="flex gap-2">
          {"O_H_M".split("").map((char, i) => (
            <span
              key={i}
              className="letter text-7xl font-extrabold text-white tracking-widest inline-block"
            >
              {char}
            </span>
          ))}
        </div>
        <div className="loader-bar h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 w-0 rounded-full"></div>
      </div>
    </div>
  );
}

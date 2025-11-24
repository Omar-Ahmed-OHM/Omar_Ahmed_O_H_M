"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Work_Experience } from "@/app/types/home";
import Container from "../Container/container";

const Work = (props: Work_Experience) => {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Main card animation
      tl.from(cardRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        filter: "blur(6px)",
      })

      // Logo bounce
      .from(
        ".work-logo",
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )

      // Text stagger
      .from(
        ".work-text > *",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.5"
      )
      
      // Glow pulse
      .to(
        cardRef.current,
        {
          boxShadow: "0 0 30px rgba(132, 53, 240, 0.3)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        },
        "-=0.5"
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-4">
      <Container>
        <div
          ref={cardRef}
          className="
            p-4 flex flex-col sm:flex-row justify-center relative gap-6 sm:gap-10 items-center 
            border-[#4F228D] border-t-4 
            bg-gradient-to-br from-[#130428] via-[#251043] to-[#190634] 
            rounded-lg duration-300 
            w-full sm:w-[635px] mx-auto
          "
        >
          <div className="relative flex-shrink-0">
            <img
              src={props.Image}
              alt={props.Title}
              className="
                work-logo
                w-[100px] h-[90px] sm:w-[122px] sm:h-[110px] 
                object-cover mx-auto sm:mx-0
              "
            />
            <div className="absolute bg-[#2e093a] w-[120px] sm:w-[140px] bottom-[-10px] h-[20px] blur-md"></div>
          </div>

          <div className="description work-text text-center sm:text-left mt-4 sm:mt-0">
            <h3 className="text-[24px] sm:text-[32px] font-semibold">
              {props.Title}
            </h3>
            <p className="text-[10px] sm:text-[10px] font-[var(--font-popines)] w-full sm:w-[260px] mx-auto sm:mx-0">
              {props.Description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;

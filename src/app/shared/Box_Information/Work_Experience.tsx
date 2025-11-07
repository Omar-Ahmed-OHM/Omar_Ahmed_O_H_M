"use client";
import React from "react";
import { Work_Experience } from "@/app/types/home";
import Container from "../Container/container";

const Work = (props: Work_Experience) => {
  return (
    <section className="py-4">
      <Container>
        <div
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
                w-[100px] h-[90px] sm:w-[122px] sm:h-[110px] 
                object-cover mx-auto sm:mx-0
              "
            />
            <div className="absolute bg-[#2e093a] w-[120px] sm:w-[140px] bottom-[-10px] h-[20px] blur-md"></div>
          </div>

          <div className="description text-center sm:text-left mt-4 sm:mt-0">
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

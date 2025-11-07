"use client";
import Image from "next/image";
import Container from "./shared/Container/container";
import ME from "../../public/assets/image/ME.jpg";
import Ellips from "../../public/assets/image/Ellipse 5.png";
import Direction from "../../public/assets/image/Vector.svg";
import textjson from "../../src/app/text/text.json";
import { Facebook } from "lucide-react";
import Work from "./shared/Box_Information/Work_Experience";
import languages from "../../public/assets/image/Skills (1).svg";
import Projects from "./shared/Projects/project";
import Link from "next/link";
import Loader1 from "./Loading/loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [loader,setloader]=useState<boolean>(true);
  useEffect(()=>{
    setTimeout(()=>{
      setloader(false);
    },4000)
  },[])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f011c] via-[#120023] to-[#1b0232] overflow-x-hidden">
      {loader ? <Loader1 /> : null}
      <div
  className={`transition-opacity duration-700 ${
    loader ? "opacity-0" : "opacity-100"
  }`}
>

     {
      !loader &&
      <Container>
        {/* Header */}
        <div className="flex justify-center items-center gap-16 mr-28 max-sm:flex-col max-sm:mr-0 max-sm:gap-6 text-center sm:text-left">
          <div className="pt-14 max-sm:pt-6">
            <Image src={Direction} alt="Your Name" width={78.34} height={47.82} />
          </div>
          <div>
            <p className="text-[14px] sm:text-[16px] md:text-[19px] pb-4">

              {textjson.greeting}{" "}
              <span className="text-[#7127BA]">{textjson.name}</span>
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-[100px] mt-20 max-sm:mt-10 max-sm:text-center">
          <div className="image">
            <Image
              src={ME}
              alt="Your Name"
              width={250}
              height={208}
              className="rounded-[81px] mx-auto"
            />
          </div>

          <div className="intro space-y-4 md:text-left">
            <p className="underline">{textjson.Frontend_Def}</p>
            <p className="text-[26px] sm:text-[35px] md:text-[50px] leading-tight">

              {textjson.tagline}
              <br />
              {textjson.Code_Def}
              <span className="inline-block px-8 py-2 ml-1 sm:px-12 relative text-[#7127BA]">
                {textjson.Story}
                <Image
                  src={Ellips}
                  alt="Your Name"
                  width={283}
                  height={275}
                  className="absolute top-3 left-1"
                />
              </span>
            </p>
            <p className="text-[10px] sm:text-[12px]">
{textjson.Positive}</p>
          </div>
        </div>

        {/* Definition */}
        <div className="definition mt-20 max-sm:mt-12">
          <h2 className="text-[28px] sm:text-[40px] md:text-[50px] text-center sm:text-left">

            {textjson.defintion["1"]}
          </h2>
          <br />
          <div className="text-[21px] w-full md:w-3/4 lg:w-3/4 flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center sm:justify-start text-center sm:text-left">
            <div>{textjson.defintion["2"]}</div>
            <div className="flex gap-2 items-center">
              <span className="text-[#1877F2]">
                <Image
                  src={textjson.defintion["5"]}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </span>
              <div className="text-[21px] text-[#1877F2]">
                <Link
                  href={"https://drive.google.com/file/d/1sHnK6wu_kjuQdkJaer_rFHvcf8gR9EFL/view?usp=drivesdk"}
                  target="_blank"
                >
                  {textjson.defintion["3"]}
                </Link>
              </div>
            </div>
          </div>

          <div className="information w-[892px] pr-10 h-[187px] mt-10 max-sm:w-full sm:text-center sm:mb-6 max-sm:pr-0 max-sm:px-3">
            <p className="text-[22px]">{textjson.defintion["4"]}</p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="work_experience flex flex-col items-center relative justify-center px-4 text-center space-y-12 z-10 mt-20">
          <h2 className="text-[28px] sm:text-[20px] sm:mt-4 md:text-[50px] font-semibold z-10">
{textjson.Work_Experience}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 md:gap-x-52 w-full max-w-6xl place-items-center gap-10 z-10">
            {Object.values(textjson.work_experience).map((work) => (
              <div key={work.Link} className="flex flex-col items-center">
                <Work
                  Link={work.Link}
                  Image={work.Image}
                  Title={work.Title}
                  Description={work.Description}
                />
              </div>
            ))}
          </div>

          <div className="absolute bg-[#40007c] w-[500px] top-2 bottom-0 rounded-full h-[500px] blur-3xl z-0 max-sm:w-[300px] max-sm:h-[300px]"></div>
        </div>

        {/* Languages */}
        <div className="languages flex justify-center items-center flex-col text-center z-10 p-6 mt-9">
          <div className="title_language p-9 w-full  max-sm:p-4">
            <h2 className="text-center text-[24px]  max-sm:w-full">
              {textjson.languages_title}
            </h2>
            <span className="text-[17px]">{textjson.language_title_2}</span>
          </div>
          <div className="language_Image w-full flex justify-center">
            <Image
              src={languages}
              alt="languages"
              className="max-w-full h-auto px-3"
            />
          </div>
        </div>

        {/* Projects */}
        {Object.values(textjson.projects).map((project) => (
          <div key={project.Title} className="z-10">
            <Projects
              Link={project.Link}
              Image={project.Image}
              Title={project.Title}
              Description={project.Description}
              Sup_title={project.Sup_title}
              reverse={project.reverse}
            />
          </div>
        ))}

        {/* Footer */}
        <div className="footer text-gray-300 py-10 border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="contact space-y-2">
              <h3 className="text-[#9857D3] text-xl font-semibold tracking-wide">
                {textjson.footer.contact}
              </h3>
              <p className="text-gray-400 text-sm max-w-[400px] leading-relaxed">
                {textjson.footer.text}
              </p>
              <Link
                href={`mailto:${textjson.footer.gmail}`}
                className="inline-block mt-2 text-sm text-[#CCD6F6] hover:text-[#9857D3] transition-colors duration-300"
              >
                {textjson.footer.gmail}
              </Link>
            </div>

            <div className="socials flex gap-4 mt-4 md:mt-0">
              <Link
                href="https://www.linkedin.com/in/omar-ahmed-33a467298/"
                target="_blank"
                className="hover:text-[#9857D3] transition-colors duration-300"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Omar-Ahmed-OHM"
                target="_blank"
                className="hover:text-[#9857D3] transition-colors duration-300"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8 border-t border-white/10 pt-4">
            © {new Date().getFullYear()} Omar Ahmed. All Rights Reserved.
          </div>
        </div>
      </Container>
}
</div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Container from "./shared/Container/container";
import ME from "../../public/assets/image/ME.jpg";
import Ellips from "../../public/assets/image/Ellipse 5.png";
import Direction from "../../public/assets/image/Vector.svg";
import textjson from "../../src/app/text/text.json";
import { Facebook } from "lucide-react";
import Work from "./shared/Box_Information/Work_Experience";
import languages from '../../public/assets/image/Skills (1).svg'
import Projects from "./shared/Projects/project";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f011c] via-[#120023] to-[#1b0232]">
      <Container>
        <div className="flex justify-center items-center gap-16 md:gap-16 lg:gap-16 mr-28 ">
          <div className="pt-14">
            <Image
              src={Direction}
              alt="Your Name"
              width={78.34}
              height={47.82}
            />
          </div>
          <div>
            <p className="text-[19px] pb-4">
              {textjson.greeting}{" "}
              <span className="text-[#7127BA]">{textjson.name}</span>
            </p>
          </div>
        </div>



        <div className="grid grid-cols-1 mt-20  md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-[100px] ">
          <div className="image">
            <Image
              src={ME}
              alt="Your Name"
              width={250}
              height={208}
              className="rounded-[81px] mx-auto md:mx-0"
            />
          </div>
          <div className="intro line-height: 1 space-y-4  md:text-left">
            <p className="underline">{textjson.Frontend_Def}</p>
            <p className="md:text-[50px] ">
              {textjson.tagline}
              <br />
              {textjson.Code_Def}
              <span className="inline-block px-8 py-2  ml-1 relative  text-[#7127BA]">
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
            <p className="text-[11px]">{textjson.Positive}</p>
          </div>
        </div>



        <div className="definition mt-20 ">
          <h2 className="text-[50px]">{textjson.defintion["1"]}</h2>
          <br />
          <div className="text-[21px] w-full md:w-3/4 lg:w-3/4 flex gap-5">
            <div>{textjson.defintion["2"]}</div>
            <div className="flex gap-2 items-center">
              <div>
                <span className="text-[#1877F2] ">
                  <Facebook />
                </span>
              </div>
              <div className="text-[21px] text-[#1877F2] ">
                <div>

                  {textjson.defintion["3"]}
                </div>
              </div>
            </div>

          </div>
          <div className="information w-[892px] pr-10 h-[187px]  mt-10">
            <p className="text-[22px]">
              {textjson.defintion["4"]}
            </p>
          </div>
        </div>


        <div className="work_experience flex flex-col items-center relative justify-center px-4 text-center space-y-12 z-10">
          <div className="work_experience flex flex-col items-center justify-center px-4 text-center space-y-12 z-10">
            <h2 className="text-[50px] font-semibold">{textjson.Work_Experience}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 md:gap-x-52 w-full max-w-6xl place-items-center">
              {Object.values(textjson.work_experience).map((work) => (
                <div
                  key={work.Link}
                  className="flex flex-col items-center justify-center md:gap-y-0 "
                >
                  <Work
                    Link={work.Link}
                    Image={work.Image}
                    Title={work.Title}
                    Description={work.Description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bg-[#40007c] w-[500px] top-2 bottom-0 rounded-full h-[500px] blur-3xl z-0">
          </div>
        </div>

        <div className="languages flex justify-center items-center flex-col text-center z-10 p-6 mt-9">
          <div className="title_language p-9">
            <h2 className="text-[24px] w-[787px]">
              {textjson.languages_title}
            </h2>
            <span className="text-[17px] text-center">{textjson.language_title_2}</span>
          </div>
          <div className="language_Image">
            <Image src={languages} alt="languages" />
          </div>
        </div>
        {
          Object.values(textjson.projects).map((project) => (
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
          ))
        }
        <div className="footer  text-gray-300 py-10 border-t border-white/10">
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
              <Link href="https://www.linkedin.com/in/omar-ahmed-33a467298/" target="_blanck" className="hover:text-[#9857D3] transition-colors duration-300">LinkedIn</Link>
              <Link href="https://github.com/Omar-Ahmed-OHM" target="_blank" className="hover:text-[#9857D3] transition-colors duration-300">GitHub</Link>
            </div>

          </div>
          <div className="text-center text-xs text-gray-500 mt-8 border-t border-white/10 pt-4">
            © {new Date().getFullYear()} Your Name. All Rights Reserved.
          </div>
        </div>
      </Container>
    </div>
  );
}

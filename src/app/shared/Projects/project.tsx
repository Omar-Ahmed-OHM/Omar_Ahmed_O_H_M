import type { Projects } from '@/app/types/home'
import React from 'react'
import Container from '../Container/container'
import Link from 'next/link'
import Image from 'next/image'


const Projects = (props: Projects) => {
  const { Title, Sup_title, Description, Image: ImgSrc, Link: ProjectLink, reverse } = props

  return (
    <section>
      <Container>
        <section>
          <div
            className={`project relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-20 ${
              reverse ? 'md:[direction:rtl]' : ''
            }`}
          >
            <div
              className={`project-explain absolute ${
                reverse ? 'left-14' : 'right-14'
              } top-7 w-[669px] min-h-[230px] z-10 p-7 rounded-[14px]`}
            >
              <h3
                className={`project__subtitle text-[14px] font-medium tracking-[2px] uppercase text-[#9857D3] mb-2 ${
                  reverse ? 'text-left' : 'text-right'
                }`}
              >
                {Sup_title}
              </h3>

              <h2
                className={`project__title text-[28px] md:text-[32px] font-bold text-[#CCD6F6] mb-4 leading-tight ${
                  reverse ? 'text-left' : 'text-right'
                }`}
              >
                {Title}
              </h2>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-[14px]">
                <p
                  className={`project__description text-[15px] text-[#B2B2B2] leading-relaxed ${
                    reverse ? 'text-right' : 'text-left'
                  }`}
                >
                  {Description}
                </p>
              </div>

              <div className="icons flex space-x-4 mt-4 justify-end">
                <div className="img">
                    <Image src="/assets/image/icon-park-solid_click.png" alt="vist" width={31} height={31}/>
                </div>
                 <div className="img">
                    <Image src="/assets/image/icon-park-solid_click.png" alt="vist" width={31} height={31}/>
                </div>
              </div>
            </div>

            <div
              className={`bg-[#2B0B3A] w-[630px] h-[350px] flex items-center justify-center rounded-[15px] mt-4 ${
                reverse ? 'md:order-last' : ''
              }`}
            >
              <Link
                href={ProjectLink}
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ImgSrc}
                  alt={Title}
                  className="project__image w-[560px] h-[350px] rounded-md object-cover"
                />
              </Link>
            </div>
          </div>

        </section>
      </Container>
    </section>
  )
}

export default Projects

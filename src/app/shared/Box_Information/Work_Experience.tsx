"use client"
import React from 'react'
import { Work_Experience } from '@/app/types/home'
import Container from '../Container/container'
const Work = (props:Work_Experience)=>{
    return (
        <section>
            <Container>
                  <div className=' p-4 flex justify-center relative gap-10 items-center border-[#4F228D] border-t-4 bg-gradient-to-br from-[#130428] via-[#251043] to-[#190634]   rounded-lg  duration-300  w-[635px]'> 
                    <div className="imge relative">
                        <img src={props.Image} alt={props.Title} className='w-[122px] h-[110px]  object-cover '/>
                        <div className="absolute bg-[#2e093a] w-[140px]  bottom-[-10px]   h-[20px] blur-md "></div>
                    </div>
                    <div className="description">

                    <h3 className='text-xl font-semibold text-center text-[32px]'>{props.Title}</h3>
                    <p className='text-sm text-center font-[var(--font-popines)] text-[10px] w-[260px]'>{props.Description}</p>
                    </div>
                  </div>
            </Container>
        </section>
    )
}
export default Work
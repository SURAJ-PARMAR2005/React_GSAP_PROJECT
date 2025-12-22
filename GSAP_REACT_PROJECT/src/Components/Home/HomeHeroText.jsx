import React from 'react'
import Video from "../Home/video";
const HomeHeroText = () => {
  return (
    <div  className='font-[font2] pt-5 text-center '>
        <div className='text-[9.5vw] text-white uppercase leading-[8vw] flex justify-center items-center'>The Spark</div>

        <div className='text-[9.5vw] text-white uppercase leading-[8vw] flex justify-center items-start'> Who
         <div className='h-[8vw] w-[16vw] rounded-full overflow-hidden '>
          <Video className="w-full h-full object-fit pointer-events-none" autoplay muted loop playsInline />
          </div>
          </div>
        <div className='text-[9.5vw] text-white uppercase leading-[8vw] flex justify-center items-center'>generates</div>
        <div className='text-[8vw] text-white uppercase leading-[8vw] flex justify-center items-center'>there</div>
        <div className='text-[9.5vw] text-white uppercase leading-[8vw] flex justify-center items-center'>Creativity</div>
    </div>
  )
}

export default HomeHeroText

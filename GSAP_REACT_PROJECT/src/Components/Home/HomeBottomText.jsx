import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6 text-white'>
      <Link to="/projects"  className='leading-[7vw]  hover:border-[#D3FD50]  hover:text-[#D3FD50] text-[6.5vw] border-5 border-white uppercase rounded-full px-6 py-1' >Projects</Link>
      <Link to="/agency"    className='leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] border-5 border-white uppercase rounded-full px-6 py-1' >Agency</Link>
    </div>
  )
}

export default HomeBottomText

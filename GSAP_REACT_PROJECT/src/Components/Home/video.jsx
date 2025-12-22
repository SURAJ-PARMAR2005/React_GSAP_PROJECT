import React from 'react'
import assets from "../../assets/asset"
const video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src={assets.Video}></video>
    </div>
  )
}

export default video;

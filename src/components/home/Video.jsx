import React from 'react'
import video from '../../assets/69496b2d.mp4'
export default function 
({  className = '' }) {
  return (
    <div className='h-full w-full'>
        <video className={`h-full w-full object-cover ${className} `} autoPlay loop muted src={video} />
     </div>
  )
}

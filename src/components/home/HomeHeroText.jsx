import React from 'react'
import Video from './Video'
export default function HomeHeroText() {
  return (
    <>
    <div className='font-[font1] pt-1 text-center'>
      <div className='text-[9.5vw] pt-4 uppercase leading-[8vw] flex justify-center items-center'>
        L'étincelle
      </div>
      <div className='text-[9.5vw]  uppercase leading-[8vw] flex justify-center items-center'>
        qui
        <div className='h-[7vw] w-[16vw]  overflow-hidden rounded-full'>
          <Video className="rounded-full" />
          </div>
        génère
      </div>
      <div className='text-[9.5vw]  uppercase leading-[8vw] flex justify-center items-center '>
        la créativité
      </div>
      </div>
    </>
  )
}

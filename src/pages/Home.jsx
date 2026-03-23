import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomTex from '../components/home/HomeBottomText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'


export default function Home() {
  return (
    <>
    <div className='h-screen w-screen fixed'>

        <Video/>
    </div>
    <div className='h-screen full relative flex flex-col justify-between items-center '>
      <HomeHeroText/>
      <HomeBottomText/>
    </div>
    </>
  )
}

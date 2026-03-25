import React from 'react'
import Card from '../components/projects/Card'

import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)
export default function Project() {


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 70%',
        end: 'bottom top',
        scrub: true,
        markers: true,
      }
    })
  
    gsap.utils.toArray('.hero').forEach((hero) => {
      tl.from(
        hero,
        {
          height: 100,
        },
        '+=0.2' // wait before next row starts
      )
    })
  })

 
  return (

    <div className='p-4 '>
      <div className='bg-red-100 pt-[40vh] '>
        <h1 className='font-[font-2] text-[25vh] uppercase    '>Projets<sup className='text-[10vh]  top-[-15vh]   '>17</sup></h1>
      </div>
      <div className='lol'>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic1.png" rightsrc="/projectsCardImage/pic2.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic3.jpg" rightsrc="/projectsCardImage/pic4.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic5.jpg" rightsrc="/projectsCardImage/pic6.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic7.jpg" rightsrc="/projectsCardImage/pic8.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic9.jpg" rightsrc="/projectsCardImage/pic10.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic11.jpg" rightsrc="/projectsCardImage/pic12.jpg"   />
      </div>
      
        <div  className='flex hero w-full h-[50vh] mb-4'>

      <Card  leftsrc="/projectsCardImage/pic13.jpg" rightsrc="/projectsCardImage/pic14.jpg"   />
      </div>
        <div  className='flex hero w-full h-[50vh] mb-4'>
      <Card  leftsrc="/projectsCardImage/pic15.jpg" rightsrc="/projectsCardImage/pic16.jpg"   />

      </div>
      
        </div>
      
    
    </div>
  )
}

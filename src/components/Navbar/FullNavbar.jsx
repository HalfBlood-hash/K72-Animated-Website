

import React, { useContext } from 'react'
import { useRef, useState,useEffect } from 'react'
import { useGSAP } from "@gsap/react"
import { NavBarContext } from '../../Context/NavContext'
import gsap from "gsap"
gsap.registerPlugin(useGSAP);

export default function FullNavbar() {
  const stairContainerRef = useRef(null)
  const navLinkRef = useRef(null)
  const { navOpen, SetNavOpen } = useContext(NavBarContext)
  console.log("navopenkdjs", navOpen);
  const fullScreenRef = useRef(null);

  const tlRef = useRef(null);

 
useGSAP(() => {
  // Hide initially to avoid flash
  if (fullScreenRef.current) {
    gsap.set(fullScreenRef.current, { display: 'none' });
  }

  const t1 = gsap.timeline({ paused: true });

  t1.from('.stairs', {
    height: 0,
    duration: 1,
    stagger: { amount: -1 },
  });

  if (navLinkRef.current) {
    t1.from(navLinkRef.current, { opacity: 0 }, '<');
  }

  t1.from('.link', {
    transformOrigin: '50% 0%',
    rotationX: -90,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.4)',
    stagger: 0.1
  });

  // ✅ store the actual timeline instance you created
  tlRef.current = t1;
}, []); // run once


  useEffect(() => {
    const tl = tlRef.current;
    const el = fullScreenRef.current;
    if (!tl || !el) return;

    if (navOpen) {
      gsap.set(el, { display: 'block' }); // show overlay
      tl.play(0);                         // animate in from start
    } else {
      tl.reverse();                       // animate out
      tl.eventCallback('onReverseComplete', () => {
        gsap.set(el, { display: 'none' }); // hide after reverse ends
        tl.eventCallback('onReverseComplete', null);
      });
    }
  }, [navOpen]);


  return (
    <>
      <div id='fullscreennav' ref={fullScreenRef} className=' fixed z-50 text-white h-screen w-full absolute bg-black pt-1 overflow-x-hidden'  >

        <div className='h-screen w-full fixed'>

          <div ref={stairContainerRef} className='flex h-full w-full '>
            <div className='stairs h-full w-1/6  bg-[#D3FD50]  '></div>
            <div className='stairs h-full w-1/6  bg-[#D3FD50] '></div>
            <div className='stairs h-full w-1/6  bg-[#D3FD50] '></div>
            <div className='stairs h-full w-1/6  bg-[#D3FD50] '></div>
            <div className='stairs h-full w-1/6  bg-[#D3FD50] '></div>
            <div className='stairs h-full w-1/6  bg-[#D3FD50] '></div>
          </div>


        </div>
        <div ref={navLinkRef} className='relative'>
          <div className="flex w-full justify-between p-5 items-start">
            <div className="pt-4 pl-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                />
              </svg>
            </div>


            <div onClick={() => SetNavOpen(false)} className="relative h-20 w-20 cursor-pointer ">

              <div className="absolute top-0  h-30 w-1 -rotate-45 origin-top  bg-white" />
              <div className="absolute top-0  h-30 w-1  right-0 rotate-45 origin-top  bg-white " />

            </div>
          </div>

          <div className='  pt-[10vh] ' >
            <div className='link relative border-t-1 font-[font2] uppercase text-[10vh] text-center '>
              <h1 className=' font-[font2] uppercase text-[10vh] text-center  '  >Project </h1>
              <div className='moveLink absolute flex top-0 left-0 bg-[#D3FD50] text-black w-full overflow-hidden'>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>

              </div>
            </div>
            <div className='link relative border-t-1 border-amber-1  font-[font2] uppercase text-[10vh] text-center '>
              <h1 className=' font-[font2] uppercase text-[10vh] text-center  '  >Agence </h1>
              <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>

              </div>
            </div>
            <div className='link relative border-t-1 border-amber-1  font-[font2] uppercase text-[10vh] text-center '>
              <h1 className=' font-[font2] uppercase text-[10vh] text-center  '  >Contact</h1>
              <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>

              </div>
            </div>
            <div className='link relative border-y-1   font-[font2] uppercase text-[10vh] text-center '>
              <h1 className=' font-[font2] uppercase text-[10vh] text-center  '  >Blogue</h1>
              <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black '>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>
                <div className='flex items-center  moveX '>
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
                  <h2 className=' whitespace-nowrap font-[font2] uppercase text-[10vh] text-center  ' >Pour Tout Voir</h2>
                  <img className='h-12 w-72 shrink-0 rounded-full object-cover' src='https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5' />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

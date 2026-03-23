

import { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLocation } from 'react-router-dom'


export default function Stairs(props) {
    const parentStairRef = useRef(null)
    const pageCurrentRef=useRef(null)
    // console.log(props.children)
    const currentPath = useLocation().pathname
    // console.log(currentPath)
    useGSAP(function () {
        const t1 = gsap.timeline({})
        t1.to(parentStairRef.current, {
            display: 'block'
        })

        t1.from('.stair', {
            height: 0,
            stagger: {
                amount: -.5
            }

        })
        t1.to('.stair', {
            y: '100%',
            stagger: {
                amount: -.5
            }
        })
        t1.to(parentStairRef.current, {
            display: 'none'
        })
        t1.to('.stair', {
            y: '0',

        })
        gsap.from(pageCurrentRef.current,{
            opacity:0,
            delay:2
        })
    },[currentPath])
    return (
        <>

            <div ref={parentStairRef} className='  h-screen w-full fixed z-20 top-0  '>
                <div className='flex h-full w-full '>
                    <div className='stair h-full w-1/6  bg-black '></div>
                    <div className='stair h-full w-1/6  bg-black'></div>
                    <div className='stair h-full w-1/6  bg-black'></div>
                    <div className='stair h-full w-1/6  bg-black'></div>
                    <div className='stair h-full w-1/6  bg-black'></div>
                    <div className='stair h-full w-1/6  bg-black'></div>
                </div>

            </div>
            <div ref={pageCurrentRef}>
            {props.children}
                </div>
        </>
    )
}

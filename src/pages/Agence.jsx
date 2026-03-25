import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
export default function Agence() {
  const imagedivRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',


  ]


  useGSAP(function () {
    gsap.to(imagedivRef.current, {
      scrollTrigger: {
        trigger: imagedivRef.current,
        start: 'top 20%',
        end: 'top -200%',
        scrub: true,
        pin: true,
        onUpdate: function (ele) {
          let imageIndex = Math.floor(ele.progress/2 * imageArray.length)
          // console.log(ele.progress)
          // console.log(imageIndex)
          if (ele.progress < 1) {
            imageIndex = Math.floor(ele.progress * imageArray.length)
          }
          else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    }
    )
  })


  return (

    <>
      <div className='section-1'>
        <div ref={imagedivRef} className=' absolute h-[45vh] w-[17vw] rounded-3xl  top-[20vh] left-[62vh]  overflow-hidden  '>
          <img ref={imageRef} src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" className='h-full w-full object-cover  ' />
        </div>
        <div className='font-[font-1] relative'>
          <div className='mt-[50vh] '>
            <h1 className='font-[font-1] text-[19vw] uppercase text-center  leading-[40vh] ' >Soixan7e<br></br>
              Douze</h1>

          </div>
          <div className='pl-[40%]  ' >
            <p className='text-6xl '>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className='section2 h-screen'>

        </div>
      </div>
    </>
  )
}

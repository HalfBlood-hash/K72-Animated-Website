import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBottomText() {
  return (
    <>
    <div className=' flex justify-center gap-3'>
      <Link to='/project' className='font=[font-2] text-[6.5vw] border-4 rounded-full  pb-4 px-7  py-7 leading-[4vw] border-white-500 pt-3 uppercase border-white-500 hover:border-[#D3FD50] hover:text-[#D3FD50] ' >Projects</Link>
      <Link to='/agence'  className='font=[font-2] text-[6.5vw] border-4 rounded-full  pb-4 px-7  py-7 leading-[4vw] border-white-500 pt-3 uppercase border-white-500 hover:border-[#D3FD50] hover:text-[#D3FD50] ' >Agence</Link>
    </div>
    </>
    
  )
}

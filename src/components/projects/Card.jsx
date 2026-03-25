








export default function Card( 
   { leftsrc,
    rightsrc,textleft="voir le projet"
    ,textright="voir le projet"
}

){
  

   



   return(<>
    
        <div className=' h-full w-1/2 relative group hover:rounded-[50px] transitioin-all rounded-none cursor-pointer overflow-hidden '>
        <img src={leftsrc} alt="leftimage"  className="w-full h-full object-cover"  />
        <div className=" absolute  opacity-0 transitioin-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full bg-black/10  ">
        <h3  className=" uppercase font-[font1] border-2 p-2 text-white border-white rounded-full ">{textleft}</h3>
        </div>
        </div>
        <div className=' h-full w-1/2 relative group transitioin-all hover:rounded-[50px] rounded-none cursor-pointer overflow-hidden '>
        <img src={rightsrc} alt="rightimage"  className="w-full h-full object-cover"   />
        <div className="  opacity-0 absolute transitioin-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center h-full w-full bg-black/10  ">
        <h3  className=" uppercase font-[font1] border-2 p-2 text-white border-white rounded-full ">{textright}</h3>
        </div>
        </div>
        
  
    </>)
}
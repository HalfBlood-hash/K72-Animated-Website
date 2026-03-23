


import React, { createContext, useState } from 'react'

export const NavBarContext=createContext()
export default function NavContext({children}) {
  const [navOpen,SetNavOpen]=useState(false)
  return (
   <>
    <NavBarContext.Provider value={{navOpen,SetNavOpen}}>
        {children}
    </NavBarContext.Provider>
   </>
  )
}

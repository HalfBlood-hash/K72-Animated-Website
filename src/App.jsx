
import React from 'react'
import './App.css'
import {Routes,Route, Link} from "react-router-dom"
import Agence from './pages/Agence'
import Project from './pages/Project'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import FullNavbar from './components/Navbar/FullNavbar'

const App = () => {
  
 
  return (
    <>
    
      <Navbar/>
    <FullNavbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
      <Route path='/project' element={<Project/>}/>
     </Routes> 
  
  
    </>
  )
}

export default App

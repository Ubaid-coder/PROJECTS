'use client'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Globe from '../components/Globe.jsx'
import Temperature from '../components/Temperature.jsx'
import Forest from '../components/Forest.jsx'
import Sea from '../components/Sea.jsx'
import Air from '../components/Air.jsx'
import Awareness from '../components/Awareness.jsx'
import { useRef } from 'react'


function page() {
  let navbarRef = useRef();
 
  return (
   <>
   <Navbar navbarRef={navbarRef} />
   <Hero />
   <Globe navbarRef={navbarRef} />
   <Temperature />
   <Forest />
   <Sea />
   <Air />
   <Awareness />
   </>
  )
}

export default page
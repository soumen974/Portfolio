import React from 'react'
import Nav from './components/Nav'
import Herosec from './components/Herosec'
import Servicesec from './components/Servicesec'
import Projects from './components/Projects'
import Techs from './components/Techs'
import Getcontact from './components/Getcontact'
import Footer from './components/Footer'

export default function Landing() {
  return (
    <>
   <body className="relative antialiased tracking-tight text-gray-500 bg-black font-inter">
        <div className="absolute inset-0 bg-top bg-no-repeat bg-illustration-01"></div>
        <div className="absolute inset-0 bg-center bg-no-repeat bg-illustration-02"></div>
        <div className="container relative">
            
            <Nav/>
            <Herosec/>
            <Servicesec/>
            <Projects/>
            <Techs/>
            <Getcontact/>
            <Footer/>

        </div>
   </body>
    </>
  )
}

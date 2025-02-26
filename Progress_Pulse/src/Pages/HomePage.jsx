import React from 'react'
import LandingPage from '../Components/Home/Landing'
import Footer from '../Components/Home/Footer'
import What from '../Components/Home/What'
import Why from '../Components/Home/Why'
import How from '../Components/Home/How'

function HomePage() {
  return (
    <>
      <LandingPage/>
      <What />
      <Why />
      <How />
      <Footer />
    </>
  )
}

export default HomePage

import React from 'react'

import NavBar from './NavBar'
import SearchCar from './SearchCar'
import MainSection from './MainSection'
import ServiceSection from './ServiceSection'



const Main = () => {
  return (
    <div>
      <NavBar/>
      <MainSection/>
      <ServiceSection/>
    </div>
  )
}

export default Main
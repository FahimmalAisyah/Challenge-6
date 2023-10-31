import React from 'react'
import NavBar from './NavBar'
import SewaMobilSection from './SewaMobilSection'

function NoCar() {
  return (
    <div>
      <NavBar/>
      <SewaMobilSection/>
      
      <h2 className='mt-5'>Tidak ada mobil untuk di sewa</h2>
    </div>
  )
}

export default NoCar
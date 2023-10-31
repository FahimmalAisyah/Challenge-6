import { useState } from 'react'
import './App.css'
import './style.css'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import Cars from './components/Cars'
import NoCar from './components/NoCar'
import DenganSupir from './components/DenganSupir'
import TanpaSupir from './components/TanpaSupir'
import MobilBesar from './components/MobilBesar'
import DenganSupir11 from './components/DenganSupir11'
import DenganSupir4 from './components/DenganSupir4'
import TanpaSupir11 from './components/TanpaSupir11'
import TanpaSupir4 from './components/TanpaSupir4'

function App() {
  return (
    
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='/cars' element={<Cars/>}></Route>
              <Route path='/no-car' element={<NoCar/>}></Route>
              <Route path='/dengansupir' element={<DenganSupir/>}></Route>
              <Route path='/tanpasupir' element={<TanpaSupir/>}></Route>
              <Route path='/tanpasupir11' element={<TanpaSupir11/>}></Route>
              <Route path='/tanpasupir4' element={<TanpaSupir4/>}></Route>
              <Route path='/mobilbesarsupir' element={<MobilBesar/>}></Route>
              <Route path='/dengansupir11' element={<DenganSupir11/>}></Route>
              <Route path='/dengansupir4' element={<DenganSupir4/>}></Route>
          </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App

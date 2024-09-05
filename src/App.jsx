import { useState } from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Components/Home/Layout/Layout'
import Landing from './Components/Home/LandingPage/Landing'
import Signup from './Components/Client/Signup/Signup'
import LayoutCLient from './Components/Client/Layout/LayoutCLient'
import Dashboard from './Components/Client/Dashboard/Dashboard'


function App() {


  return (
    <>

  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Landing/>}/>
    </Route> 

    <Route path='/user' element={<LayoutCLient/>}>
    <Route path='/user/dashboard' element={<Navigate to="/user"/>}/>
    <Route path='/user/signup'element={<Signup/>}/>
    <Route path='/user/dashboard/:email' element={<Dashboard/>}/>
    </Route>
  </Routes>

    </>
  )
}

export default App

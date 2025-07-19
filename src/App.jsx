import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Nest from './components/Nest'
import Card from './Pages/Card'
import Sellers from './components/Sellers'
import Menu from './components/Menu'
import BestSellers from './components/BestSellers'


function App() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Nest/>
    <Card/>
    <Sellers/>
    <Menu/>
    <BestSellers/>
    </>
  )
}

export default App

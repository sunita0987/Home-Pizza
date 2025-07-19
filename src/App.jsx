import { useState } from 'react'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Nest from './components/Nest'
import Card from './Pages/Card'
import Sellers from './components/Sellers'


function App() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Nest/>
    <Card/>
    <Sellers/>
    </>
  )
}

export default App

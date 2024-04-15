import React from 'react'
import Header from './components/Header'
import Biography from './components/Biography'
import Quotes from './components/Quotes'
import Home from './components/Home'

import './App.css'
import Footer from './components/Footer'


const Layout = () => {
  return (
    <>
        <Header/>
        <Home/>
        <Biography/>
        <Quotes/>
        <Footer/>
        
    </>
  )
}

export default Layout
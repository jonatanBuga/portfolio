import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experiens from './component/experiens/Experiens'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experiens/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
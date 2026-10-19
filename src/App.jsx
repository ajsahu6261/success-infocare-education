import React from 'react'
import Navbar from './Component/Navbar'
import Home from './page/Home.jsx'
import About from "./page/About.jsx"
import Faculty from "./page/Faculty.jsx"
import Enquiry from "./page/Enquiry.jsx"
import Courses from "./page/Courses.jsx"
import Footer from './Component/Footer.jsx'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Faculty />
      <Enquiry/>
      <Courses />
      <Footer />
      
    </div>
  )
}

export default App

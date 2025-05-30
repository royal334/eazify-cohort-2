//import { motion } from "motion/react"
import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Form from "./components/Form"

function App() {

  const [course,setCourse] = useState<string>('')

  return (
    <>

      <Header/>
      <Hero/>
      <About/>
      <Courses  setCourse={setCourse} />
      <Form course ={course} setCourse={setCourse}/>
      <Footer/>

    </>
  )
}

export default App

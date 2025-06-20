'use client'

import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer' // ✅ import footer here

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer /> {/* ✅ Put this ONLY here, at the end */}
    </>
  )
}

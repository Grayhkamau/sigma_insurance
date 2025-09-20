import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/Preloader'
import Personal_insurance from './pages/Personal_Insurance'
import Corporate_insurance from './pages/Corporate_insurance'
import NotFound from './pages/Not_found'

export default function App(){
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="app"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.6}}
          className="flex flex-col min-h-screen bg-lightGray text-gray-800"
        >
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services/></PageWrapper>} />
                <Route path='/products/personal-insurance-covers' element={<PageWrapper><Personal_insurance/></PageWrapper>}/>
                <Route path='/products/corporate-insurance-covers' element={<PageWrapper><Corporate_insurance/></PageWrapper>}/>
                <Route path="/downloads" element={<PageWrapper><Downloads/></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function PageWrapper({children}){
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -12}}
      transition={{duration: 0.45, ease:"easeInOut"}}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

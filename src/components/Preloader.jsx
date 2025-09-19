import { motion } from 'framer-motion' 
import { useState, useEffect } from 'react'
import logo from '../assets/sigma.JPG'
import home_hero from '../assets/insure_hero-min.jpg'
import about_us from '../assets/about_us-min.jpg';
import our_services from '../assets/our_services.jpg';
import corporate_hero from '../assets/corporate_cover/hero.jpg';
import persona_hero from '../assets/personal_cover/hero.jpg';
// import badge1 from '../assets/badge1.png'
// import badge2 from '../assets/badge2.png'

// List all important images
const imageUrls = [logo, home_hero,about_us,our_services,corporate_hero,persona_hero]

export default function Preloader({ onFinish }){
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let loadedCount = 0
    imageUrls.forEach(url => {
      const img = new Image()
      img.src = url
      img.onload = img.onerror = () => {
        loadedCount++
        setProgress(Math.round((loadedCount / imageUrls.length) * 100))
        if (loadedCount === imageUrls.length) {
          setTimeout(() => onFinish?.(), 500) // slight delay for smooth exit
        }
      }
    })
  }, [])

  return (
    <motion.div
      initial={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.7}}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-logoBlueStart to-logoBlueEnd text-white"
    >
      <motion.h1 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:0.2, duration:0.8}} 
        className="flex md:text-5xl font-bold tracking-wide drop-shadow text-orange-600"
      >
        Sigma Insurance
      </motion.h1>

      {/* Progress Bar + Text */}
      <div className="mt-6 w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-logoOrangeStart to-logoOrangeEnd transition-all duration-300"
          style={{width: `${progress}%`}}
        ></div>
      </div>
      <p className="mt-2 text-sm">{progress}%</p>
    </motion.div>
  )
}

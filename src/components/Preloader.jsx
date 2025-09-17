import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/sigma.JPG'

export default function Preloader(){
  return (
    <motion.div
      initial={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.7}}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-logoBlueStart to-logoBlueEnd text-white"
    >
     

      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:0.8}} className="ml-6 text-5xl font-bold tracking-wide drop-shadow text-orange-600">
        Sigma Insurance
      </motion.h1>
    </motion.div>
  )
}

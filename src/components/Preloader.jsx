import { motion } from 'framer-motion' 
import { useState, useEffect } from 'react'



export default function Preloader(){
  return (
  
      <motion.h1 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:0.2, duration:0.8}} 
        className="flex md:text-5xl font-bold tracking-wide drop-shadow text-orange-600"
      >
        Sigma Insurance
      </motion.h1>

  )
}

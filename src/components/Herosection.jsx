

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = ({heroImg, title,text, page})=>{
    
const bgStyle = heroImg 
    ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url(${heroImg})` } 
    : { backgroundImage: 'linear-gradient(90deg,#0052A5,#00AEEF)' }
    return(
    <section className="relative h-[88vh] bg-cover bg-center" style={bgStyle}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container relative z-20 h-full flex items-center">
            <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:1.5}} className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
                {title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-100/90">
                {text}
                </p>

             {page==='home'?<div className="mt-6 flex gap-4">
                <Link to="/products" className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                    style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}>
                    Our Products
                </Link>
                <Link to="/contact" className="px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white hover:text-logoNavy transition">
                    Get a Quote
                </Link>
                </div>:''}
            </motion.div>
            </div>
        </section>
    )
  }

  export default HeroSection
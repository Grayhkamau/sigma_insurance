import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/sigma.JPG"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightGray px-6 text-center">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Sigma Insurance"
        className="w-20 h-20 object-contain rounded-md mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      />

      {/* Error Code */}
      <motion.h1
        className="text-7xl md:text-9xl font-extrabold text-logoBlueStart drop-shadow-lg"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Oops! The page you’re looking for doesn’t exist or may have been moved.  
        But don’t worry — we’re here to guide you back on track.
      </motion.p>

      {/* Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
          style={{
            background: "linear-gradient(90deg,#FF7A00,#FFD500)",
          }}
        >
          Back to Home
        </Link>
      </motion.div>

    
    </div>
  )
}

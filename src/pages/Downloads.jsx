import React from 'react'
import { motion } from 'framer-motion'

export default function Downloads(){
  return (
    <div className="container py-16 flex flex-col gap-8">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-3xl font-bold text-logoNavy">
        Downloads
      </motion.h2>
      <p className="text-gray-600">
        Coming soon: claim forms, application forms, and our customer service charter. Use the form below to request a document.
      </p>

      <form className="card p-6 max-w-2xl flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Your Email</span>
          <input type="email" required className="mt-2 p-3 border rounded-md" placeholder="you@example.com" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Document</span>
          <select className="mt-2 p-3 border rounded-md">
            <option>Claim Form</option>
            <option>Application Form</option>
            <option>Customer Service Charter</option>
          </select>
        </label>

        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 rounded-md text-white font-medium shadow"
            style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}>
            Request
          </button>
          <button type="reset" className="px-4 py-2 border rounded-md">Reset</button>
        </div>
      </form>
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { FaUserMd, FaPlane, FaCar, FaHome, FaBuilding, FaShip, FaTools, FaMoneyBillWave, FaTruck } from 'react-icons/fa'

const personal = [
  {title: 'Health Insurance', icon: <FaUserMd />},
  {title: 'International Health Insurance', icon: <FaPlane />},
  {title: 'Travel Cover', icon: <FaPlane />},
  {title: 'Motor Insurance', icon: <FaCar />},
  {title: 'Funeral Cover', icon: <FaHome />},
  {title: 'Home-Owners & Contents', icon: <FaHome />}
]

const corporate = [
  {title: 'Group Health Insurance', icon: <FaUserMd />},
  {title: 'Group Life / Employee Benefits', icon: <FaBuilding />},
  {title: 'Work Injury Benefits Act', icon: <FaTools />},
  {title: 'Fire & Burglary', icon: <FaHome />},
  {title: 'Marine Insurance', icon: <FaShip />},
  {title: 'Engineering Insurance', icon: <FaTools />},
  {title: 'Money Insurance', icon: <FaMoneyBillWave />},
  {title: 'Commercial Motor', icon: <FaTruck />},
  {title: 'Liability Insurance', icon: <FaBuilding />},
]

export default function Products(){
  return (
    <div className="container py-16 flex flex-col gap-10">
      <h2 className="text-3xl font-bold text-logoNavy">Our Products</h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 text-logoBlueStart">Personal Insurance Covers</h3>
          <div className="flex flex-wrap gap-4">
            {personal.map(p => <ProductCard key={p.title} {...p} />)}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 text-logoOrangeStart">Corporate Insurance Covers</h3>
          <div className="flex flex-wrap gap-4">
            {corporate.map(p => <ProductCard key={p.title} {...p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({title, icon}){
  return (
    <motion.div whileHover={{scale:1.03}} className="card p-4 flex-1 min-w-[200px] hover:shadow-xl transition">
      <div className="flex items-center gap-3">
        <div className="text-logoBlueStart text-2xl">{icon}</div>
        <div className="font-semibold text-logoNavy">{title}</div>
      </div>
      <p className="text-sm text-gray-600 mt-2">Click to learn more.</p>
    </motion.div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sigma.JPG'

export default function Footer(){
  return (
    <footer 
      className="mt-12 text-white"
      style={{
        background: 'linear-gradient(135deg, #0052A5 0%, #00AEEF 100%)'
      }}
    >
      <div className="container flex flex-col md:flex-row justify-between gap-8 py-10">
        
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <img loading='lazy' src={logo} alt="Sigma Insurance" className="w-12 h-12 object-contain rounded-md" />
            <div>
              <div className="font-bold text-lg">Sigma Insurance</div>
              <div className="text-xs">Securing Today. Empowering Tomorrow.</div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Established in 2022. We provide reliable, customer-focused insurance and financial solutions to individuals and corporates.
          </p>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/downloads" className="hover:underline">Downloads</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div className="flex-1 ">
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm ">P.O Box 52521 – 00100 Nairobi</p>
          <p className="text-sm">Westlands, Nairobi (physical location tbc)</p>
          <p className="text-sm mt-2">
            Email: <a href="mailto:info@sigmainsurance.co.ke" className="underline">info@sigmainsurance.co.ke</a>
          </p>
          <p className="text-sm">Phone: 07*******</p>
          <div className="mt-4 text-xs">
            © {new Date().getFullYear()} Sigma Insurance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

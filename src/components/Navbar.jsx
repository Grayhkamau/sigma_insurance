import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/sigma.JPG' // place your official logo here

const NavItem = ({to, children}) => (
  <p>
 
    <NavLink to={to} className={({isActive}) => 
      (isActive 
        ? 'text-logoNavy font-semibold border-b-2 border-logo OrangeStart' 
        : 'no-underline text-black'
      ) + ' transition pb-1'}>
      {children}
    </NavLink>
     
  </p>
)

export default function Navbar(){
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-around h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Sigma Insurance" className="w-12 h-12 object-contain rounded-md" />
          <div className="hidden sm:block">
            <div className="font-bold text-lg text-logoNavy">Sigma Insurance</div>
            <div className="text-xs text-gray-500">Securing Today. Empowering Tomorrow.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 relative">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>

          {/* Products with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <p>Products ▾</p>
           

            {/* Dropdown */}
            <div 
              className={`absolute left-0 w-56 bg-white border rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
                dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <Link to="/products/corporate-insurance-covers" className="block px-4 py-2 no-underline text-black hover:bg-gray-400">Personal Insurance Covers</Link>
              <Link to="/products#corporate" className="block px-4 py-2 hover:bg-gray-400 no-underline text-black">Corporate Insurance Covers</Link>
            </div>
          </div>

          <NavItem to="/downloads">Downloads</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(v => !v)} className="p-2 rounded-md border bg-logoOrangeEnd/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {open && (
        <div className="absolute right-4 mt-2 w-56 bg-white rounded-lg shadow-lg border p-4">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-2">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block py-2">Services</Link>
          
          {/* Mobile dropdown for Products */}
          <button 
            onClick={() => setSubOpen(v => !v)} 
            className="w-full text-left py-2 flex justify-between items-center"
          >
            Products
            <span>{subOpen ? '▴' : '▾'}</span>
          </button>
          {subOpen && (
            <div className="ml-3 flex flex-col">
              <Link to="/products#personal" onClick={() => setOpen(false)} className="py-1 text-sm">Personal Insurance Covers</Link>
              <Link to="/products#corporate" onClick={() => setOpen(false)} className="py-1 text-sm">Corporate Insurance Covers</Link>
            </div>
          )}

          <Link to="/downloads" onClick={() => setOpen(false)} className="block py-2">Downloads</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</Link>
        </div>
      )}
    </div>
  )
}

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
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-around h-16">
        <Link to="/" className="flex items-center gap-3">
          <img loading='lazy' src={logo} alt="Sigma Insurance" className="w-12 h-12 object-contain rounded-md" />
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
              <Link to="/products/personal-insurance-covers" className="block px-4 py-2 no-underline text-black hover:bg-gray-400">Personal Insurance Covers</Link>
              <Link to="/products/corporate-insurance-covers" className="block px-4 py-2 hover:bg-gray-400 no-underline text-black">Corporate Insurance Covers</Link>
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
  const linkStyle = 'block py-2 no-underline border rounded-md pl-2 hover:bg-[#00AEEF]'
  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(v => !v)}
        className="relative z-50 p-2 rounded-md border bg-logoOrangeEnd/20"
      >
        {/* Animate between hamburger and X */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform duration-300 ${
            open ? 'rotate-90' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Slide-out Menu (starts below navbar) */}
      <div
        className={`fixed top-18 left-0 h-[calc(100%-4rem)] w-64 bg-white shadow-lg border-r transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-2 flex flex-col gap-2 bg-slate-100">
          <Link to="/" onClick={() => setOpen(false)} className={linkStyle}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className={linkStyle}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className={linkStyle}>Services</Link>

          {/* Mobile dropdown for Products */}
          <Link
            onClick={() => setSubOpen(v => !v)}
            className={linkStyle}
          >
            Products
            <span>{subOpen ? '▴' : '▾'}</span>
          </Link>
          {subOpen && (
            <div className="ml-3 flex flex-col gap-2">
              <Link
                to="/products/personal-insurance-covers "
                onClick={() => setOpen(false)}
                className="py-1 text-sm no-underline border rounded-md pl-2"
              >
                Personal Insurance Covers
              </Link>
              <Link
                to="/products/corporate-insurance-covers "
                onClick={() => setOpen(false)}
                className="py-1 text-sm no-underline border rounded-md pl-2"
              >
                Corporate Insurance Covers
              </Link>
            </div>
          )}

          <Link to="/downloads" onClick={() => setOpen(false)} className={linkStyle}>Downloads</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={linkStyle}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

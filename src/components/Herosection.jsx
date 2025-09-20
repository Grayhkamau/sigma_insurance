import { Link } from 'react-router-dom'

const HeroSection = ({heroImg, title, text, page}) => {
  return (
    <section className="relative h-[92vh] flex items-center justify-start overflow-hidden">
      {/* Hero Image acting as background */}
      <img 
         loading='lazy'
        src={heroImg} 
        alt="hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-[#00000080] w-fit p-4">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100/90 italic">
            {text}
          </p>

          {page === 'home' ? (
            <div className="mt-6 flex gap-4">
              <Link 
                to="/products/personal-insurance-covers" 
                className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}
              >
                Our Products
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white hover:text-logoNavy transition"
              >
                Contact US
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

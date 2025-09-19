import { motion } from 'framer-motion'
import TrustBadges from '../shared/TrustBadges'
import { FaShieldAlt, FaHeartbeat, FaUserTie } from 'react-icons/fa'
import personal_hero from '../assets/personal_cover/hero.jpg';
import coporate_hero from '../assets/corporate_cover/hero.jpg'
import claims from '../assets/claims-min.jpg'
import HeroSection from '../components/Herosection';
import heroImg from '../assets/insure_hero-min.jpg' 
import aboutSigma from '../assets/why_sigma.png';

export default function Home(){
  return (
    <div>
      {/* Hero Section */}
      <HeroSection heroImg={heroImg} title={'Protecting What Matters Most'} text={'Comprehensive, tailored insurance solutions for individuals and businesses — built on trust and expertise.'} page={'home'}/>

      {/* Services Highlights */}
    
      <section className="mt-28 mb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between w-full ">
          <SmallCard icon={<FaShieldAlt />} title="Personal Insurance" desc="Health, motor, home and other covers with flexible options." bg_img={personal_hero}/>
          <SmallCard icon={<FaUserTie />} title="Corporate Solutions" desc="Group health, life, liability and engineering covers for businesses."  bg_img={coporate_hero}/>
          <SmallCard icon={<FaHeartbeat />} title="Claims Support" desc="Guidance and fast processing to help you during difficult times." bg_img={claims}/>
        </div>
      </section>

      {/* Trust Badges */}
      
      <TrustBadges />

      {/* Why Sigma Section */}
      <section className="py-8 bg-cream shadow-2xl/30  md:mx-4">
        <h2 className="md:text-4xl font-bold text-logoNavy text-center">Why Sigma Insurance</h2>

        <div className='flex md:flex-row flex-col md:w-full h-fit md:justify-center gap-8'>


          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="flex flex-col md:flex-col gap-6 justify-center">
                <Feature title="Customer-Centric" desc="Tailored policies and personal service." />
                <Feature title="Trusted Experts" desc="Years of experience and deep industry knowledge." />
                <Feature title="Secure & Reliable" desc="Focus on fast claims and continuous support." />
          </motion.div>

              <div className="md:w-1/2 h-full">
                   <img loading='lazy' src={aboutSigma}  className='w-full h-full'/>
              </div>
        </div>

      </section>
    </div>
  )
}

function SmallCard({ icon, title, desc, bg_img }) {
  return (
    <div 
      className="relative p-6 flex-1 hover:shadow-xl transition rounded-xl overflow-hidden"
    >
      {/* Background image */}
      <img 
      loading='lazy'
        src={bg_img} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 to-black"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-white text-3xl mb-3">{icon}</div>
        <h4 className="font-semibold text-logoBlueStart" style={{color:'#0052A5'}}>{title}</h4>
        <p className="mt-2" style={{ color: '#FFD500' }}>{desc}</p>
      </div>
    </div>
  )
}

function Feature({title, desc}){
  return (
    <div className="card p-6">
      <h4 className="font-semibold text-logoNavy">{title}</h4>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

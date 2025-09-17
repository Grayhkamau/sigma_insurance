import { motion } from 'framer-motion'
import HeroSection from '../components/Herosection'
import about_us from '../assets/about_us.jpg';
export default function About(){
  return (
    <div>

    <HeroSection heroImg={about_us} title={'About US'} text={'We educate clients on best practices for managing risks, evaluate unique needs, offer expert advice, and help navigate a variety of insurance options that promote sustainability.'} page={'about'}/>
    <div className="w-full py-16 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around">
        <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} transition={{duration:0.7}} className="flex-1">
          <h2 className="w-fit text-3xl font-bold text-logoNavy px-6 py-3 rounded-lg font-semibold shadow-lg"
                    style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}>About Sigma Insurance</h2>
          <p className="mt-4 text-gray-600">
            Established in 2022, our agency has rapidly earned a reputation for professionalism, integrity, and service excellence. 
            We are committed to providing reliable, customer-focused insurance and financial solutions to individuals and corporates.
          </p>

          <h3 className="mt-6 w-fit font-semibold px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                    style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}>Vision</h3>
          <p className="text-gray-600">
            To be the trusted partner in providing comprehensive, innovative, and accessible insurance solutions for a safer, more secure future.
          </p>

          <h3 className="mt-4 w-fit font-semibold px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
                    style={{ background: 'linear-gradient(90deg,#FF7A00,#FFD500)' }}>Mission</h3>
          <p className="text-gray-600">
            To deliver accessible, transparent, and tailored insurance solutions that protect our clients’ most valuable assets while preparing them for the future.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} transition={{duration:0.7}} className="flex-1 flex flex-col gap-6">
          <div className="card p-6">
            <h4 className="font-semibold text-logoOrangeStart">Core Values</h4>
            <ul className="mt-3 list-disc ml-5 text-gray-600">
              <li>Integrity</li>
              <li>Customer-Centricity</li>
              <li>Excellence</li>
              <li>Accountability</li>
              <li>Commitment</li>
            </ul>
          </div>

          <div className="card p-6">
            <h4 className="font-semibold text-logoBlueStart">What We Do</h4>
            <p className="mt-3 text-gray-600">
              We educate clients on best practices for managing risks, evaluate unique needs, offer expert advice, 
              and help navigate a variety of insurance options that promote sustainability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

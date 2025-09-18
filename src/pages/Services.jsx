import { motion } from 'framer-motion'
import { FaClipboardList, FaHandHoldingUsd, FaRegStar } from 'react-icons/fa'
import our_services from '../assets/our_services.jpg';
import HeroSection from '../components/Herosection';

const services = [
  {title: 'Risk Assessment', desc: 'We evaluate your specific risks and recommend suitable coverage tailored to your situation.', icon: <FaClipboardList />},
  {title: 'Claims Management & Advisory', desc: 'Support through the claims process, focused on timely and fair processing.', icon: <FaHandHoldingUsd />},
  {title: 'Policy Advice', desc: 'Helping clients choose and customize policies that match needs and budgets.', icon: <FaRegStar />}
]

export default function Services(){
  return (
    <div>
      <HeroSection heroImg={our_services} title={'Our Services'} text={''} page={'services'}/>

    <div className="py-16 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {services.map(s => (
          <motion.div key={s.title} whileHover={{y:-6}} className="card p-6 flex-1 hover:shadow-lg transition">
            <div className="text-logoBlueStart text-3xl mb-3">{s.icon}</div>
            <h4 className="font-semibold text-logoNavy">{s.title}</h4>
            <p className="mt-3 text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <section className="bg-lightGray p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-3 text-logoOrangeStart">Benefits of Insurance</h3>
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Financial Protection against costly repairs and replacements.</li>
          <li>Risk Mitigation for unpredictable events.</li>
          <li>Peace of Mind knowing your assets are protected.</li>
          <li>Business Continuity support for faster recovery.</li>
        </ul>
      </section>
    </div>
    </div>
  )
}

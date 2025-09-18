import { motion } from "framer-motion"
import HeroSection from "../components/Herosection"
import health from '../assets/personal_cover/health_insurance.jpg';
import international_health from '../assets/personal_cover/international_health.jpg'
import hero from '../assets/personal_cover/hero.jpg';
import travel from '../assets/personal_cover/travel.jpg';
import motor_insurance from '../assets/personal_cover/motor_insurance.jpg';
import funeral_insurance from '../assets/personal_cover/funeral_insurance.jpg'
const Corporate_insurace = ()=>{

    return(
        <div>
            <HeroSection page={'corporate_insurance'} title={'Personal Insurance Covers'} text={''} heroImg={hero}/>
           

         <section className="my-8 mx-4">

            <div className="flex md:flex-row w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">International Health Insurance</h4>
                            <p className="text-gray-600 mt-2"> Comprehensive medical coverage 
                                across multiple countries, ensuring access to quality healthcare 
                                regardless of your location. Allows access to an extensive network of international hospitals and clinics
                            </p>
                    </motion.div>

                    <div className="w-1/2">
                        <img src={international_health}  className='w-full h-full'/>
                    </div>
            </div>

        </section>

        <section className="my-8 mx-4 flex justify-end">

            <div className="flex md:flex-row-reverse w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">Health Insurance</h4>
                            <p className="text-gray-600 mt-2"> Provides financial protection against medical expenses incurred due to illness, injury, or other health-related issues.
                            </p>
                    </motion.div>

                    <div className="w-1/2">
                        <img src={health}  className='w-full h-full'/>
                    </div>
            </div>

        </section>

         <section className="my-8 mx-4">

            <div className="flex md:flex-row w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">Travel Cover</h4>
                            <p className="text-gray-600 mt-2"> Provides financial protection and assistance for unexpected events that may occur before or during your trip. It helps cover a range of risks associated with traveling, offering peace of mind and support when things don’t go as planned.
                            </p>
                    </motion.div>

                    <div className="w-1/2">
                        <img src={travel}  className='w-full h-full'/>
                    </div>
            </div>

        </section>

        <section className="my-8 mx-4 flex justify-end">

            <div className="flex md:flex-row w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">Motor Insurance Cover</h4>
                            <p className="text-gray-600 mt-2">Protects vehicle owners against financial losses resulting from accidents, theft, damage, or liability related to their motor vehicles.
                            </p>
                    </motion.div>

                    <div className="w-1/2">
                        <img src={motor_insurance}  className='w-full h-full'/>
                    </div>
            </div>

        </section>

         <section className="my-8 mx-4">

            <div className="flex md:flex-row w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl"> Funeral Cover</h4>
                            <p className="text-gray-600 mt-2">Life insurance specifically designed to cover the costs associated with a funeral, burial, cremation, or related final expenses.
                            </p>
                    </motion.div>

                    <div className="w-1/2">
                        <img src={funeral_insurance}  className='w-full h-full'/>
                    </div>
            </div>

        </section>
        </div>
    )
}

export default Corporate_insurace
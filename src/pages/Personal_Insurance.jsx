import { motion } from "framer-motion"
import HeroSection from "../components/Herosection"
import health from '../assets/personal_cover/health_insurance.jpg';
import international_health from '../assets/personal_cover/international_health.jpg'
import hero from '../assets/personal_cover/hero.jpg';
import travel from '../assets/personal_cover/travel.jpg';
import motor_insurance from '../assets/personal_cover/motor_insurance.jpg';
import funeral_insurance from '../assets/personal_cover/funeral_insurance.jpg'
import home_owners from '../assets/personal_cover/home_owners_insurance.jpg';

const InsuranceProduct = ({style,initial,title,desc,img})=>{
    return(
          <section className={style}>

            <div className="flex md:flex-row flex-col md:w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={initial} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="md:w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">{title}</h4>
                            <p className="text-gray-600 mt-2"> {desc}
                            </p>
                    </motion.div>

                    <div className="md:w-1/2">
                        <img src={img}  className='w-full h-full'/>
                    </div>
            </div>

        </section>
    )
}
const Personal_insurance = ()=>{

    return(
        <div>
            <HeroSection page={'corporate_insurance'} title={'Personal Insurance Covers'} text={''} heroImg={hero}/>

            <InsuranceProduct style="my-8 mx-4" initial={{opacity:0, x:-30}} title='International Health Insurance' desc={"Comprehensive medical coverage across multiple countries, ensuring access to quality healthcare regardless of your location. Allows access to an extensive network of international hospitals and clinics"} img={international_health}/>

            <InsuranceProduct style="my-8 mx-4 flex justify-end" initial={{opacity:0, x:30}} title='Health Insurance' desc={"Provides financial protection against medical expenses incurred due to illness, injury, or other health-related issues."} img={health}/>

            <InsuranceProduct style="my-8 mx-4" initial={{opacity:0, x:-30}} title='Travel Cover' desc={"Provides financial protection and assistance for unexpected events that may occur before or during your trip. It helps cover a range of risks associated with traveling, offering peace of mind and support when things don’t go as planned."} img={travel}/>

            <InsuranceProduct style="my-8 mx-4 flex justify-end" initial={{opacity:0, x:30}} title='Motor Insurance Cover' desc={"Protects vehicle owners against financial losses resulting from accidents, theft, damage, or liability related to their motor vehicles."} img={motor_insurance}/>
        

            <InsuranceProduct style="my-8 mx-4" initial={{opacity:0, x:30}} title={"Home-Owners and Households Contents"} desc={"Protect your home and the belongings inside it from damage, loss, or theft. It offers financial security against unexpected events that could otherwise result in significant out-of-pocket expenses"} img={home_owners}/>

            <InsuranceProduct style="my-8 mx-4 flex justify-end" initial={{opacity:0, x:-30}} title='Funeral Cover' desc={"Life insurance specifically designed to cover the costs associated with a funeral, burial, cremation, or related final expenses."} img={funeral_insurance}/>
        
        </div>
    )
}

export default Personal_insurance;
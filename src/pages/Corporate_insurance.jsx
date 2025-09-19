import { motion } from "framer-motion"
import HeroSection from "../components/Herosection"
import group_health from '../assets/corporate_cover/group_health_insurance-min.jpg';
import life_insurance from '../assets/corporate_cover/life_insurance.jpg';
import hero from '../assets/corporate_cover/hero.jpg';
import work_injury from '../assets/corporate_cover/work_injury-min.jpg'
import fire_insurance from '../assets/corporate_cover/fire_insurance-min.jpg';
import marine_insurance from '../assets/corporate_cover/marine_insurance.jpg'
import engineering_insurance from '../assets/corporate_cover/engineering_insurance-min.jpg'
import money_insurance from '../assets/corporate_cover/money_insurance.jpg';
import motor_insurance from '../assets/personal_cover/motor_insurance.jpg';
import liability_insurance from '../assets/corporate_cover/liability_insurance-min.jpg'

const InsuranceProduct = ({style,initial,title,desc,img,coverage,coverage_areas})=>{
    return(
          <section className={`${style} my-20 mx-4`} >

            <div className="flex md:flex-row flex-col md:w-3/4 items-center bg-cream shadow-2xl/30">
            
                    <motion.div initial={initial} whileInView={{opacity:1, x:0}} transition={{duration:1.2}} className="md:w-1/2 px-4">
                            <h4 className="font-semibold text-logoNavy text-3xl">{title}</h4>
                            <p className="text-gray-600 mt-2"> {desc}
                            </p>
                            {coverage?
                            <>
                            <h4 className="font-semibold text-logoNavy text-xl">{coverage}</h4>
                            <ul>{coverage_areas.map(area=><li>{area}</li>)}</ul>
                            </>
                           
                            :''}
                    </motion.div>

                    <div className="md:w-1/2">
                        <img  loading='lazy' src={img} className="w-full h-full"/>
                    </div>
            </div>

        </section>
    )
}
const Corporate_insurance = ()=>{

    return(
        <div>
            <HeroSection page={'corporate_insurance'} title={'Corporate Insurance Covers'} text={''} heroImg={hero}/>

          

            <InsuranceProduct style="flex justify-end" initial={{opacity:0, x:30}} title='Group Health Insurance' desc={"Health insurance plan provided by employers or organizations to cover their employees or members under a single policy."} img={group_health}/>

            <InsuranceProduct  initial={{opacity:0, x:-30}} title='Group life/Employee Benefits' desc={"Offers financial protection to the beneficiaries (usually family members) of the policyholder in the event of their death either by natural causes or accidents. This policy pays a lump sum or benefit to the family or other nominated beneficiaries of the employee upon their death."} img={life_insurance}/>

            <InsuranceProduct style="flex justify-end" initial={{opacity:0, x:30}} title='Work Injury Benefits Act' desc={"Designed to provide compensation to employees who suffer injuries or accidents during the course of their employment"} img={work_injury}/>

            <InsuranceProduct  initial={{opacity:0, x:-30}} title='Fire & Burglary Insurance' desc={"Property insurance plan that combines coverage for fire damage and theft or burglary. The policy helps to protect insured property and possessions from loss, destruction, or damage due to these risks."} coverage={'Key Coverage Areas'} coverage_areas={['Fire Damage','Theft or Burglary','Property Damage','Loss of Valuables']} img={fire_insurance}/>

            <InsuranceProduct style="flex justify-end" initial={{opacity:0, x:30}} title='Marine Insurance' desc={"cover the risks associated with the transportation of goods by sea, air, or land. It protects ships, cargo, and freight against damages, losses, and liabilities that may occur during transit."} coverage={'Key Coverage Areas'} coverage_areas={['Hull Insurance','Cargo Insurance','Freight Insurance','Liability Coverage','Protection & Indemnity (P&I) Insurance']} img={marine_insurance}/>

         

            <InsuranceProduct initial={{opacity:0, x:-30}} title='Engineering Insurance' desc={"Specialized insurance product designed to cover the risks associated with engineering projects, equipment, and construction activities. It safeguards against unforeseen damage, breakdowns, and losses during construction or operation of engineering-related assets."}  img={engineering_insurance}/>

            <InsuranceProduct style="flex justify-end" initial={{opacity:0, x:30}} title='Money Insurance' desc={"Cover provides financial protection to businesses against the loss of cash or valuables due to theft, robbery, or other covered events — whether on the premises or in transit."}  img={money_insurance}/>


            <InsuranceProduct initial={{opacity:0, x:-30}} title='Commercial Motor Insurance' desc={"Covers vehicles used for business purposes, protecting against losses from accidents, theft, or damage. It’s essential for companies that rely on transportation, delivery, or logistics."}  img={motor_insurance}/>
        
            <InsuranceProduct style="flex justify-end" initial={{opacity:0, x:30}} title='Liability Insurance' desc={"Financial protection for individuals or businesses against legal claims involving bodily injury, property damage, or professional negligence."}  img={liability_insurance}/>

        </div>
    )
}

export default Corporate_insurance;
import ProjectCover from "../project-cover/ProjectCover"
import { motion } from 'framer-motion'
import { LogoSmall, NuLogo, MpLogo, UglyLogo, PanLogo } from '../../assets/svg'
import './ProjectList.css'

const ProjectList = () => {
    return (
        <motion.div className='project-list'>
            <motion.div className='clients text-md'>
                <p>NUBANK</p>
                <p>MERCADO PAGO</p>
                <p>UGLY</p>
                <p>BANCO PAN</p>
            </motion.div>
            <div className='projects'> 
                <ProjectCover
                    title='Consumption <br /> Coach'
                    description="NuBank's personal financial manager."
                    logo={NuLogo}
                    backgroundColor='var(--nubank)'
                    brand='nubank'
                />
                <ProjectCover
                    title="Seller's admin <br /> Coach"
                    description='Launching of the MVP of the wallet.'
                    logo={MpLogo}
                    backgroundColor='var(--mp)'
                    brand='mp'
                />
                <ProjectCover
                    title='Design System <br /> and App Concept'
                    description='Launching of the MVP of the wallet'
                    logo={UglyLogo}
                    backgroundColor='var(--ugly)'
                    brand='ugly'
                />
                <ProjectCover
                    title='Design System <br /> and App Concept'
                    description='Launching of the MVP of the wallet'
                    logo={PanLogo}
                    backgroundColor='#EFEFEF'
                    brand='pan'
                />
            </div>

            <motion.img className='logo-small' src={LogoSmall} alt='logo' />
        </motion.div>
    )
}

export default ProjectList
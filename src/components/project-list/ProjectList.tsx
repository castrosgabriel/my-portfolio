import ProjectCover from "../project-cover/ProjectCover"
import { motion, useScroll, useTransform } from 'framer-motion'
import { LogoSmall, NuLogo, MpLogo, UglyLogo, PanLogo } from '../../assets/svg'
import './ProjectList.css'
import Carousel from "./Carousel"

const ProjectList = () => {
    const { scrollYProgress } = useScroll()
    const styleContainer = {
        y: useTransform(scrollYProgress, [0, 1], ['-5vh', '0vh']),
        height: useTransform(scrollYProgress, [0, 1], ['70vh', '100vh'])
    }
    const styleImage = {
        opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
        x: useTransform(scrollYProgress, [0.8, 1], ['-20vh', '0vw'])
    }

    return (
        <motion.div style={styleContainer} className='project-list'>
            <Carousel>
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
                    brand=""
                />
                <ProjectCover
                    title='Design System <br /> and App Concept'
                    description='Launching of the MVP of the wallet'
                    logo={UglyLogo}
                    backgroundColor='var(--ugly)'
                    brand=""

                />
                <ProjectCover
                    title='Design System <br /> and App Concept'
                    description='Launching of the MVP of the wallet'
                    logo={PanLogo}
                    backgroundColor='#EFEFEF'
                    brand=""
                />
            </Carousel>

            <motion.img style={styleImage} className='logo-small' src={LogoSmall} alt='logo' />
        </motion.div>
    )
}

export default ProjectList
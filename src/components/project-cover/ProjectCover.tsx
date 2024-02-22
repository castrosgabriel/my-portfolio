import BgImage from './BgImage'
import './ProjectCover.css'
import { motion } from 'framer-motion'

type ProjectCoverProps = {
    title: string
    description: string
    logo: string
    backgroundColor?: string
    brand: string
}

const ProjectCover = ({ title, description, logo, backgroundColor, brand }: ProjectCoverProps) => {

    return (
        <div style={{ background: backgroundColor }} className='cover-container'>
            <motion.div className='info'>
                <img height={56} src={logo} alt='logo' />
                <div className='title'>
                    <p className='text-md'>{description}</ p>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </motion.div>
            <BgImage brand={brand} />
        </div>
    )
}

export default ProjectCover
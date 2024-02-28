import ProjectCover from "../project-cover/ProjectCover"
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { LogoSmall } from '../../assets/svg'
import './ProjectList.css'
import { useEffect, useMemo, useRef, useState } from "react"
import { projectArray } from './projectArray'

const Dot = ({ active = false }) => {
    return (
        <svg className={`dot ${active && 'active'}`} width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
        </svg>
    )
}

const ProjectList = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0)
    const projectRefs = useRef(projectArray.map(() => useRef(null)))
    const projectsRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: projectsRef, offset: ['0 .8', '0 0'], })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0])

    const clientsAnimation = useAnimation()
    const pagContainerAnimation = useAnimation()
    const logoAnimation = useAnimation()

    const listIsInView = useInView(projectsRef, { margin: ' 0px 0px -50% 0px' })
    const isInViewArray = projectRefs.current.map(ref => useInView(ref, { margin: '-50% 0px -50% 0px' }))

    const initialPosition = useMemo(() => (listIsInView ? 0 : 100), [listIsInView])

    useEffect(() => {
        clientsAnimation.start({ y: -initialPosition })
        pagContainerAnimation.start({ x: initialPosition })
        logoAnimation.start({ x: -initialPosition })
    }, [initialPosition])

    useEffect(() => {
        isInViewArray.forEach((isInView, index) => {
            if (isInView) { setActiveProjectIndex(index) }
        });
    }, [isInViewArray]);

    return (
        <motion.div className='project-list'>
            <motion.div animate={clientsAnimation} style={{ y: -100 }} className='clients text-md'>
                {projectArray.map(project =>
                    <p key={project.title}>{project.brand.toUpperCase()}</p>)}
            </motion.div>
            <motion.div animate={pagContainerAnimation} style={{ x: 100 }} className='pag-container'>
                {projectArray.map((project, index) => (
                    <Dot key={index} active={index === activeProjectIndex} />
                ))}
            </motion.div>
            <motion.img animate={logoAnimation} style={{ x: -100 }} className='logo-small' src={LogoSmall} alt='logo' />
            <motion.div style={{ y: y }} ref={projectsRef} className='projects'>
                {projectArray.map((project, index) => (
                    <ProjectCover
                        ref={projectRefs.current[index]}
                        key={index}
                        active={index === activeProjectIndex}
                        title={project.title}
                        description={project.description}
                        logo={project.logo}
                        backgroundColor={project.backgroundColor}
                        brand={project.brand}
                        contentColor={project.contentColor}
                    />))}
            </motion.div>
        </motion.div>
    )
}

export default ProjectList
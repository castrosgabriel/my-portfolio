import ProjectCover from "../project-cover/ProjectCover"
import { LogoSmall } from '../../assets/svg'
import './ProjectList.css'
import { useLayoutEffect, useRef, useState } from "react"
import { projectArray } from './projectArray'
import gsap from 'gsap'

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
    const projectListRef = useRef(null)

    useLayoutEffect(() => {
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.project-list',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                pin: true,
                markers: true,
                snap: {
                    snapTo: 1 / (projectArray.length - 1),
                    duration: { min: 0.1, max: 0.5 },
                    delay: 0.2,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        const index = Math.round(scrollTl.progress() * (projectArray.length - 1))
                        setActiveProjectIndex(index)
                    }
                }
            },
        })

        scrollTl.to('.project-list', {
            ease: 'none',
        })
            .to('.projects', {
                y: -1900,
                ease: 'none',
            }, 0)


        return () => {
            scrollTl.kill()
        }
    }, [])


    return (
        <div className='project-list'>
            <div className='clients text-md'>
                {projectArray.map(project =>
                    <p key={project.title}>{project.brand.toUpperCase()}</p>)}
            </div>
            <div className='pag-container'>
                {projectArray.map((project, index) => (
                    <Dot key={index} active={index === activeProjectIndex} />
                ))}
            </div>
            <img className='logo-small' src={LogoSmall} alt='logo' />
            <div ref={projectListRef} className='projects'>
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
                        style={index !== activeProjectIndex ? { opacity: 0.5, transform: 'scale(.8)' } : {}}
                    />))}
            </div>
        </div>
    )
}

export default ProjectList
import React, { forwardRef, useEffect, useRef } from 'react'
import BgImage from './BgImage'
import './ProjectCover.css'
import { motion, useAnimation, useInView } from 'framer-motion'

type ProjectCoverProps = {
    active: boolean
    title: string
    description: string
    logo: string
    backgroundColor: string
    brand: string
    contentColor?: string
}

const MotionBgImage = motion(BgImage)

const ProjectCover = forwardRef(({
    active = false,
    title,
    description,
    logo,
    backgroundColor,
    contentColor = 'var(--foreground)',
    brand }: ProjectCoverProps, ref: React.Ref<HTMLDivElement>) => {

    const inViewRef = useRef(null)
    const isInView = useInView(inViewRef, { margin: '-300px 0px -300px 0px' })

    const animateLogo = useAnimation()
    const animateTitle = useAnimation()
    const animateDescription = useAnimation()
    const animateBg = useAnimation()

    const fullContainerStyle = {
        background: backgroundColor,
        opacity: active ? 1 : 0.4,
        scale: active ? 1 : 0.8,
    }

    useEffect(() => {
        if (isInView) {
            animateLogo.start({
                opacity: 1, y: 0,
                transition: { duration: .5, ease: 'easeInOut', delay: 0.2, }
            })
            animateDescription.start({
                opacity: 1, y: 0,
                transition: { duration: .5, ease: 'easeInOut', delay: 0.4, }
            })
            animateTitle.start({
                opacity: 1, y: 0,
                transition: { duration: .5, ease: 'easeInOut', delay: 0.6, }
            })
            animateBg.start({
                opacity: 1, x: 0,
                transition: { duration: .5, ease: 'easeInOut', delay: 0.6, }
            })
        }

        else {
            animateLogo.start({ opacity: 0, y: 30 })
            animateDescription.start({ opacity: 0, y: 30 })
            animateTitle.start({ opacity: 0, y: 30 })
            animateBg.start({ opacity: 0, x: 100 })
        }
    }, [isInView]);

    return (
        <motion.div ref={ref} style={fullContainerStyle} className='cover-container'>
            <motion.div ref={inViewRef} className='info'>
                <motion.img animate={animateLogo} style={{ opacity: 0, y: 30 }} height={56} src={logo} alt='logo' />
                <div className='title'>
                    <motion.p style={{ y: 30, color: contentColor, opacity: 0 }} animate={animateDescription} className='text-md'>{description}</ motion.p>
                    <motion.h2 style={{ y: 30, color: contentColor, opacity: 0 }} animate={animateTitle} dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </motion.div>
            <MotionBgImage animate={animateBg} style={{ opacity: 0, x: 100 }} brand={brand} />
        </motion.div>
    )
})

export default ProjectCover
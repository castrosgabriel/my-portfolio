import React, { forwardRef } from 'react'
import BgImage from './BgImage'
import './ProjectCover.css'

type ProjectCoverProps = {
    active: boolean,
    title: string,
    description: string,
    logo: string,
    backgroundColor: string,
    brand: string,
    contentColor?: string
    style: React.CSSProperties
}

const ProjectCover = forwardRef(({
    active = true,
    title,
    style,
    description,
    logo,
    backgroundColor,
    contentColor = 'var(--foreground)',
    brand }: ProjectCoverProps, ref: React.Ref<HTMLDivElement>) => {


    return (
        <div ref={ref}  style={{ ...style, backgroundColor: backgroundColor }} className='cover-container'>
            <div className='info'>
                <img height={56} src={logo} alt='logo' />
                <div style={{ color: contentColor }} className='title'>
                    <p className='text-md'>{description}</p>
                    <h2 style={{ color: contentColor }} dangerouslySetInnerHTML={{ __html: title }} />
                </div>
            </div>
            <BgImage brand={brand} />
        </div>
    )
})

export default ProjectCover
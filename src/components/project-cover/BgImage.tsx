import React, { forwardRef } from 'react'
import { Nu1, Nu2, Mp, Pan, Ugly } from '../../assets/png'
import './ProjectCover.css'

const appNuFirst = {
    borderRadius: `var(--4)`,
    boxShadow: `0px 4px 75.3px 0px rgba(0, 0, 0, 0.21)`,
    transform: `rotate(-30deg) translateX(420px) translateY(200px)`
}

const appNuSecond = {
    borderRadius: 'var(--4)',
    boxShadow: '0px 4px 75.3px 0px rgba(0, 0, 0, 0.21)',
    transform: 'rotate(-30deg) translateX(280px) translateY(250px)'
}

interface BgImageProps {
    brand: string
}

const BgImage = forwardRef(({ brand }: BgImageProps, ref: React.Ref<HTMLDivElement>) => {
    switch (brand) {
        case 'nubank':
            return (
                <div ref={ref} className='image-project'>
                    <img style={appNuFirst} width={375} src={Nu1} />
                    <img style={appNuSecond} width={375} src={Nu2} />
                </div>
            );
        case 'mercado pago':
            return (
                <div ref={ref} className='image-project'>
                    <img src={Mp} width={'100%'} />
                </div>
            );
        case 'ugly':
            return (
                <div ref={ref} className='image-project'>
                    <img src={Ugly} width={'100%'} />
                </div>
            );
        case 'banco pan':
            return (
                <div ref={ref} className='image-project'>
                    <img src={Pan} width={'100%'} />
                </div>
            )
        default:
            return null;
    }
})

export default BgImage;
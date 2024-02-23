import { Nu1, Nu2 } from '../../assets/png'
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

const BgImage = ({ brand }: BgImageProps) => {
    switch (brand) {
        case 'nubank':
            return (
                <div className='image-project'>
                    <img style={appNuFirst} width={375} src={Nu1} alt='nu-1' />
                    <img style={appNuSecond} width={375} src={Nu2} alt='nu-2' />
                </div>
            );
        case 'mp':
            return (
                <div className='image-project'>
                </div>
            );
        case 'ugly':
            return (
                <div className='image-project'>
                </div>
            );
        case 'pan':
            return (
                <div className='image-project'>
                </div>
            )
        default:
            return null;
    }
}

export default BgImage;
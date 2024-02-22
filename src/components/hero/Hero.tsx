import './Hero.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Profile } from '../../assets/png';
import { motion, useTransform, useScroll } from 'framer-motion';
import LogoAnimation from '../../assets/lottie/logo-animation.json';

const Hero = () => {
    const { scrollYProgress } = useScroll()
    const styleMenu = { opacity: useTransform(scrollYProgress, [0, 1], [1, 0]) }
    const styleFooter = { width: useTransform(scrollYProgress, [0, 1], ['100%', '78%']) }
    const styleContainer = {
        y: useTransform(scrollYProgress, [0, 1], ['0', '40vh']),
        height: '100vh'
    }
    const styleLogo = {
        opacity: useTransform(scrollYProgress, [0, .6], [1, 0]),
        y: useTransform(scrollYProgress, [0, 1], ['0vw', '20vw'])
    }
    const styleLocal = {
        width: useTransform(scrollYProgress, [0, 1], ['100%', '140%']),
        y: useTransform(scrollYProgress, [0, 1], ['0vw', '4vw']),
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0])
    }

    return (
        <motion.div style={styleContainer} className='hero-container'>
            <div className='hero'>
                <motion.div style={styleLogo} className='logo'>
                    <div className='image-wrapper'>
                        <img className='img-box' src={Profile} alt='profile' />
                    </div>
                    <Player className='lottie' src={LogoAnimation} autoplay />
                </motion.div>
                <motion.div style={styleLocal} className='local-wrapper'>
                    <p className='text-md'>SÃO PAULO</p>
                    <p className='text-md'>SAN FRANCISCO</p>
                    <p className='text-md'>BUENOS AIRES</p>
                </motion.div>
                <motion.div style={styleFooter} className='footer'>
                    <div className='role-wrapper'>
                        <h1>PRODUCT</h1>
                        <h1>DESIGN</h1>
                    </div>
                    <motion.div style={styleMenu} className='bottom text-sm'>
                        <p>Copyright © 2024 </p>
                        <div className='menu-wrapper'>
                            <p>LINKED IN</p>
                            <p>ABOUT ME</p>
                            <p>LET'S TALK</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Hero;
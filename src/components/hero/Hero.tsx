import './Hero.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Profile } from '../../assets/png';
import { motion, useScroll, useTransform } from 'framer-motion';
import LogoAnimation from '../../assets/lottie/logo-animation.json';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['1 1', '1 0'] });
    const containerStyle = {
        y: useTransform(scrollYProgress, [0, .6], ['0vh', '-60vh'])
    }
    const roleStyle = {
        width: useTransform(scrollYProgress, [0, 1], ['100%', '78%'])
    }
    const logoStyle = {
        y: useTransform(scrollYProgress, [0, 1], [0, 300]),
        opacity: useTransform(scrollYProgress, [0, .5], [1, 0])
    }
    const locationStyle = {
        width: useTransform(scrollYProgress, [0, 1], ['100%', '200%']),
        opacity: useTransform(scrollYProgress, [0, .4], [1, 0])
    }
    const menuStyle = {
        opacity: useTransform(scrollYProgress, [0, .5], [1, 0]),
        y: useTransform(scrollYProgress, [0, 1], [0, 300])
    }

    return (
        <motion.div className='hero-container'>
            <div ref={ref} style={{ width: '100vw', height: '100vh' }}></div>
            <motion.div style={containerStyle} className='hero'>
                <motion.div style={logoStyle} className='logo'>
                    <div className='image-wrapper'>
                        <img className='img-box' src={Profile} alt='profile' />
                    </div>
                    <Player className='lottie' src={LogoAnimation} autoplay />
                </motion.div>
                <motion.div style={locationStyle} className='local-wrapper text-md'>
                    <p>SÃO PAULO</p>
                    <p>SAN FRANCISCO</p>
                    <p>BUENOS AIRES</p>
                </motion.div>
                <motion.div className='footer'>
                    <motion.div style={roleStyle} className='role-wrapper'>
                        <h1>PRODUCT</h1>
                        <h1>DESIGN</h1>
                    </motion.div>
                    <motion.div style={menuStyle} className='bottom text-sm'>
                        <p>Copyright © 2024 </p>
                        <motion.div className='menu-wrapper'>
                            <p>LINKED IN</p>
                            <p>ABOUT ME</p>
                            <p>LET'S TALK</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Hero;
import './Hero.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Profile } from '../../assets/png';
import { motion } from 'framer-motion';
import LogoAnimation from '../../assets/lottie/logo-animation.json';

const Hero = () => {
    return (
        <motion.div className='hero-container'>
            <div className='hero'>
                <motion.div className='logo'>
                    <div className='image-wrapper'>
                        <img className='img-box' src={Profile} alt='profile' />
                    </div>
                    <Player className='lottie' src={LogoAnimation} autoplay />
                </motion.div>
                <motion.div className='local-wrapper text-md'>
                    <p>SÃO PAULO</p>
                    <p>SAN FRANCISCO</p>
                    <p>BUENOS AIRES</p>
                </motion.div>
                <motion.div className='footer'>
                    <div className='role-wrapper'>
                        <h1>PRODUCT</h1>
                        <h1>DESIGN</h1>
                    </div>
                    <motion.div className='bottom text-sm'>
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
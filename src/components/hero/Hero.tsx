import './Hero.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Profile } from '../../assets/png';
import LogoAnimation from '../../assets/lottie/logo-animation.json';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Hero = () => {

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const start = gsap.timeline();
        start.from('.logo', {
            y: 100,
            opacity: 0,
            ease: 'power3.inOut'
            }, 0)
            .to('.logo', {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power3.inOut'
            }, 0)
            .from('h1', {
                y: -50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.inOut'
            }, 0)
            .to('h1', {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: 'power3.inOut'
            }, 0)
            .from('p', {
                y: 50,
                opacity: 0,
            }, 0)
            .to('p', {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: 'power3.inOut'
            }, 0);

        const scroll = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'bottom bottom',
                end: '200% bottom',
                scrub: 1,
                // markers: true,
                snap: {
                    snapTo: 1, 
                    duration: {min: 0, max: 0.8}, 
                    ease: 'power3.inOut'
                }
            }
        });

        scroll.to('.logo', {
            duration: .8,
            y: 600,
            opacity: 0,
            ease: 'power3.Out'
        })
            .to('.local-wrapper', {
                duration: .2,
                width: '200%',
                y: 100,
                opacity: 0,
                ease: 'none'
            }, 0)
            .to('.role-wrapper', {
                duration: .7,
                width: '78%',
            }, 0)
            .to('.role-wrapper', {
                duration: 1,
                y: '40vh',
                ease: 'power3.inOut'
            }, .4)
            .to('.bottom p', {
                duration: .2,
                opacity: 0,
                y: 100,
                ease: 'none',
                stagger: .1
            }, .2)

            return () => {
                start.kill();
                scroll.kill();
            }
    }, []);

    return (
        <div className='hero-container'>
            <div className='hero'>
                <div className='logo'>
                    <div className='image-wrapper'>
                        <img className='img-box' src={Profile} alt='profile' />
                    </div>
                    <Player className='lottie' src={LogoAnimation} autoplay />
                </div>
                <div className='local-wrapper text-md'>
                    <p>SÃO PAULO</p>
                    <p>SAN FRANCISCO</p>
                    <p>BUENOS AIRES</p>
                </div>
                <div className='footer'>
                    <div className='role-wrapper'>
                        <h1 className='word'>PRODUCT</h1>
                        <h1 className='word'>DESIGN</h1>
                    </div>
                    <div className='bottom text-sm'>
                        <p>Copyright © 2024 </p>
                        <div className='menu-wrapper'>
                            <p>LINKED IN</p>
                            <p>ABOUT ME</p>
                            <p>LET'S TALK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
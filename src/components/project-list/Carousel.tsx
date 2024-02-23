import { ReactNode, useState, FC, Children, useRef, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const Dot = ({ active = false }) => {
    return (
      <svg className={`dot ${active && 'active'}`} width="16" height="16" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8" />
      </svg>
    )
  }

  const Pagination = () => {
    return (
      <div className='pag-container'>
        {Children.map(children, (_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </div>
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollTop } = carouselRef.current;
        const slideHeight = carouselRef.current.clientHeight;
        const newIndex = Math.ceil(scrollTop / slideHeight);
        console.log(newIndex);
        setActiveIndex(newIndex);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='carousel-container'>
      <div className='carousel-inner' ref={carouselRef}>
        {Children.map(children, (child, index) => (
          <div className={`carousel-item`} key={index}>
            {child}
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Carousel;
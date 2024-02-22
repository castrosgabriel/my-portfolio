import { ReactNode, useState, FC, Children, useRef, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const slideHeight = container.scrollHeight / children.length;

        const newIndex = Math.floor(scrollPosition / slideHeight);
        setActiveIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [children]);


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

  // const goToPrevSlide = () => {
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? children.length - 1 : prevIndex - 1
  //   );
  // };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div onClick={goToNextSlide} className="carousel-container">
      <div className="carousel-inner" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
        {Children.map(children, (child, index) => (
          <div className={
            `carousel-item 
            ${index > activeIndex && 'next'} 
            ${index < activeIndex && 'prev'}
            `} key={index}>
            {child}
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Carousel;
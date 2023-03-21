import { CarouselContainer, CarouselContent, Inner, Item } from './styles';
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Makeup1 from '../../assets/ImagesMakeup/makeup1.jpg';
import Makeup2 from '../../assets/ImagesMakeup/makeup2.jpg';
import Makeup4 from '../../assets/ImagesMakeup/makeup4.jpg';
import Makeup5 from '../../assets/ImagesMakeup/makeup5.jpg';
import Makeup6 from '../../assets/ImagesMakeup/makeup6.jpg';
import Makeup7 from '../../assets/ImagesMakeup/makeup7.jpg';
import Makeup8 from '../../assets/ImagesMakeup/makeup8.jpg';
import Makeup9 from '../../assets/ImagesMakeup/makeup9.jpg';

const makeups = [
    Makeup1,
    Makeup2,
    Makeup4,
    Makeup5,
    Makeup6,
    Makeup7,
    Makeup8,
    Makeup9,
]

export function CarouselMakeup() {
    const carousel = useRef<null | HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(carousel?.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    return (
        <CarouselContainer as={motion.div}>
            <CarouselContent ref={carousel} as={motion.div} whileTap={{ cursor: 'grabbing' }} >
                <Inner 
                    as={motion.div} 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {makeups.map((makeup) => 
                        <Item key={makeup}>
                            <img src={makeup} />
                        </Item>
                    )}
                </Inner>
            </CarouselContent>
        </CarouselContainer>
    )
}
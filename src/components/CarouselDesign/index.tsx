import { CarouselContainer, CarouselContent, Inner, Item } from './styles';
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import Sobrancelha1 from '../../assets/ImagesDesign/Sobrancelha1.jpg';
import Sobrancelha2 from '../../assets/ImagesDesign/Sobrancelha2.jpg';
import Sobrancelha3 from '../../assets/ImagesDesign/Sobrancelha3.jpg';
import Sobrancelha4 from '../../assets/ImagesDesign/Sobrancelha4.jpg';
import Sobrancelha5 from '../../assets/ImagesDesign/Sobrancelha5.jpg';
import Sobrancelha6 from '../../assets/ImagesDesign/Sobrancelha6.jpg';
import Sobrancelha7 from '../../assets/ImagesDesign/Sobrancelha7.jpg';
import Sobrancelha8 from '../../assets/ImagesDesign/Sobrancelha8.jpg';
import Sobrancelha9 from '../../assets/ImagesDesign/Sobrancelha9.jpg';
import Sobrancelha10 from '../../assets/ImagesDesign/Sobrancelha10.jpg';
import Sobrancelha11 from '../../assets/ImagesDesign/Sobrancelha11.jpg';

const sobrancelhas = [
    Sobrancelha1,
    Sobrancelha2,
    Sobrancelha3,
    Sobrancelha4,
    Sobrancelha5,
    Sobrancelha6,
    Sobrancelha7,
    Sobrancelha8,
    Sobrancelha9,
    Sobrancelha10,
    Sobrancelha11,
]

export function CarouselDesign() {
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
                    {sobrancelhas.map((sobrancelha) => 
                        <Item key={sobrancelha}>
                            <img src={sobrancelha} />
                        </Item>
                    )}
                </Inner>
            </CarouselContent>
        </CarouselContainer>
    )
}
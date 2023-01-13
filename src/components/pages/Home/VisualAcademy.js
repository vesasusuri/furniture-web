import React from 'react';
import './styles/visualAcademy.scss'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'
import { AcademyData } from './data';
import { BsArrowUpRight } from 'react-icons/bs';
import StyledLink from '../../shared/StyledLink/StyledLink';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500, itemsToShow: 2 },
    { width:650, itemsToShow: 3 },
    { width:800, itemsToShow: 4 }
];

const VisualAcademy = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };

    return(
        <div className='visualkos-academy-component'>
            <div className="logo" data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='learn-with-us' defaultMessage='Learn with us' />
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='visualkos-academy-text' 
                defaultMessage="Have you ever wondered what a successful brand is and how to build one? Here's you chance to learn with Visualkos Academy." />
            </p>

            <Carousel className="slider styled-arrows" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                    {AcademyData.map((props) => {
                        return(
                           <div className={`slider-item ${props.cls}`} data-aos='flip-left'>
                               <div className="bg"></div>
                               <div className="inner-item">
                                   <div className="img" style={{background: `url(${props.img})`}}></div>
                                   <div className="top"></div>
                                   <div className="info">
                                       <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                       <Link to={props.to}>
                                           <h6>{props.link}</h6>
                                           <div className="circle"><BsArrowUpRight /></div>
                                       </Link>
                                   </div>
                               </div>
                           </div> 
                        )
                    })}
            </Carousel>

            <div className="link-container">
                <StyledLink 
                    to='/'
                    link={<FormattedMessage id='learn-more' defaultMessage='Learn More' />}
                />
            </div>
        </div>
    ) 
};

export default VisualAcademy;

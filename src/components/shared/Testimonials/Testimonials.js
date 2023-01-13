import React from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'react-elastic-carousel'
import { Data1 } from './data';
import { ImQuotesLeft } from 'react-icons/im';
import './Testimonials.scss'
import StyledLink from '../StyledLink/StyledLink';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:700, itemsToShow: 2 }
];

const Testimonials = () => {

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
        <div className='shared-testimonials'>
            <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='testimonials1' defaultMessage='Testimonials' />
            </h5>
            <div className="line1"></div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='shared-testimonials-title' 
                defaultMessage='What our clients have to say' />
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='p'>
                <FormattedMessage id='shared-testimonials-description' 
                defaultMessage='We have helped thousands of brands worldwide' />
            </p>
            <Carousel className="slider styled-arrows" 
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                    {Data1.map((props) => {
                        return(
                            <div className="slider-item" data-aos='flip-left'>
                                <div className="bg"></div>
                                <div className="main">
                                    <div className="top">
                                        <div className="quote">
                                            <ImQuotesLeft />
                                        </div>
                                        <p>{props.comment}</p>
                                    </div>
                                    <div className="bottom">
                                        <div className="line2"></div>
                                        <h6>{props.name}</h6>
                                        <small>{props.job}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Carousel>

            <div className="link-container">
                <StyledLink 
                    to='/'
                    link={<FormattedMessage id='view-all' defaultMessage='View All' />}
                />
            </div>
        </div>
    )  
};

export default Testimonials;

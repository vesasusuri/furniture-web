import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './OurBlog.scss'
import Carousel from 'react-elastic-carousel'
import { Data1 } from './data';
import { BsArrowUpRight } from 'react-icons/bs';
import StyledLink from '../StyledLink/StyledLink';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:600, itemsToShow: 2 },
    { width:850, itemsToShow: 3 }
];

const OurBlog = () => {

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
        <div className='our-blog-component'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='visualkos-blog' defaultMessage='Visualkos Blog' />
            </h1>

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
                                <div className="img-container">
                                    <div className="img" style={{content: `url(${props.img})`}}></div>
                                </div>
                                <div className="category">{props.category}</div>
                                <div className="text">
                                    <div className="date">{props.date}</div>
                                    <Link to={props.to} className="inline">
                                        <h6>{props.title}</h6>
                                        <div className="circle"><BsArrowUpRight /></div>
                                    </Link>
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

export default OurBlog;

import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const HomeItem = (props) => {
    return(
        <div className='home-item'>
            <div className={`logo ${props.cls}`} style={{content: `url(${props.logo})`}} ></div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <Link to={props.to}>
                <FormattedMessage id='learn-more' defaultMessage='Learn More' />
                <div className="circle"><BsArrowUpRight /></div>
            </Link>
        </div>
    )
};

export default HomeItem;

import React from 'react'
import './styles/WhatWeOffer.scss'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Data1 } from './data'
import { BsArrowUpRight } from 'react-icons/bs'
import StyledLink from '../../shared/StyledLink/StyledLink'

const WhatWeOffer = () => {
    return (
        <div className='what-we-offer-component'>
            <div className="col col1" data-aos='zoom-in-up'>
                <h1><FormattedMessage id='what-we-do' defaultMessage='What we do' /></h1>
                <p className="p">
                    <FormattedMessage id='what-we-offer-text' defaultMessage="We offer extraordinary solutions to transform your business and help you grow." />
                </p>
                <div className='features'>
                    <FormattedMessage id='services' defaultMessage='Services' />
                </div>
            </div>
            {Data1.map((props) => {
                return(
                    <div className={`col col2 ${props.cls}`}>
                        <div className="bg"></div>
                        <div className="bg bg2"></div>
                        <div className="bg bg3"></div>

                        <div className="dash dash1"></div>
                        <div className="dash dash2"></div>
                        <div className="dash dash3"></div>
                        <div className="dash dash4"></div>

                        <div className="inner-col">
                            <div className="icon" style={{content: `url(${props.icon})`}}></div>
                            <h6>{props.title}</h6>
                            <p>{props.text}</p>
                            <div className="link">
                                <Link to={props.to}><BsArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="main-link">
                <StyledLink 
                    to='/'
                    link={<FormattedMessage id='learn-more' defaultMessage='Learn More' />}
                />
            </div>
        </div>
    )
}

export default WhatWeOffer

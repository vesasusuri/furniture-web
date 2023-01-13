import React from 'react'
import './styles/partnerships.scss'
import { FormattedMessage } from 'react-intl'
import { PartnersData } from './data'
import { Link } from 'react-router-dom'

const Partnerships = () => {
    return (
        <div className='partnership-items'>
            <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='partnerships' defaultMessage='Partnerships' />
            </h5>
            <div className="line" data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='home-partnerships-title' defaultMessage='WE WORK CLOSELY WITH OUR FRIENDS' />
            </h1>
            {PartnersData.map((props) => {
                return(
                    <div className={`row ${props.row}`}>
                        <div className="info">
                            <div className="logo logo1" style={{content: `url(${props.logo})`}}></div>
                            <div className="logo logo2" style={{content: `url(${props.darklogo})`}}></div>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            <Link to={props.to}>
                                <FormattedMessage id='learn-more' defaultMessage='Learn More' />
                            </Link>
                        </div>
                        <div className="img-container" data-aos='zoom-in-up'>
                            <div className="bg"></div>
                            <div className="img" style={{content: `url(${props.img})`}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Partnerships
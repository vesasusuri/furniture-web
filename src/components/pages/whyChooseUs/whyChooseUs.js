import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Data3 } from './data'
import './styles/whyChooseUs.scss'
const WhyChooseUs = () => {
    return (
        <div className='why-choose-us'>

            <div className="inline flex-box">
                <div className="block1">
                    <h1 data-aos='zoom-in-up'>
                        <FormattedMessage id='why-choose-us?' 
                        defaultMessage='Why Choose Us?' />
                    </h1>
                    <p className="shared-text">
                        <FormattedMessage id='home-why-directAds-description1' 
                        defaultMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    </p>
                </div>
            </div>

            <div className="items">
                {Data3.map((props) => {
                    return(
                        <div className="item" key={props.id}>
                            <div className="icon" style={{content: `url(${props.icon})`}}></div>
                            <div className="block">
                                <h6 data-aos="fade-left" data-aos-easing="ease-in-sine">
                                    {props.title}
                                </h6>
                                <p>{props.text}</p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhyChooseUs
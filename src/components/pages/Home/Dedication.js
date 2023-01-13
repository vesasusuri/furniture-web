import React from 'react'
import './styles/dedication.scss'
import { FormattedMessage } from 'react-intl'

const Data = [
    {
        cls:'cls1',
        text:<FormattedMessage id='desig-value' defaultMessage='Design Value' />
    },
    {
        cls:'cls2',
        text:<FormattedMessage id='powerful-brand' defaultMessage='Powerful Brand' />
    },
    {
        cls:'cls3',
        text:<FormattedMessage id='sustainability' defaultMessage='Sustainability' />
    },
    {
        cls:'cls4',
        text:<FormattedMessage id='uniqueness' defaultMessage='Uniqueness' />
    },
    {
        cls:'cls5',
        text:<FormattedMessage id='story' defaultMessage='Story' />
    },
    {
        cls:'cls6',
        text:<FormattedMessage id='creativity' defaultMessage='Creativity' />
    },
    {
        cls:'cls7',
        text:<FormattedMessage id='unforgettable-experiences' defaultMessage='Unforgettable Experiences' />
    }
]

const Dedication = () => {
    return (
        <div className='dedication-component'>
            <h5 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='dedication' defaultMessage='Dedication' />
            </h5>
            <div className="line1" data-aos='fade-right'></div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='home-dedication-title' 
                    defaultMessage='We can shape your vision' />
            </h1>
            <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='home-dedication-text' 
                    defaultMessage='Powered by skills, fueled by creativity and driven by good design.' />
            </p>
            <div className="inner-row">
                <div className="left">
                    <h2>
                        <FormattedMessage id='home-dedication-subtitle' 
                            defaultMessage="Join the world's greatest brands with a superior design" />
                    </h2>
                    <p>
                        <FormattedMessage id='home-dedication-description' 
                            defaultMessage='We use a number of methodologies to address specific projects and challenges. We use design expertise to transform ideas into images that ignite emotion, create brand cultures, and create value.' />
                    </p>
                </div>
                <div className="items">
                    {Data.map((props) => {
                        return(
                            <div className={`item ${props.cls}`} data-aos='flip-left'>
                                <div className="bg"></div>
                                <div className="inner-item">
                                    {props.text}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dedication
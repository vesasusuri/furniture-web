import React from 'react'
import { FormattedMessage } from 'react-intl'
import './styles/workWithUs.scss'
import StyledLink from '../../shared/StyledLink/StyledLink'

const WorkWithUs = () => {
    return (
        <div className='work-with-us'>
            <div className="bg1"></div>
            <div className="info">
                <h2>
                    <FormattedMessage id='home-workWithUs-title' 
                    defaultMessage='We understand the art of design' />
                </h2>
                <h1>
                    <FormattedMessage id='home-workWithUs-subtitle' 
                    defaultMessage='Work with us on your next challenge' />
                </h1>
                <div className="link-container">
                    <StyledLink 
                        to='/'
                        link={<FormattedMessage id='get-started' defaultMessage='Get Started' />}
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
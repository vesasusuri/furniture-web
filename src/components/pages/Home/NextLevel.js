import React from 'react'
import './styles/nextLevel.scss'
import { FormattedMessage } from 'react-intl'
import StyledLink from '../../shared/StyledLink/StyledLink'

const NextLevel = () => {
    return (
        <div className='next-level-component'>
            <div className="bg1"></div>
            <div className="text">
                <h1>
                    <FormattedMessage id='home-next-level-title' 
                    defaultMessage='Take your visuals to the next level now'/>
                </h1>
                <p>
                    <FormattedMessage id='home-next-level-text' 
                    defaultMessage='Let us give your company creativity and attraction it deserves'/>
                </p>
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

export default NextLevel
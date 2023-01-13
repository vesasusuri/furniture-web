import React from 'react'
import './styles/gameArt.scss'
import { FormattedMessage } from 'react-intl'
import StyledLink from '../../shared/StyledLink/StyledLink'

const GameArt = () => {
    return (
        <div className='game-art'>
            <div className="bg1"></div>
            <div className="text">
                <h1>
                    <FormattedMessage id='game-art' defaultMessage='Game Art'/>
                </h1>
                <p>
                    <FormattedMessage id='game-art-text' 
                    defaultMessage='We create unique handcrafted art works. We offer a full range of video game art and development services for entertainment projects.'/>
                </p>
                <div className="link-container">
                    <StyledLink 
                        to='/'
                        link={<FormattedMessage id='learn-more' defaultMessage='Learn More' />}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default GameArt
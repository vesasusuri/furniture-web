import React from 'react'
import './TrustedBy.scss'
import { FormattedMessage } from 'react-intl'
import { Data1 } from './data'

const TrustedBy = () => {
    return (
        <div className='shared-trusted-by'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='trusted-by' defaultMessage='trusted by' />
            </h1>
            <div className="logos" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data1.map((props) => {
                    return(
                    <div className="logo-container">
                        <div className="logo logo1" style={{content: `url(${props.logo})`}}></div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TrustedBy

import React from 'react'
import './modernDesign.scss'
import { FormattedMessage } from 'react-intl'
import { Data4 } from './data'
import pic1  from "../../../assets/Home/Group 6.png"
const ModernDesign = () => {
    return (
        <div className='flex-box grow-customers'>
            <img src={pic1} className="img"/>
            <div className="items">
               <h1><FormattedMessage id='modern-interior-design' defaultMessage='We Help You Make Modern Interior Design' /></h1>
                {Data4.map((props) => {
                    return(
                        <div className="item" key={props.id}>
                            <div className="icon">{props.icon}</div>
                            <p className='shared-text'>{props.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ModernDesign
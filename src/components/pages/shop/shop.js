import React from "react";
import { FormattedMessage } from "react-intl";
import "./styles/shop.scss";
import { Data1 } from './data'
import StyledLink from '../../shared/StyledLink/StyledLink'

const Shop = () => {
  return (

    <div className='shop'>
            <div className="col col1" data-aos='zoom-in-up'>
                <h1><FormattedMessage id='what-we-do' defaultMessage='Why we are the best in the town' /></h1>
                <p className="p">
                    <FormattedMessage id='what-we-offer-text' defaultMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
                </p>
                <div className="main-link">
                <StyledLink 
                    to='/'
                    link={<FormattedMessage id='explore' defaultMessage='Explore' />}
                />
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
                        </div>
                    </div>
                )
            })}
            
        </div>
  );
};
export default Shop;

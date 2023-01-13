import React from 'react'
import './Services.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { PanelData, TabData } from './data'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Services = () => {
    return (
        <div className='shared-explore-services'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='explore-services-title' 
                defaultMessage='Explore our variety of services' />
            </h1>
            <Tabs className='tabs'>
                <TabList>
                    <div className="list">
                        {TabData.map((props) => {
                            return(
                                <Tab>
                                    <div className="icon-container">
                                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    </div>
                                    <span>{props.text}</span>
                                </Tab>
                            )
                        })}
                    </div>
                    <div className="link">
                        <Link to='/'>
                            <FormattedMessage id='view-all-services' defaultMessage='View All Services' />
                            <BsArrowUpRightCircle />
                        </Link>
                    </div>
                </TabList>
                <div className="tab-panel">
                    {PanelData.map((props) => {
                        return(
                            <TabPanel>
                                <div className="title">
                                    <h6>{props.title}</h6>
                                </div>
                                <div className="row">
                                    <div className="left">
                                        <p>{props.text}</p>
                                        <Link to={props.to}>
                                            <FormattedMessage id='learn-more' defaultMessage='Learn More' />
                                        </Link>
                                    </div>
                                    {props.items ? <div className="items">
                                        {props.items.map((l) => {
                                            return(
                                                <div className="item">
                                                    <div className="icon-container">
                                                        <div className="icon icon-pink" style={{content: `url(${l.pink})`}}></div>
                                                        <div className="icon icon-red" style={{content: `url(${l.red})`}}></div>
                                                        <div className="icon icon-green" style={{content: `url(${l.green})`}}></div>
                                                        <div className="icon icon-blue" style={{content: `url(${l.blue})`}}></div>
                                                        <div className="circle"></div>
                                                    </div>
                                                    <span>{l.item}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    : null}
                                </div>
                            </TabPanel>
                        )
                    })}
                </div>
            </Tabs>
        </div>
    )
}

export default Services
import React from 'react'
import { FormattedMessage } from 'react-intl'
import './OurWork.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Data } from './data'

const OurWork = () => {
    return (
        <div className='shared-our-work'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='our-work' defaultMessage='Our work' />
            </h1>
            <Tabs className='tabs'>
                <TabList data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                   <Tab><FormattedMessage id='all' defaultMessage='All' /></Tab>
                   <Tab><FormattedMessage id='graphic-design' defaultMessage='Graphic Design' /></Tab>
                   <Tab><FormattedMessage id='video-production' defaultMessage='Video Production' /></Tab>
                   <Tab><FormattedMessage id='branding' defaultMessage='Branding' /></Tab>
                   <Tab><FormattedMessage id='photography' defaultMessage='Photography' /></Tab>
                   <Tab><FormattedMessage id='3d-artwork' defaultMessage='3D Artwork' /></Tab>
                   <Tab><FormattedMessage id='animation' defaultMessage='Animation' /></Tab>
                   <Tab><FormattedMessage id='videogame-design' defaultMessage='Videogame Design' /></Tab>
                   <Tab><FormattedMessage id='marketing-design' defaultMessage='Marketing Design' /></Tab>
                </TabList>
                <div className="tab-panel">
                    {Data.map((props) => {
                        return(
                            <TabPanel>
                               {props.items.map((l) => {
                                   return(
                                       <div className={`col ${l.col}`}>
                                           {l.innerItems.map((i) => {
                                               return(
                                                   <div className="item" data-aos='flip-left'>
                                                       <div className="img-container">
                                                           <div className="img" style={{content: `url(${i.img})`}}></div>
                                                       </div>
                                                       <div className="bottom">
                                                           <div className="icon" style={{content: `url(${i.icon})`}}></div>
                                                           <p>{i.text}</p>
                                                       </div>
                                                   </div>
                                               )
                                           })}
                                       </div>
                                   )
                               })}
                            </TabPanel>
                        )
                    })}
                </div>
            </Tabs>
        </div>
    )
}

export default OurWork
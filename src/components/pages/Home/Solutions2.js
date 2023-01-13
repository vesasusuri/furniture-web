import React from 'react'
import { SolutionsData } from './data'
import './styles/solutions2.scss'

const Solutions2 = () => {
    return (
        <div className='solutions2'>
            <div className="top"></div>
            <div className="bg-line"></div>
            {SolutionsData.map((props) => {
                return(
                    <div className={`row ${props.cls}`}>
                        <div className="img-container">
                            <div className="img" data-aos='flip-up'>
                                <div className="inner-img" style={{content: `url(${props.img})`}}></div>
                            </div>
                            <div className="title-container" data-aos='zoom-in-up'>
                                <h1>{props.main}</h1>
                            </div>
                        </div>

                        <div className="info">
                            <h5>{props.word}</h5>
                            <div className="line"></div>
                            <div className="block">
                                <h2 data-aos="fade-right" data-aos-easing="ease-in-sine">
                                    {props.title}
                                </h2>
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Solutions2
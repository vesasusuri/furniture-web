import React, {useState} from 'react'
import { FormattedMessage } from "react-intl";
import './results.scss'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Data = [
    {
        number:'200',
        text:<FormattedMessage id='current-staff-members' defaultMessage='Current staff members' />,
    },
    {
        number:'8',
        text:<FormattedMessage id='years-of-experience' defaultMessage='Years of experience' />,
    },
    {
        number:'3',
        text:<FormattedMessage id='years-average-partnership' defaultMessage='Years average partnership' />,
    },
    {
        number:'300',
        text:<FormattedMessage id='projects-completed' defaultMessage='Projects completed' />,
    }
]

const Results = () => {

    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <div className='shared-results-numbers'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <FormattedMessage id='shared-results-title' 
                    defaultMessage='We deliver results like no other' />
            </h1>
            <div className="numbers">
                {Data.map((props) => {
                    return(
                        <div className="number">
                            <div className="nr-container">
                                <div className="circle"></div>
                                <div className="nr">
                                    <CountUp end={props.number} duration={1.75} useEasing={true} start={viewPortEntered ? null : 10}>
                                        {({ countUpRef }) => {
                                            return (
                                                <VisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true);
                                                        }
                                                    }}
                                                    delayedCall
                                                    >
                                                        <span ref={countUpRef}></span>
                                                        </VisibilitySensor>
                                                );
                                            }}
                                        </CountUp>+
                                </div>
                            </div>
                            <p>{props.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Results
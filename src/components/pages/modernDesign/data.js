import { FormattedMessage } from 'react-intl'

import { RiUserHeartFill } from 'react-icons/ri'
import { FaMoneyBillWave } from 'react-icons/fa'
import {  AiFillCheckCircle } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
export const Data4 = [
    {
        id:1,
        icon:<BiWallet />,
        text:<FormattedMessage id='home-GrowCustomer-text1' defaultMessage='Start selling in minutes in over 200+ countries and territories' />
    },
    {
        id:2,
        icon:<FaMoneyBillWave />,
        text:<FormattedMessage id='home-GrowCustomer-text2' defaultMessage='Provide customers with the localized buying experience they expect' />
    },
    {
        id:3,
        icon:<RiUserHeartFill />,
        text:<FormattedMessage id='home-GrowCustomer-text3' defaultMessage='Retain more customers and reduce churn' />
    },
    {
        id:4,
        icon:<AiFillCheckCircle />,
        text:<FormattedMessage id='home-GrowCustomer-text4' defaultMessage='We are 100% transparent to our customers' />
    }
]
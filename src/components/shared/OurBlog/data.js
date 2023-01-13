import { FormattedMessage } from "react-intl";

import blog1 from '../../../assets/Home/blog1.jpg'
import blog2 from '../../../assets/Home/blog2.jpg'
import blog3 from '../../../assets/Home/blog3.jpg'

export const Data1 = [
    {
        img:blog1,
        category:<FormattedMessage id='marketing' defaultMessage='Marketing' />,
        date:'12/04/2022',
        title:<FormattedMessage id='our-blog-title1' defaultMessage='How important is your product packaging in marketing strategies' />,
        to:'/'
    },
    {
        img:blog2,
        category:<FormattedMessage id='clients' defaultMessage='Clients' />,
        date:'12/04/2022',
        title:<FormattedMessage id='our-blog-title2' defaultMessage='How our team was able to create a successful rebrand strategy for our client' />,
        to:'/'
    },
    {
        img:blog3,
        category:<FormattedMessage id='gaming' defaultMessage='Gaming' />,
        date:'09/11/2021',
        title:<FormattedMessage id='our-blog-title3' defaultMessage='6 useful resources for game developers' />,
        to:'/'
    },
]
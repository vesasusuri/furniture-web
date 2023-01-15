import { FormattedMessage } from "react-intl";

import blog1 from '../../../assets/shared/furniture1.jpg'
import blog2 from '../../../assets/shared/furniture4.jpg'
import blog3 from '../../../assets/shared/furniture7.jpg'
import chair4 from '../../../assets/shared/furniture2.jpg'

export const Data1 = [
    {
        img:blog1,
        category:<FormattedMessage id='marketing' defaultMessage='Comfy Chairs' />,
        title:<FormattedMessage id='our-blog-title1' defaultMessage='Comfy Chairs 40$' />,
        to:'/'
    },
    {
        img:blog2,
        category:<FormattedMessage id='clients' defaultMessage='Lamps' />,
        title:<FormattedMessage id='our-blog-title2' defaultMessage='Lamps 34$' />,
        to:'/'
    },
    {
        img:blog3,
        category:<FormattedMessage id='gaming' defaultMessage='Fluffy Chairs' />,
        title:<FormattedMessage id='our-blog-title3' defaultMessage='Fluffy Chairs 74$' />,
        to:'/'
    },
    {
        img:chair4,
        category:<FormattedMessage id='gaming' defaultMessage='Wood Chairs' />,
        title:<FormattedMessage id='our-blog-title3' defaultMessage='Wood Chairs 54$' />,
        to:'/'
    },
]
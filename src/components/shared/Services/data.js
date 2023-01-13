import { FormattedMessage } from "react-intl";

import tab1 from '../../../assets/shared/services/tab1.svg'
import tab2 from '../../../assets/shared/services/tab2.svg'
import tab3 from '../../../assets/shared/services/tab3.svg'
import tab4 from '../../../assets/shared/services/tab4.svg'
import tab5 from '../../../assets/shared/services/tab5.svg'
import tab6 from '../../../assets/shared/services/tab6.svg'
import tab7 from '../../../assets/shared/services/tab7.svg'
import tab8 from '../../../assets/shared/services/tab8.svg'

import design1 from '../../../assets/shared/services/design1.svg'
import design2 from '../../../assets/shared/services/design2.svg'
import design3 from '../../../assets/shared/services/design3.svg'
import design4 from '../../../assets/shared/services/design4.svg'
import design5 from '../../../assets/shared/services/design5.svg'
import design6 from '../../../assets/shared/services/design6.svg'
import design7 from '../../../assets/shared/services/design7.svg'
import design8 from '../../../assets/shared/services/design8.svg'
import design1red from '../../../assets/shared/services/design1red.svg'
import design2red from '../../../assets/shared/services/design2red.svg'
import design3red from '../../../assets/shared/services/design3red.svg'
import design4red from '../../../assets/shared/services/design4red.svg'
import design5red from '../../../assets/shared/services/design5red.svg'
import design6red from '../../../assets/shared/services/design6red.svg'
import design7red from '../../../assets/shared/services/design7red.svg'
import design8red from '../../../assets/shared/services/design8red.svg'
import design1green from '../../../assets/shared/services/design1green.svg'
import design2green from '../../../assets/shared/services/design2green.svg'
import design3green from '../../../assets/shared/services/design3green.svg'
import design4green from '../../../assets/shared/services/design4green.svg'
import design5green from '../../../assets/shared/services/design5green.svg'
import design6green from '../../../assets/shared/services/design6green.svg'
import design7green from '../../../assets/shared/services/design7green.svg'
import design8green from '../../../assets/shared/services/design8green.svg'
import design1blue from '../../../assets/shared/services/design1blue.svg'
import design2blue from '../../../assets/shared/services/design2blue.svg'
import design3blue from '../../../assets/shared/services/design3blue.svg'
import design4blue from '../../../assets/shared/services/design4blue.svg'
import design5blue from '../../../assets/shared/services/design5blue.svg'
import design6blue from '../../../assets/shared/services/design6blue.svg'
import design7blue from '../../../assets/shared/services/design7blue.svg'
import design8blue from '../../../assets/shared/services/design8blue.svg'




export const TabData = [
    {
        icon:tab1,
        text:<FormattedMessage id='graphic-design' defaultMessage='Graphic Design' />
    },
    {
        icon:tab2,
        text:<FormattedMessage id='video-production' defaultMessage='Video Production' />
    },
    {
        icon:tab3,
        text:<FormattedMessage id='photography' defaultMessage='Photography' />
    },
    {
        icon:tab4,
        text:<FormattedMessage id='3d-artwork' defaultMessage='3D Artwork' />
    },
    {
        icon:tab5,
        text:<FormattedMessage id='animation' defaultMessage='Animation' />
    },
    {
        icon:tab6,
        text:<FormattedMessage id='infographics' defaultMessage='Infographics' />
    },
    {
        icon:tab7,
        text:<FormattedMessage id='videogame-design' defaultMessage='Videogame Design' />
    },
    {
        icon:tab8,
        text:<FormattedMessage id='marketing-design' defaultMessage='Marketing Design' />
    }
]

export const PanelData = [
    {
        title:<FormattedMessage id='graphic-design' defaultMessage='Graphic Design' />,
        text:<FormattedMessage id='explore-services-tab1-text' defaultMessage="There's no limit to what you can get designed at VisualKos. Whether you're looking for a spectacular new logo or some stunning flyers, the talented global community of designers at VisualKos can make it happen. VisualKos prides itself on it's high quality designers who deliver only the best graphic design services. Find the right design service for you and get design you'll love today!" />,
        to:'/',
        items:[
            {
                pink:design1,
                red:design1red,
                green:design1green,
                blue:design1blue,
                item:<FormattedMessage id='logo-design' defaultMessage='Logo Design' />,
            },
            {
                pink:design2,
                red:design2red,
                green:design2green,
                blue:design2blue,
                item:<FormattedMessage id='packaging-design' defaultMessage='Packaging Design' />,
            },
            {
                pink:design3,
                red:design3red,
                green:design3green,
                blue:design3blue,
                item:<FormattedMessage id='branding-design' defaultMessage='Branding Design' />,
            },
            {
                pink:design4,
                red:design4red,
                green:design4green,
                blue:design4blue,
                item:<FormattedMessage id='clothing-design' defaultMessage='Clothing Design' />,
            },
            {
                pink:design5,
                red:design5red,
                green:design5green,
                blue:design5blue,
                item:<FormattedMessage id='flyer-design' defaultMessage='Flyer Design' />,
            },
            {
                pink:design6,
                red:design6red,
                green:design6green,
                blue:design6blue,
                item:<FormattedMessage id='illustrations' defaultMessage='Illustrations' />,
            },
            {
                pink:design7,
                red:design7red,
                green:design7green,
                blue:design7blue,
                item:<FormattedMessage id='poster-design' defaultMessage='Poster Design' />,
            },
            {
                pink:design8,
                red:design8red,
                green:design8green,
                blue:design8blue,
                item:<FormattedMessage id='billboard-design' defaultMessage='Billboard Design' />,
            }
        ]
    },
    {
        title:<FormattedMessage id='video-production' defaultMessage='Video Production' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='photography' defaultMessage='Photography' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='3d-artwork' defaultMessage='3D Artwork' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='animation' defaultMessage='Animation' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='infographics' defaultMessage='Infographics' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='videogame-design' defaultMessage='Videogame Design' />,
        to:'/'
    },
    {
        title:<FormattedMessage id='marketing-design' defaultMessage='Marketing Design' />,
        to:'/'
    }
]
import { FormattedMessage } from "react-intl";
import chair1 from "../../../assets/Home/chairShop1.png"
import lamp2 from "../../../assets/Home/lampShop2.png"
import chair3 from "../../../assets/Home/chairShop3.png"
export const Data1 = [
    {
        icon:chair1,
        title:<FormattedMessage id='graphic-design' defaultMessage='Chair' />,
        text:<FormattedMessage id='home-offer-text1' defaultMessage='40$' />,
        to:'/',
        cls:'cls1'
    },
    {
        icon:lamp2,
        title:<FormattedMessage id='video-production' defaultMessage='Lamp' />,
        text:<FormattedMessage id='home-offer-text2' defaultMessage='40$' />,
        to:'/',
        cls:'cls2'
    },
    {
        icon:chair3,
        title:<FormattedMessage id='photography' defaultMessage='Chair' />,
        text:<FormattedMessage id='home-offer-text3' defaultMessage='40$' />,
        to:'/',
        cls:'cls3'
    },
]
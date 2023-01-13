import { FormattedMessage } from "react-intl";

import icon1 from '../../../assets/Home/icon1.svg'
import icon2 from '../../../assets/Home/icon2.svg'
import icon3 from '../../../assets/Home/icon3.svg'
import icon4 from '../../../assets/Home/icon4.svg'
import icon5 from '../../../assets/Home/icon5.svg'
import icon6 from '../../../assets/Home/icon6.svg'
import icon7 from '../../../assets/Home/icon7.svg'
import icon8 from '../../../assets/Home/icon8.svg'
import icon9 from '../../../assets/Home/icon9.svg'
import icon10 from '../../../assets/Home/icon10.svg'
import icon11 from '../../../assets/Home/icon11.svg'

import planet1 from '../../../assets/Home/planet1.svg'
import planet2 from '../../../assets/Home/planet2.svg'
import planet3 from '../../../assets/Home/planet3.svg'
import planet4 from '../../../assets/Home/planet4.svg'

import img1 from '../../../assets/Home/img1.jpg'
import img2 from '../../../assets/Home/img2.jpg'
import img3 from '../../../assets/Home/img3.jpg'
import img11 from '../../../assets/Home/img11.png'
import img22 from '../../../assets/Home/img22.png'
import img33 from '../../../assets/Home/img33.png'

import work1 from '../../../assets/Home/work1.jpg'
import work2 from '../../../assets/Home/work2.jpg'
import work3 from '../../../assets/Home/work3.jpg'
import work4 from '../../../assets/Home/work4.jpg'

import course1 from '../../../assets/Home/course1.png'
import course2 from '../../../assets/Home/course2.png'
import course3 from '../../../assets/Home/course3.png'
import course4 from '../../../assets/Home/course4.png'
import course5 from '../../../assets/Home/course5.png'

import svg1 from '../../../assets/Home/svg1.svg'
import svg2 from '../../../assets/Home/svg2.svg'
import svg3 from '../../../assets/Home/svg3.svg'
import svg4 from '../../../assets/Home/svg4.svg'
import svg5 from '../../../assets/Home/svg5.svg'

import frienddark1 from '../../../assets/Home/frienddark1.svg'
import frienddark2 from '../../../assets/Home/frienddark2.svg'
import frienddark3 from '../../../assets/Home/frienddark3.svg'
import frienddark4 from '../../../assets/Home/frienddark4.svg'

import friend1 from '../../../assets/Home/friend1.svg'
import friend2 from '../../../assets/Home/friend2.svg'
import friend3 from '../../../assets/Home/friend3.svg'
import friend4 from '../../../assets/Home/friend4.svg'

import partner1 from '../../../assets/Home/partner1.jpg'
import partner2 from '../../../assets/Home/partner2.jpg'
import partner3 from '../../../assets/Home/partner3.jpg'
import partner4 from '../../../assets/Home/partner4.jpg'

import solution1 from '../../../assets/Home/solution1.jpg'
import solution2 from '../../../assets/Home/solution2.jpg'

export const SolutionsData = [
    {
        img:solution1,
        main:<FormattedMessage id='home-solutions-main1' defaultMessage='We make things look good' />,
        title:<FormattedMessage id='home-solutions-title1' defaultMessage='We find a solution for you, always' />,
        text:<FormattedMessage id='home-solutions-text1' defaultMessage='Our team of experts love what they do, and they will offer professional and creative solutions that will help your brand grow beyond your imagination.' />,
        word:<FormattedMessage id='passion' defaultMessage='Passion' />,
        cls:'cls1'
    },
    {
        img:solution2,
        main:<FormattedMessage id='home-solutions-main2' defaultMessage='Crafting amazing experiences' />,
        title:<FormattedMessage id='home-solutions-title2' defaultMessage='We dream, we innovate, we create.' />,
        text:<FormattedMessage id='home-solutions-text2' defaultMessage='We thrive on delivering quality design strategies and solutions that people love and trust, and we continue to explore new ways to do so.' />,
        word:<FormattedMessage id='crafting-stories' defaultMessage='Crafting stories' />,
        cls:'cls2'
    }
]


export const PartnersData = [
    {
        row:'row1',
        img:partner1,
        logo:friend1,
        darklogo:frienddark1,
        to:'/',
        title:<FormattedMessage id='home-partnership-title1' defaultMessage='Building digital solutions of the future' />,
        text:<FormattedMessage id='home-partnership-text1' defaultMessage='Outkos is a software development company, with many years of experience delivering products and services in many industries. They offer a range of services that can help you reach your business goals.' />
    },
    {
        row:'row2',
        img:partner2,
        logo:friend2,
        darklogo:frienddark2,
        to:'/',
        title:<FormattedMessage id='home-partnership-title2' defaultMessage='Professional audio producers and engineers' />,
        text:<FormattedMessage id='home-partnership-text2' defaultMessage='Audiokos is an agency specialized in audio branding, sound design and music production. They offer a wide range of audio services for your audio-visual projects. ' />
    },
    {
        row:'row1',
        img:partner3,
        logo:friend3,
        darklogo:frienddark3,
        to:'/',
        title:<FormattedMessage id='home-partnership-title3' defaultMessage='Target your customers at the right time' />,
        text:<FormattedMessage id='home-partnership-text3' defaultMessage="Mediakos is an digital marketing agency that will help you reach your target customer and grow your business. With their services you'll build brand recognition and maximize your profit." />
    },
    {
        row:'row2',
        img:partner4,
        logo:friend4,
        darklogo:frienddark4,
        to:'/',
        title:<FormattedMessage id='home-partnership-title4' defaultMessage='Let your startup idea come to life ' />,
        text:<FormattedMessage id='home-partnership-text4' defaultMessage='Venturekos is here to help. They provide seed funding for startups, to pay your expenses while you’re getting started.' />
    }
]


export const AcademyData = [
    {
        img:course1,
        cls:'cls1',
        icon:svg1, 
        link:<FormattedMessage id='visualkos-academy-course1' defaultMessage='Animation Course' />,
        to:'/'
    },
    {
        img:course2,
        cls:'cls2',
        icon:svg2, 
        link:<FormattedMessage id='visualkos-academy-course2' defaultMessage='Videogame Design Course' />,
        to:'/'
    },
    {
        img:course3,
        cls:'cls3',
        icon:svg3, 
        link:<FormattedMessage id='visualkos-academy-course3' defaultMessage='Graphic Design Course' />,
        to:'/'
    },
    {
        img:course4,
        cls:'cls4',
        icon:svg4, 
        link:<FormattedMessage id='visualkos-academy-course4' defaultMessage='Video Production Course' />,
        to:'/'
    },
    {
        img:course5,
        cls:'cls5',
        icon:svg5, 
        link:<FormattedMessage id='visualkos-academy-course5' defaultMessage='Photography Course' />,
        to:'/'
    }
]


export const Data4 = [
    {
        cls:'cls1',
        row:'row1',
        title:<FormattedMessage id='process-work-title1' defaultMessage='Meeting with Customers' />,
        text:<FormattedMessage id='process-work-text1' defaultMessage='The first meeting is very important to get acquainted and discuss the main ideas of the project.' />,
        planet:planet1,
        img:work1,
        nr:'01'
    },
    {
        cls:'cls2',
        row:'row2',
        title:<FormattedMessage id='process-work-title2' defaultMessage='We consider and analyze the work plan' />,
        text:<FormattedMessage id='process-work-text2' defaultMessage='When we understand the main ideas, we proceed to discuss the work plan and analyze it..' />,
        planet:planet2,
        img:work2,
        nr:'02'
    },
    {
        cls:'cls3',
        row:'row1',
        title:<FormattedMessage id='process-work-title3' defaultMessage='Work Hard on The Project' />,
        text:<FormattedMessage id='process-work-text3' defaultMessage='Our professional team starts to work on your project and embody all details of the initial concept.' />,
        planet:planet3,
        img:work3,
        nr:'03'
    },
    {
        cls:'cls4',
        row:'row2',
        title:<FormattedMessage id='process-work-title4' defaultMessage='We Finish The Project And Send It To The Customer' />,
        text:<FormattedMessage id='process-work-text4' defaultMessage='The first meeting is very important to get acquainted and discuss the main ideas of the project.' />,
        planet:planet4,
        img:work4,
        nr:'04'
    }
]
export const Data2 = [
    {
        row:'row1',
        img:img1,
        top:img11,
        title:<FormattedMessage id='home-solution-title1' defaultMessage='Our Passion is to Find Your Solution' />,
        text:<FormattedMessage id='home-solution-text1' defaultMessage='Our designers and developers love what they do, they will offer professional and creative assets while keeping your branding integrity.' />,
        to:'/'
    },
    {
        row:'row2',
        img:img2,
        top:img22,
        title:<FormattedMessage id='home-solution-title2' defaultMessage="3D, Vector, Video, Photography You Choose it, We're the Best" />,
        text:<FormattedMessage id='home-solution-text2' defaultMessage='Our designers and developers work closely together to build a creative and positive working environment. Functionality is as important to us as aesthetics.' />,
        to:'/'
    },
    {
        row:'row1',
        img:img3,
        top:img33,
        title:<FormattedMessage id='home-solution-title3' defaultMessage='We Innovate, So the Product Will Always be Cutting-Edge' />,
        text:<FormattedMessage id='home-solution-text3' defaultMessage='We help companies succeed in this constantly changing digital age by exploring new ideas and testing new solutions.' />,
        to:'/'
    }
]
export const Data1 = [
    {
        icon:icon1,
        title:<FormattedMessage id='graphic-design' defaultMessage='Graphic Design' />,
        text:<FormattedMessage id='home-offer-text1' defaultMessage='We create original graphical illustrations for you and your brand, all on brand' />,
        to:'/',
        cls:'cls1'
    },
    {
        icon:icon2,
        title:<FormattedMessage id='video-production' defaultMessage='Video Production' />,
        text:<FormattedMessage id='home-offer-text2' defaultMessage='We shoot and edit videos with our creative staff and marketing team' />,
        to:'/',
        cls:'cls2'
    },
    {
        icon:icon3,
        title:<FormattedMessage id='photography' defaultMessage='Photography' />,
        text:<FormattedMessage id='home-offer-text3' defaultMessage='Our photography team shoots the necessary photos to uppen your business' />,
        to:'/',
        cls:'cls3'
    },
    {
        icon:icon4,
        title:<FormattedMessage id='3d-artwork' defaultMessage='3D Artwork' />,
        text:<FormattedMessage id='home-offer-text4' defaultMessage='We create original 3D assets with our 3D professionals, illustrations or realistic' />,
        to:'/',
        cls:'cls4'
    },
    {
        icon:icon5,
        title:<FormattedMessage id='animation' defaultMessage='Animation' />,
        text:<FormattedMessage id='home-offer-text5' defaultMessage='Our professional animation team will animate clips or full length animations for you' />,
        to:'/',
        cls:'cls5'
    },
    {
        icon:icon6,
        title:<FormattedMessage id='game-design' defaultMessage='Game Design' />,
        text:<FormattedMessage id='home-offer-text6' defaultMessage='We have professional game designer ready to innovate the gaming industry' />,
        to:'/',
        cls:'cls6'
    },
    {
        icon:icon7,
        title:<FormattedMessage id='infographics' defaultMessage='Infographics' />,
        text:<FormattedMessage id='home-offer-text7' defaultMessage='Turn your data into captivating artwork that will keep your audience engaged.' />,
        to:'/',
        cls:'cls7'
    }
]

export const Data3 = [
    {
        icon:icon8,
        id:'01',
        title:<FormattedMessage id='home-industry-title1' defaultMessage='CUSTOMER-CENTRIC APPROACHES' />,
        text:<FormattedMessage id='home-industry-text1' defaultMessage='Exceptional engagement and transparent communication with our respective client peers quickly builds trust and a collaborative spirit between VisualKos and our client teams.' />
    },
    {
        icon:icon9,
        id:'02',
        title:<FormattedMessage id='home-industry-title2' defaultMessage='CUTTING-EDGE WORK PIPELINES' />,
        text:<FormattedMessage id='home-industry-text2' defaultMessage='Working with each project, our job is to demonstrate workable ideas to our clients. We prefer to start a project immediately by creating several pieces of art instead of talking a lot about possible options.' />
    },
    {
        icon:icon10,
        id:'03',
        title:<FormattedMessage id='home-industry-title3' defaultMessage='SMOOTH-RUNNING PRODUCTION PIPELINE' />,
        text:<FormattedMessage id='home-industry-text3' defaultMessage='We follow the main principles of CLIENTS FIRST and this is at the fiber of the organization’s culture. Our goal is to build trusted and transparent partnership with our clients.' />
    },
    {
        icon:icon11,
        id:'04',
        title:<FormattedMessage id='home-industry-title4' defaultMessage='HIGH SECURITY & QUALITY STANDARDS' />,
        text:<FormattedMessage id='home-industry-text4' defaultMessage="VisualKos' data protection policy ensures data, system and infrastructure protection. Additionally, VisualKos continuously adopts solutions to further enhancement." />
    }
]
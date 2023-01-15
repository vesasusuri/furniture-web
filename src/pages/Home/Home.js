import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/banner1/Banner'
import OurBlog from '../../components/shared/OurBlog/OurBlog'
import Footer from '../../components/shared/Footer/Footer'
import Shop from '../../components/pages/shop/shop'
import WhyChooseUs from '../../components/pages/whyChooseUs/whyChooseUs'
import KeepUpdated from '../../components/pages/keepUpdated/keepUpdated'
import TrustedBy from '../../components/shared/TrustedBy/TrustedBy'
import ModernDesign from '../../components/pages/modernDesign/modernDesign'

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner/>
            <Shop/>
            <WhyChooseUs/>
            <OurBlog />
            <ModernDesign/>
            <KeepUpdated/>
            {/* <TrustedBy/> */}
            <Footer />
        </div>
    )
}

export default Home

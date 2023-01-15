import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/banner1/Banner'
// import TrustedBy from '../../components/shared/TrustedBy/TrustedBy'
// import WhatWeOffer from '../../components/pages/Home/WhatWeOffer'
// import Solutions2 from '../../components/pages/Home/Solutions2'
// import Dedication from '../../components/pages/Home/Dedication'
// import NextLevel from '../../components/pages/Home/NextLevel'
// import Services from '../../components/shared/Services/Services'
// import WorkWithUs from '../../components/pages/Home/WorkWithUs'
// import OurWork from '../../components/shared/OurWork/OurWork'
// import Results from '../../components/shared/Results/Results'
// import Partnerships from '../../components/pages/Home/Partnerships'
// import GameArt from '../../components/pages/Home/GameArt'
// import VisualAcademy from '../../components/pages/Home/VisualAcademy'
 import OurBlog from '../../components/shared/OurBlog/OurBlog'
// import Testimonials from '../../components/shared/Testimonials/Testimonials'
// import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'
import Shop from '../../components/pages/shop/shop'
import WhyChooseUs from '../../components/pages/whyChooseUs/whyChooseUs'

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner/>
            <Shop/>
            <WhyChooseUs/>
            <OurBlog />
            {/* <TrustedBy />
            <WhatWeOffer />
            <Solutions2 />
            <Dedication />
            <NextLevel />
            <Services />
            <WorkWithUs />
            <OurWork />
            <Results />
            <Partnerships />
            <GameArt />
            <VisualAcademy />
            <OurBlog />
            <Testimonials /> */}
            {/* <Subscribe />  */}
            <Footer />
        </div>
    )
}

export default Home

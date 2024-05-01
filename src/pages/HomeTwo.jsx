import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import BestSeller from '../components/BestSeller';
import Brand from '../components/Brand';
import BannerTwo from '../components/BannerTwo';
import PopularItemSection from '../components/PopularItemSection';
import SellingProducts from '../components/SellingProducts';
import ArrivalProducts from '../components/ArrivalProducts';
import FeaturedContributors from '../components/FeaturedContributors';
import ServiceSection from '../components/ServiceSection';
import Testimonials from '../components/Testimonials';
import PricingPlan from '../components/PricingPlan';
import BecomeSellerTwo from '../components/BecomeSellerTwo';
import BlogTwo from '../components/BlogTwo';
import Resources from '../components/Resources';
import Newsletter from '../components/Newsletter';
import FooterTwo from '../common/FooterTwo';

const HomeTwo = () => {
    return (
        <>
            <PageTitle title="DP Market - Home Page" />
            <MobileMenu/>
            
            <BestSeller
                saleClass="sales-offer-bg-two"
            />

            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Banner */}
            <BannerTwo/>

            {/* Popular Item Section */}
            <PopularItemSection/>

            {/* Selling Products */}
            <SellingProducts 
                sectionTitle="Featured Products" 
                sectionDesc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."
            />

            {/* Arrival Products */}
            <ArrivalProducts/>

            {/* Featured Contributors */}
            <FeaturedContributors/>

            {/* Service Section */}
            <ServiceSection/>

            {/* Testimonials */}
            <Testimonials/>

            {/* Pricing Plan */}
            <PricingPlan/>

            {/* brands */}
            <Brand/>

            {/* Become Seller Two */}
            <BecomeSellerTwo/>

            {/* Blog Two */}
            <BlogTwo/>

            {/* Resources */}
            <Resources/>

            {/* Resources */}
            <Newsletter/>

            {/* FooterTwo */}
            <FooterTwo/>

        </>
    );
};

export default HomeTwo;
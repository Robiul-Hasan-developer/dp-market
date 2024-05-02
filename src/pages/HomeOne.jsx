import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import BestSeller from '../components/BestSeller';
import Banner from '../components/Banner';
import PopularCategory from '../components/PopularCategory';
import ArrivalProducts from './../components/ArrivalProducts';
import FeaturedProducts from '../components/FeaturedProducts';
import SellingProducts from '../components/SellingProducts';
import FeaturedAuthor from '../components/FeaturedAuthor';
import TopPerformance from './../components/TopPerformance';
import Blog from './../components/Blog';
import BecomeSeller from '../components/BecomeSeller';
import Brand from '../components/Brand';
import Footer from '../common/Footer';

const HomeOne = () => {
    return (
        <>
            <PageTitle title="DP Market - Home" />
            <MobileMenu/>
            
            <main className="change-gradient">
                <BestSeller
                    saleClass=""
                />

                {/* Header */}
                <Header 
                    headerClass=""
                    headerMenusClass=""
                    logoOne={true}
                    logoTwo={false}
                />

                {/* Banner */}
                <Banner/>

                {/* Popular Category */}
                <PopularCategory/>

                {/* Arrival Products */}
                <ArrivalProducts/>

                {/* Featured Products */}
                <FeaturedProducts/>

                {/* Selling Products */}
                <SellingProducts sectionTitle="Weekly Best Selling Products" sectionDesc="Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists."/>

                {/* Featured Author */}
                <FeaturedAuthor/>

                {/* Top Performance */}
                <TopPerformance/>

                {/* Blog */}
                <Blog/>

                {/* Become Seller */}
                <BecomeSeller/>

                {/* brands */}
                <Brand/>

                {/* FooterTwo */}
                <Footer/>
                
            </main>
        </>
    );
};

export default HomeOne;
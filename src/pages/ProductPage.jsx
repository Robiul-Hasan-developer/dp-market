import React from 'react';
import Header from '../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import BreadcrumbOne from './../components/BreadcrumbOne';
import AllProducts from '../components/AllProducts';

const ProductPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Products" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Breadcrumb One */}
            <BreadcrumbOne/>

            {/* All Products */}
            <AllProducts/>

            {/* brands */}
            <Brand/>

            {/* FooterTwo */}
            <Footer/>
        </>
    );
};

export default ProductPage;
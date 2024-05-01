import React from 'react';
import Header from '../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import BreadcrumbThree from '../common/BreadcrumbThree';
import ProductDetailsSection from '../components/ProductDetailsSection';

const ProductDetails = () => {
    return (
        <>
            <PageTitle title="DP Market - Product Details" />
            <MobileMenu/>

            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Breadcrumb One */}
            <BreadcrumbThree/>

            {/* Product Details Section */}
            <ProductDetailsSection/>

            {/* brands */}
            <Brand/>

            {/* FooterTwo */}
            <Footer/>
                
        </>
    );
};

export default ProductDetails;
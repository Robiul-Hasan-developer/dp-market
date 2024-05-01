import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import CartSection from '../components/CartSection';
import BreadcrumbFour from '../common/BreadcrumbFour';

const Cart = () => {
    return (
        <>
            <PageTitle title="DP Market - Shopping Cart" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Breadcrumb Four */}
            <BreadcrumbFour pageTitle="Shopping Cart" pageName="My Shopping Cart" currentPage="Cart" />

            {/* Cart Section  */}
            <CartSection/>

            {/* Brand */}
            <Brand/>

            {/* Footer Two */}
            <Footer/>

        </>
    );
};

export default Cart;
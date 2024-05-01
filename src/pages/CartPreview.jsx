import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import CartPreviewSection from '../components/CartPreviewSection';

const CartPreview = () => {
    return (
        <>
            <PageTitle title="DP Market - Cart Preview" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Cart Preview Section  */}
            <CartPreviewSection/>

            {/* Brand */}
            <Brand/>

            {/* Footer Two */}
            <Footer/>

        </> 
    );
};

export default CartPreview;


import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import BreadcrumbFour from '../common/BreadcrumbFour';
import PaymentMethodSection from '../components/PaymentMethodSection';

const PaymentMethod = () => {
    return (
        <>
            <PageTitle title="DP Market - Payment Method" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Breadcrumb Four */}
            <BreadcrumbFour pageTitle="Payment Method" pageName="Payment Method" currentPage="PaymentMethod" />

            {/* Payment Method Section */}
            <PaymentMethodSection/>

            {/* Brand */}
            <Brand/>

            {/* Footer Two */}
            <Footer/>

        </>
    );
};

export default PaymentMethod;
import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import BreadcrumbFour from '../common/BreadcrumbFour';
import MailingSection from '../components/MailingSection';

const MailingAddress = () => {
    return (
        <>
            <PageTitle title="DP Market - Mailing Address" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

            {/* Breadcrumb Four */}
            <BreadcrumbFour pageTitle="Mailing Address" pageName="Mailing Address" currentPage="MailingAddress" />

            {/* Cart Section  */}
            <MailingSection/>

            {/* Brand */}
            <Brand/>

            {/* Footer Two */}
            <Footer/>

        </>
    );
};

export default MailingAddress;
import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import BreadcrumbTwo from '../common/BreadcrumbTwo';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
    return (
        <>
            <PageTitle title="DP Market - Contact" />
            <MobileMenu/>
            
            <main>
                {/* Header */}
                <Header 
                    headerClass=""
                    headerMenusClass=""
                    logoOne={false}
                    logoTwo={true}
                />

                <BreadcrumbTwo
                    pageName="Contact"
                    pageTitle="Contact Us"
                    renderSubLink= {false}
                    SubLinkText="Blog"
                    SubLinkPath="/blog"
                />

                {/* Contact Section */}
                <ContactSection/>

                {/* brands */}
                <Brand/>

                {/* FooterTwo */}
                <Footer footerMainClass="section-bg"/>
                
            </main>
        </>
    );
};

export default Contact;
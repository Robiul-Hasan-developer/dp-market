import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import BlogDetailsSection from '../components/BlogDetailsSection';
import Brand from '../components/Brand';
import Footer from '../common/Footer';

const BlogDetails = () => {
    return (
        <>
            <PageTitle title="DP Market - Blog Details" />
            <MobileMenu/>
            
            <main>
                {/* Header */}
                <Header 
                    headerClass=""
                    headerMenusClass=""
                    logoOne={true}
                    logoTwo={false}
                />

                <BlogDetailsSection/>

                {/* brands */}
                <Brand/>

                {/* FooterTwo */}
                <Footer footerMainClass=""/>
                
            </main>
        </>
    );
};

export default BlogDetails;
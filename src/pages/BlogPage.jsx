import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import BlogPageSection from '../components/BlogPageSection';
import BreadcrumbTwo from '../common/BreadcrumbTwo';
import Brand from '../components/Brand';
import Footer from '../common/Footer';

const BlogPage = () => {
    return (
        <>
            <PageTitle title="DP Market - Blogs" />
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
                    pageName="Blog"
                    pageTitle="Latest Blogs And Articles"
                    renderSubLink= {false}
                    SubLinkText="Blog"
                    SubLinkPath="/blog"
                />

                <BlogPageSection/>

                {/* brands */}
                <Brand/>

                {/* FooterTwo */}
                <Footer footerMainClass="section-bg"/>
                
            </main>
        </>
    );
};

export default BlogPage;
import React from 'react';
import Header from './../common/Header';
import MobileMenu from '../common/MobileMenu';
import PageTitle from '../common/PageTitle';
import Brand from '../components/Brand';
import Footer from '../common/Footer';
import BreadcrumbFive from '../common/BreadcrumbFive';
import ProfileSection from '../components/ProfileSection';

const Profile = () => {
    return (
        <>
            <PageTitle title="DP Market - Profile" />
            <MobileMenu/>
            
            {/* Header */}
            <Header 
                headerClass=""
                headerMenusClass=""
                logoOne={false}
                logoTwo={true}
            />

                
            {/* Breadcrumb Four */}
            <BreadcrumbFive />

            {/* Profile Section */}
            <ProfileSection/>
                
            {/* Brand */}
            <Brand/>

            {/* Footer Two */}
            <Footer/>

        </>
    );
};

export default Profile;
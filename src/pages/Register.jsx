import React from 'react';
import PageTitle from '../common/PageTitle';
import RegisterSection from '../components/RegisterSection';
import LightDarkMode from '../common/LightDarkMode';
import AccountLeft from '../components/AccountLeft';

import AccountImage from '../../public/assets/images/thumbs/account-img.png';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <>
            <PageTitle title="DP Market - Register Account" />
            
            <section className="account d-flex">
                <img src={AccountImage} alt="" className="account__img"/>

                <AccountLeft/>

                <div className="account__right padding-t-120 flx-align">
                    <div className="dark-light-mode">
                        {/* Light Dark Mode */}
                        <LightDarkMode/>
                    </div>
                    
                    <div className="account-content">
                        <Link to="/" className="logo mb-64">  
                            <img src="assets/images/logo/logo.png" alt="" className="white-version"/>
                            <img src="assets/images/logo/white-logo-two.png" alt="" className="dark-version"/>
                        </Link>
                        <h4 className="account-content__title mb-48 text-capitalize">Create A Free Account</h4>

                        <RegisterSection/>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
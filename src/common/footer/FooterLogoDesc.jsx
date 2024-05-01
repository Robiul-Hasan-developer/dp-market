import React from 'react';
import LogoWhite from './../LogoWhite';
import { Link } from 'react-router-dom';

import LogoOne from '../../../public/assets/images/logo/logo.png';
import LogoOneWhite from '../../../public/assets/images/logo/white-logo-two.png';


const FooterLogoDesc = (props) => {
    return (
        <>
            <div className="footer-item__logo">
                {
                    props.renderFooterWhiteLogo && (
                        <LogoWhite/>
                    )
                }
                {
                    props.renderFooterDarkLightLogo && (
                        <>
                            <Link to="/" className="link white-version">
                                <img src={LogoOne} alt="Logo"/>
                            </Link>
                            <Link to="/" className="link dark-version">
                                <img src={LogoOneWhite} alt="Logo"/>
                            </Link>
                        </>
                    )
                }
            </div>
            <p className="footer-item__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>    
                
        </>
    );
};

export default FooterLogoDesc;
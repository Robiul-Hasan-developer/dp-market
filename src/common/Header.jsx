import React, { useEffect, useState } from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import LogoImgOne from '../../public/assets/images/logo/logo.png';
import LogoImgTwo from '../../public/assets/images/logo/logo-two.png';
import LogoWhite from '../../public/assets/images/logo/white-logo-two.png';
import LogoWhiteTwo from '../../public/assets/images/logo/white-logo.png';
import HeaderRight from './HeaderRight';

const Header = (props) => {
        
    // Sticky header Code 
    const [stickyHeader, setStickyHeader] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', function() {
            window.scrollY > 100 ? setStickyHeader(true) : setStickyHeader(false)
        });
    }, []);

    return (
        <>
            {/* ==================== Header Start Here ==================== */}
            <header className={`header ${props.headerClass} ${stickyHeader ? 'fixed-header' : ''}`}>
                <div className="container container-full">
                    <nav className="header-inner flx-between">

                        <div className="logo">
                            {
                                props.logoOne && (
                                    <>
                                        <Link to="/" className="link white-version">
                                            <img src={LogoImgTwo } alt="Logo"/>
                                        </Link>
                                        <Link to="/" className="link dark-version">
                                            <img src={LogoWhiteTwo} alt="Logo"/>
                                        </Link>
                                    </>
                                )
                            }

                            {
                                props.logoTwo && (
                                    <>
                                        <Link to="/" className="link white-version">
                                            <img src={LogoImgOne} alt="Logo"/>
                                        </Link>
                                        <Link to="/" className="link dark-version">
                                            <img src={LogoWhite} alt="Logo"/>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                        
                        {/* Menu Start  */}
                        <div className={`header-menu d-lg-block d-none ${props.headerMenusClass}`}>
                            <NavMenu navMenusClass="" />
                        </div>
                        {/* Menu End  */}

                        {/* Header Right start */}
                        <HeaderRight/>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}   
        </>
    );
};

export default Header;
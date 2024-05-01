import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Language from './Language';
import LightDarkMode from './LightDarkMode';
import { MobileMenuContext } from '../contextApi/MobileMenuContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';

// icons
import cartIcon1 from '../../public/assets/images/icons/cart.svg';
import cartIconWhite from '../../public/assets/images/icons/cart-white.svg';

import userIcon from '../../public/assets/images/icons/user.svg';

const HeaderRight = (props) => {

    const { handleMobileMenuClick } = useContext(MobileMenuContext); 

    const { handleScrollHide, handleScrollHideLg } = useContext(ScrollHideContext); 
    
    return (
        <>
            <div className="header-right flx-align">
                
                <Link to="/cart" className="header-right__button cart-btn position-relative">
                    <img src={cartIcon1} alt="" className="white-version"/>
                    <img src={cartIconWhite} alt="" className="dark-version"/>
                    <span className="qty-badge font-12">0</span>
                </Link>

               <LightDarkMode/>

                <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                    <Link to="/register" className="btn btn-main pill">
                        <span className="icon-left icon"> 
                            <img src={userIcon} alt=""/>
                        </span>
                        Create Account  
                    </Link>

                    <Language/>

                </div>
                <button type="button" className="toggle-mobileMenu d-lg-none" onClick={()=>{ handleMobileMenuClick(); handleScrollHide() }}> 
                    <i className="las la-bars"></i> 
                </button>
            </div>
        </>
    );
};

export default HeaderRight;
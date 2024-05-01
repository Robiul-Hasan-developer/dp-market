import React from 'react';
import FooterLogoDesc from './footer/FooterLogoDesc';
import FooterBottom from './FooterBottom';
import SocialList from './SocialList';
import FooterUsefulItem from './footer/FooterUsefulItem';
import FooterServiceItem from './footer/FooterServiceItem';

import FooterPattern1 from '../../public/assets/images/shapes/footer-pattern1.png';
import FooterPattern2 from '../../public/assets/images/shapes/footer-pattern2.png';
import FooterGradient from '../../public/assets/images/gradients/footer-gradient-bg.png';
import FooterCategoryItem from './footer/FooterCategoryItem';

const FooterTwo = (props) => {
    return (
        <>
            <footer className={`footer-two section-bg position-relative z-index-1 overflow-hidden ${props.footerMainClass}`}>
                <img src={FooterGradient} alt="" className="bg--gradient"/>
                <img src={FooterPattern1} alt="" className="position-absolute end-0 top-0 z-index--1"/>
                <img src={FooterPattern2} alt="" className="position-absolute start-0 top-0 z-index--1"/>

                <div className="footer-inner padding-y-120">
                    <div className="container container-two">
                        <div className="row gy-5">
                            <div className="col-xl-3 col-sm-6">
                                <div className="footer-item">
                                    <FooterLogoDesc renderFooterDarkLightLogo={true}/>                
                                    <div className="footer-item__social">
                                        
                                    <SocialList 
                                        ulClass=""
                                        linkClass=""
                                    />

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-6 col-xs-6">
                                <FooterUsefulItem/>
                            </div>
                            <div className="col-xl-1 d-xl-block d-none"></div>
                            <div className="col-xl-3 col-sm-6 col-xs-6">
                                <FooterServiceItem/>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-xs-6">
                                <FooterCategoryItem/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom Footer */}
                <FooterBottom footerClass="bottom-footer-two"/>
            </footer>
        </>
    );
};

export default FooterTwo;
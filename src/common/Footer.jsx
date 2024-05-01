import React from 'react';
import FooterLogoDesc from './footer/FooterLogoDesc';
import FooterBottom from './FooterBottom';
import SocialList from './SocialList';
import FooterUsefulItem from './footer/FooterUsefulItem';
import FooterServiceItem from './footer/FooterServiceItem';

import PatternShape from '../../public/assets/images/shapes/pattern.png';
import ElementOne from '../../public/assets/images/shapes/element1.png';
import ElementTwo from '../../public/assets/images/shapes/element2.png';
import FooterGradient from '../../public/assets/images/gradients/footer-gradient.png';
import NewsletterForm from './NewsletterForm';

const Footer = (props) => {
    return (
        <>
            <footer className={`footer ${props.footerMainClass}`}>
                <img src={PatternShape} alt="" className="bg-pattern"/>
                <img src={ElementOne} alt="" className="element one"/>
                <img src={ElementTwo} alt="" className="element two"/>
                <img src={FooterGradient} alt="" className="bg--gradient"/>

                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-item">
                                <FooterLogoDesc renderFooterWhiteLogo={true}/>                
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
                        <div className="col-xl-2 col-sm-6 col-xs-6">
                            <FooterServiceItem/>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="footer-item">
                                <h5 className="footer-item__title">Subscribe</h5>
                                <p className="footer-item__desc">Subscribe our newsletter to get updated the latest news</p>

                                <NewsletterForm footerForm={true}/>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* bottom Footer */}
            <FooterBottom footerClass="bottom-footer"/>
        </>
    );
};

export default Footer;
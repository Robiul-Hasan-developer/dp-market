import React from 'react';
import BottomFooterLinks from './footer/BottomFooterLinks';

const FooterBottom = (props) => {
    return (
        <>
            <div className={`${props.footerClass}`}>
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text font-14"> Copyright &copy; {new Date().getFullYear()} DPmarket, All rights reserved.</p>
                        <BottomFooterLinks/>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default FooterBottom;
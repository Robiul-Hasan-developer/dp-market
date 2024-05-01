import React from 'react';
import { Link } from 'react-router-dom';
import { BottomFooterLink } from '../../data/CommonData/CommonData';

const DashboardFooter = () => {
    return (
        <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
            <div className="bottom-footer__inner flx-between gap-3">
                <p className="bottom-footer__text font-14"> Copyright &copy; {new Date().getFullYear() } DPmarket, All rights reserved.</p>
                <div className="footer-links gap-4">
                    {
                        BottomFooterLink.map((BottomFooterLinkItem, BottomFooterLinkItemIndex) => {
                            return (
                                <Link to={BottomFooterLinkItem.link} className="footer-link hover-text-heading font-14" key={BottomFooterLinkItemIndex}>
                                    {BottomFooterLinkItem.text}
                                </Link>
                            )
                        }) 
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardFooter;
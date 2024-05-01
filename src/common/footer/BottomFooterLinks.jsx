import React from 'react';
import { Link } from 'react-router-dom';
import { BottomFooterLink } from './../../data/CommonData/CommonData';

const BottomFooterLinks = () => {
    return (
        <>
            <div className="footer-links">
                {
                    BottomFooterLink.map((BottomLink, index) => {
                        return (
                            <Link to="/contact" className="footer-link font-14" key={index}>{BottomLink.text}</Link>
                        )
                    })
                }
            </div>
        </>
    );
};

export default BottomFooterLinks;
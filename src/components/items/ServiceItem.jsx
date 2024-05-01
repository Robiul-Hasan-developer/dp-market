import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ serviceItem }) => {

    const {icon, title, desc, btnText, btnLink} = serviceItem; 
    
    return (
        <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
                <img src="assets/images/gradients/service-hover-bg.png" alt="" className="hover-bg white-version"/>
                <img src="assets/images/gradients/service-hover-bg-dark.png" alt="" className="hover-bg dark-version"/>
                <span className="service-item__icon">
                    <img src={icon} alt=""/>
                </span>
                <h5 className="service-item__title my-3">{title}</h5>
                <p className="service-item__desc">{desc}</p>
                <Link to={btnLink} className="btn-simple">{btnText}<span className="icon"><i className="las la-arrow-right"></i></span> </Link>
            </div>
        </div>   
    );
};

export default ServiceItem;
import React from 'react';
import { Link } from 'react-router-dom';

const PriceItem = ({ pricingPlan }) => {

    const {icon, title, price, priceDuration, desc, btnText, btnLink, priceLists, badge} = pricingPlan; 
    
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="pricing-item box-shadow-lg hover-bg-main">
                <img src="assets/images/gradients/price-hover-bg.png" alt="" className="hover-bg"/>
                <div className="pricing-item__top">
                    <div className="flx-between flex-nowrap">
                        <span className="pricing-item__icon">
                            <img src={icon} alt="Icon"/>
                        </span>
                        {
                            badge && (
                                <span className="popular-badge">{badge}</span>
                            )
                        }
                    </div>
                    <h5 className="pricing-item__title mb-0 mt-2">{title}</h5>
                </div>
                <div className="pricing-item__content">
                    <h3 className="pricing-item__price mb-2"> {price} <span className="text font-14 text-body font-body fw-400">/{priceDuration}</span> </h3>
                    <p className="pricing-item__desc">{desc}</p>
                    <Link to={btnLink} className="btn btn-outline-light btn-lg pill w-100">{btnText}</Link>
                </div>
                <div className="pricing-item__lists">
                    <ul className="text-list">
                        {
                            priceLists && priceLists.map((priceList, priceListIndex) => {
                                return (
                                    <li className="text-list__item text-heading" key={priceListIndex}>
                                        <span className="icon">{priceList.icon}</span>
                                        {priceList.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PriceItem;
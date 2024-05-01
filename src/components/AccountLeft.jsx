import React from 'react';
import Pattern from '../../public/assets/images/shapes/pattern-curve-seven.png';
import CountUp from 'react-countup';

const AccountLeft = () => {
    return (
        <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
            <img src={Pattern} alt="" className="position-absolute end-0 top-0 z-index--1 h-100"/>
            <div className="account-thumb">
                <img src="assets/images/thumbs/banner-img.png" alt=""/>
                <div className="statistics animation bg-main text-center">
                    <h5 className="statistics__amount text-white"><CountUp end={50} duration={5.75} />k</h5>
                    <span className="statistics__text text-white font-14">Customers</span>
                </div>
            </div>
        </div>
    );
};

export default AccountLeft;
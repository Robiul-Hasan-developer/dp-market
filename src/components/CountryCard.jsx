import React from 'react';
import CountryList from './CountryList';

const CountryCard = () => {
    return (
        <div className="dashboard-card">
            <div className="dashboard-card__header">
                <h6 className="dashboard-card__title mb-0">Top Countries</h6>
            </div>
            <CountryList/>
        </div>
    );
};

export default CountryCard;
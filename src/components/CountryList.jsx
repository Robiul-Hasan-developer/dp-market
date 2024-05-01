import React from 'react';
import { countryLists } from '../data/OthersPageData/OthersPageData';

const CountryList = () => {
    return (
        <ul className="country-list">
            {
                countryLists.map((countryListItem, countryListItemIndex) => {
                    return (
                        <li className="country-list__item flx-between gap-2" key={countryListItemIndex}>
                            <div className="country-list__content flx-align gap-2">
                                <span className="country-list__flag">
                                    <img src={countryListItem.flag} alt=""/>
                                </span>
                                <span className="country-list__name">{countryListItem.name}</span>
                            </div>
                            <span className="country-list__amount">${countryListItem.amount}</span>
                        </li> 
                    )
                })
            }
        </ul>
    );
};

export default CountryList;
import React from 'react';
import { searchLists } from '../data/HomeTwoData/HomeTwoData';
import { Link } from 'react-router-dom';

const SearchList = () => {
    return (
        <>
            <ul className="search-list">
                {
                    searchLists.map((searchList, searchListIndex) => {
                        return (
                            <li className="search-list__item" key={searchListIndex}>
                                <Link to="/products" className="search-list__link font-14 text-heading">{searchList.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>   
        </>
    );
};

export default SearchList;
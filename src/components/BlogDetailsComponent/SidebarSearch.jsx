import React from 'react';
import SearchIcon from '../../../public/assets/images/icons/search-dark.svg';
import SearchIconWhite from '../../../public/assets/images/icons/search-dark-white.svg';

const SidebarSearch = () => {
    return (
        <form action="#" autocomplete="off">
            <div className="search-box w-100">
                <input type="text" className="common-input border-0" placeholder="Type here..."/>
                <button type="submit" className="icon line-height-1 rounded-icon white-version">
                    <img src={SearchIcon} alt=""/>
                </button>
                <button type="submit" className="icon line-height-1 rounded-icon dark-version">
                    <img src={SearchIconWhite} alt=""/>
                </button>
            </div>
        </form>
    );
};

export default SidebarSearch;
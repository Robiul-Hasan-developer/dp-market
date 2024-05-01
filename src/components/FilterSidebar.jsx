import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { filterSidebarCategories, filterSidebarDates, filterSidebarRatings } from '../data/OthersPageData/OthersPageData';
import { FilterContext } from '../contextApi/FilterContext';

const FilterSidebar = () => {

    const handleOpenSidebarItem = (event) => {
        // Find the button's parent item and its closest content element
        const button = event.currentTarget;
        const parentItem = button.closest('.filter-sidebar__item');
        const contentElement = parentItem.querySelector('.filter-sidebar__content');

        // Toggle the visibility of the content element
        if (contentElement.classList.contains('d-block')) {

            contentElement.classList.remove('d-block');
            contentElement.classList.add('d-none');
            button.classList.add('active');
        } else {
            contentElement.classList.remove('d-none');
            contentElement.classList.add('d-block');
            button.classList.remove('active');
        }
    };

    const { openProductSidebar, handleCloseProductSidebar } = useContext(FilterContext); 
    
    return (
        <>
            <div class={`side-overlay ${openProductSidebar ? 'show' : ''}`} onClick={handleCloseProductSidebar}></div>
            <div className={`filter-sidebar ${openProductSidebar ? 'show' : ''}`}>
                <button type="button" className="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block" onClick={handleCloseProductSidebar}>
                    <i className="las la-times"></i>
                </button>

                {/* Sidebar Item for Category */}
                <div className="filter-sidebar__item">
                    <button
                        type="button"
                        className="filter-sidebar__button font-16 text-capitalize fw-500"
                        onClick={handleOpenSidebarItem}
                    >
                        Category
                    </button>
                    <div className="filter-sidebar__content d-block">
                        <ul className="filter-sidebar-list">
                            {filterSidebarCategories.map((filterSidebarCategory, index) => (
                                <li className="filter-sidebar-list__item" key={index}>
                                    <Link to="/products" className="filter-sidebar-list__text">
                                        {filterSidebarCategory.text} <span className="qty">({filterSidebarCategory.qty})</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar Item for Rating */}
                <div className="filter-sidebar__item">
                    <button
                        type="button"
                        className="filter-sidebar__button font-16 text-capitalize fw-500"
                        onClick={handleOpenSidebarItem} >
                        Rating
                    </button>
                    <div className="filter-sidebar__content d-block">
                        <ul className="filter-sidebar-list">
                            {filterSidebarRatings.map((filterSidebarRating, index) => (
                                <li className="filter-sidebar-list__item" key={index}>
                                    <div className="filter-sidebar-list__text">
                                        <div className="common-check common-radio">
                                            <input className="form-check-input" type="radio" name="rating" id={filterSidebarRating.text} />
                                            <label className="form-check-label" htmlFor={filterSidebarRating.text}>
                                                {filterSidebarRating.text}
                                            </label>
                                        </div>
                                        <span className="qty">({filterSidebarRating.qty})</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar Item for Date Updated */}
                <div className="filter-sidebar__item">
                    <button
                        type="button"
                        className="filter-sidebar__button font-16 text-capitalize fw-500"
                        onClick={handleOpenSidebarItem}
                    >
                        Date Updated
                    </button>
                    <div className="filter-sidebar__content d-block">
                        <ul className="filter-sidebar-list">
                            {filterSidebarDates.map((filterSidebarDate, index) => (
                                <li className="filter-sidebar-list__item" key={index}>
                                    <div className="filter-sidebar-list__text">
                                        <div className="common-check common-radio">
                                            <input className="form-check-input" type="radio" name="date" id={filterSidebarDate.text} />
                                            <label className="form-check-label" htmlFor={filterSidebarDate.text}>
                                                {filterSidebarDate.text}
                                            </label>
                                        </div>
                                        <span className="qty">({filterSidebarDate.qty})</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;

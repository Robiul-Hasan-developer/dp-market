import React, { useContext } from 'react';
import { FilterContext } from '../contextApi/FilterContext';

const FilterForm = () => {

    const {openFilterForm, handleOpenFilterForm} = useContext(FilterContext); 

    return (
        <form action="#" className={`filter-form pb-4 ${openFilterForm ? 'd-block' : 'd-none'}`}>
            <div className="row gy-3">
                <div className="col-sm-4 col-xs-6">
                    <div className="flx-between gap-1">
                        <label htmlFor="tag" className="form-label font-16">Tag</label>
                        <button type="reset" className="text-body font-14">Clear</button>
                    </div>
                    <div className="position-relative">
                        <input type="text" className="common-input border-gray-five common-input--withLeftIcon" id="tag" placeholder="Search By Tag..."/>
                        <span className="input-icon input-icon--left">
                            <img src="assets/images/icons/search-two.svg" alt=""/>
                        </span>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-6">
                    <div className="flx-between gap-1">
                        <label htmlFor="Price" className="form-label font-16">Price</label>
                        <button type="reset" className="text-body font-14">Clear</button>
                    </div>
                    <div className="position-relative">
                        <input type="text" className="common-input border-gray-five" id="Price" placeholder="$7 - $29"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="flx-between gap-1">
                        <label htmlFor="time" className="form-label font-16">Time Frame</label>
                        <button type="reset" className="text-body font-14">Clear</button>
                    </div>
                    <div className="position-relative select-has-icon">
                        <select id="time" className="common-input border-gray-five">
                            <option value="1">Now</option>
                            <option value="2">Yesterday</option>
                            <option value="2">1 Month Ago</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FilterForm;
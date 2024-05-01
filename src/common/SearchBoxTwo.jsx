import React from 'react';
import { useNavigate } from 'react-router-dom';
import { bannerCategories } from '../data/HomeTwoData/HomeTwoData';

const SearchBoxTwo = () => {

      // Navigate To Product Page
      const navigate = useNavigate();  

      const handleNavigateProduct = () => {
          navigate('/products'); 
      }
    
    return (
        <>
            <form action="#" className="search-box style-two">
                <div className="search-box__select select-has-icon">
                    <select className="form-control form-control py-0 border-0 bg-transparent">
                        <option value="1" defaultValue>All Categories</option>
                        {
                            bannerCategories.map((bannerCategory, bannerCategoryIndex) => {
                                return (
                                    <option value={bannerCategory.text} key={bannerCategoryIndex}>
                                        {bannerCategory.text}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <input type="text" className="common-input common-input--lg pill shadow-sm" placeholder="Search theme, plugins &amp; more..."/>
                <button type="submit" className="btn btn-main btn-icon icon border-0" onClick={handleNavigateProduct}>
                    <img src="assets/images/icons/search.svg" alt=""/>
                </button>
            </form>   
        </>
    );
};

export default SearchBoxTwo;
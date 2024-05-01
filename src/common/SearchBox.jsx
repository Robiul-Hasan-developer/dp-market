import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = (props) => {

    const navigate = useNavigate();  

    const handleNavigateProduct = () => {
        navigate('/products'); 
    }
    
    return (
        <form action='#' className={`search-box ${props.formClass}`}>
            <input type="text" className={`common-input ${props.inputClass}`} placeholder={props.placeholderText}/>
            <button type="submit" className="btn btn-main btn-icon icon border-0" onClick={handleNavigateProduct}>
                <img src="assets/images/icons/search.svg" alt=""/>
            </button>
        </form> 
    );
};

export default SearchBox;
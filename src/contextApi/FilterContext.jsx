import React, { createContext, useState } from 'react';

export const FilterContext = createContext(); 

const FilterContextProvider = ({ children }) => {

    const [openFilterForm, setOpenFilterForm] = useState(false);

    const handleOpenFilterForm = () => {
        setOpenFilterForm(!openFilterForm)
    }

    const [openProductSidebar, setOpenProductSidebar] = useState(false);

    const handleOpenProductSidebar = () => {
        setOpenProductSidebar(!openProductSidebar)
    }
    const handleCloseProductSidebar = () => {
        setOpenProductSidebar(false)
    }
    
    return (
        <FilterContext.Provider value={{ openFilterForm, handleOpenFilterForm, openProductSidebar, setOpenProductSidebar, handleOpenProductSidebar, handleCloseProductSidebar }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContextProvider;
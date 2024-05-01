import React, { useState } from 'react';

const ListGridButtons = () => {

    const [listGrid, setListGrid] = useState(false);

    const handleListGrid = () => {
        setListGrid(!listGrid); 
        document.body.classList.toggle('list-view'); 
    }
    
    return (
        <>
            <button 
                className={`list-grid__button list-button d-sm-flex d-none text-body ${!listGrid ? 'active' : ''}`} 
                onClick={handleListGrid} >
                <i className="las la-border-all"></i>
            </button>
            <button 
                className={`list-grid__button grid-button d-sm-flex d-none text-body ${listGrid ? 'active' : ''}`} 
                onClick={handleListGrid} >
                <i className="las la-list"></i>
            </button>
        </>
    );
};

export default ListGridButtons;
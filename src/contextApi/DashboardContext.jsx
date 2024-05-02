import React, { createContext, useState } from 'react';

export const DashboardContext = createContext(); 

const DashboardContextProvider = ({ children }) => {

    const [collapseSidebar, setCollapseSidebar] = useState(false);

    const handleCollapseSidebar = () => {
        setCollapseSidebar(!collapseSidebar); 
    }

    const handleCollapseSidebarClose = () => {
        setCollapseSidebar(false); 
    }
    
    
    return (
        <DashboardContext.Provider value={{ collapseSidebar, setCollapseSidebar, handleCollapseSidebar, handleCollapseSidebarClose }}>
            { children }
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;
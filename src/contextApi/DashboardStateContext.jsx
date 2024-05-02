import React, { createContext, useState } from 'react';

export const DashboardStateContext = createContext(); 

const DashboardStateContextProvider = ({ children }) => {

    const [userNameData, setUserNameData] = useState('User');
    
    return (
        <DashboardStateContext.Provider value={{ userNameData, setUserNameData }}>
            {children}
        </DashboardStateContext.Provider>
    );
};

export default DashboardStateContextProvider;
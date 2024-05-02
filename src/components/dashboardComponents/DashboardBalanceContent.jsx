import React, { useContext } from 'react';
import { DashboardStateContext } from '../../contextApi/DashboardStateContext';

const DashboardBalanceContent = () => {

    const randomNumber = Math.ceil(Math.random() * 500); 

    const { userNameData } = useContext(DashboardStateContext);
    
    return (
        <div className="welcome-balance mt-2 mb-40 flx-between gap-2">
            <div className="welcome-balance__left">
                <h4 className="welcome-balance__title mb-0">Welcome back! {userNameData} </h4>
            </div>
            <div className="welcome-balance__right flx-align gap-2">
                <span className="welcome-balance__text fw-500 text-heading">Available Balance:</span>
                <h4 className="welcome-balance__balance mb-0">${randomNumber}.00</h4>
            </div>
        </div>
    );
};

export default DashboardBalanceContent;
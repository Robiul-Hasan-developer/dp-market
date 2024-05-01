import React, { useState } from 'react';
import SplineChart from '../SplineChart';
import CountryCard from '../CountryCard';
import { salesHistory } from '../../data/OthersPageData/OthersPageData';

const DashboardBodyCards = () => {

    const [saleHistory, setSaleHistory] = useState();
    
    const handleSaleHistoryChange = (event) => {
        const salesValue = event.target.value; 
        setSaleHistory(salesValue);
    }
    
    return (
        <div className="dashboard-body__item">
            <div className="row gy-4">
                <div className="col-xl-8">
                    <div className="dashboard-card">
                        <div className="dashboard-card__header flx-between gap-2">
                            <h6 className="dashboard-card__title mb-0">Sales History</h6>
                            <div className="select-has-icon d-inline-block">
                                <select className="select common-input select-sm" onChange={handleSaleHistoryChange}>
                                    {
                                        salesHistory.map((salesHistoryItem, salesHistoryItemIndex) => {
                                            return (
                                                <option value={salesHistoryItem.text} key={salesHistoryItemIndex}>
                                                    {salesHistoryItem.text}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="dashboard-card__chart">
                            <SplineChart/>
                        </div>  
                    </div>
                </div>
                <div className="col-xl-4">
                    <CountryCard/>
                </div>
            </div>
        </div>
    );
};

export default DashboardBodyCards;
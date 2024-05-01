import React from 'react';

const DbWidgetItem = ({ dashboardWidgetItem }) => {

    const {shapeOne, shapeTwo, icon, number, text, chartIcon} = dashboardWidgetItem; 
    
    return (
        <div className="col-xl-3 col-sm-6">
            <div className="dashboard-widget">
                <img src={shapeOne} alt="" className="dashboard-widget__shape one"/>
                <img src={shapeTwo} alt="" className="dashboard-widget__shape two"/>
                <span className="dashboard-widget__icon">
                    <img src={icon} alt=""/>
                </span>
                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                    <div>
                        <h4 className="dashboard-widget__number mb-1 mt-3">{number}</h4>
                        <span className="dashboard-widget__text font-14">{text}</span>
                    </div>
                    <img src={chartIcon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DbWidgetItem;
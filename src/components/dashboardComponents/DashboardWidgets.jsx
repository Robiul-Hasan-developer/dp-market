import React from 'react';
import { dashboardWidgets } from '../../data/OthersPageData/OthersPageData';
import DbWidgetItem from '../items/DbWidgetItem';

const DashboardWidgets = () => {
    return (
        <div className="dashboard-body__item">
            <div className="row gy-4">

                {
                    dashboardWidgets.map((dashboardWidgetItem, dashboardWidgetItemIndex) => {
                        return (
                           <DbWidgetItem dashboardWidgetItem={dashboardWidgetItem} key={dashboardWidgetItemIndex} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DashboardWidgets;
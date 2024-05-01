import React from 'react';
import { earningCardInfos } from '../../data/OthersPageData/OthersPageData';
import EarningCard from '../items/EarningCard';
import SplineChart from '../SplineChart';
import CountryCard from '../CountryCard';
import EarningTable from './EarningTable';

const Earning = () => {
    return (
        <div className="row gy-4">

            {
                earningCardInfos.map((earningCardInfoItem, earningCardInfoItemIndex) => {
                    return (
                        <EarningCard earningCardInfoItem={earningCardInfoItem} key={earningCardInfoItemIndex}/>
                    )
                })
            }            

        
            <div className="col-lg-8">
                <div className="dashboard-card">
                    <div className="dashboard-card__header">
                        <h6 className="dashboard-card__title mb-0">Item Sales</h6>
                    </div>

                    <SplineChart/>

                </div>
            </div>
            <div className="col-lg-4">
                <CountryCard/>
            </div>
        
            <div className="col-lg-12">
                <div className="card common-card border shadow-none border-gray-five">
                    <div className="card-body">
                        <EarningTable tableClass="text-body mt--24 "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earning;
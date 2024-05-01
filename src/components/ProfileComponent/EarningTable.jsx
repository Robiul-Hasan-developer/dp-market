import React from 'react';
import { earningTdData, earningThData } from '../../data/OthersPageData/OthersPageData';

const EarningTable = (props) => {
    return (
        <div className="table-responsive">
            <table className={`table ${props.tableClass}`}>
                <thead>
                    <tr>
                        {
                            earningThData.map((earningThDataItem, earningThDataItemIndex) => {
                                return (
                                    <th key={earningThDataItemIndex}>{earningThDataItem.text}</th>   
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        earningTdData.map((earningTdDataItem, earningTdDataItemIndx) => {
                            return (
                                <tr key={earningTdDataItemIndx}>
                                    <td> {earningTdDataItem.date}</td>
                                    <td> {earningTdDataItem.count}</td>
                                    <td> ${earningTdDataItem.earning}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EarningTable;
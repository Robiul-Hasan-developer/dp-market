import React from 'react';
import { statementTableTd, statementTableTh } from '../../data/OthersPageData/OthersPageData';
import Pagination from './../../common/Pagination';
import { Link } from 'react-router-dom';
import { getCurrentFormattedDate, getCurrentTime } from '../../utility/Utility';

const StatementTable = () => {

    const currentTime = getCurrentTime(); 
    
    const currentFormattedDate = getCurrentFormattedDate(); 


    return (
        <div className="card common-card border border-gray-five">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table text-body mt--24">
                        <thead>
                            <tr>
                                {
                                    statementTableTh.map((statementTableThItem, statementTableThItemIndex) => {
                                        return (
                                            <th key={statementTableThItemIndex}>{statementTableThItem.text}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                statementTableTd.map((statementTableTdItem, statementTableTdItemIndex) => {
                                    return (
                                        <tr key={statementTableTdItemIndex}>
                                            <td data-label="Date">{currentFormattedDate} {currentTime}</td>
                                            <td data-label="Order ID">{statementTableTdItem.orderId} </td>
                                            <td data-label="Type"> {statementTableTdItem.type}</td>
                                            <td data-label="Price"> {statementTableTdItem.price}</td>
                                            <td data-label="Details">
                                                <Link to={statementTableTdItem.btnLink} className="btn btn-main">
                                                    { statementTableTdItem.btnIcon }
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                    <div className="flx-between gap-2">
                        <div className="paginate-content flx-align flex-nowrap gap-3">
                            <select className="select common-input py-2 px-3 w-auto">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <span className="paginate-content__text fs-14">Showing 1 - 10 of 100</span>
                        </div>

                        <Pagination/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatementTable;
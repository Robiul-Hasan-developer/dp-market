import React from 'react';
import { statementData } from '../../data/OthersPageData/OthersPageData';

const StatementCards = () => {
    return (
        <>
            {
                statementData.map((statementDataItem, statementDataItemIndex)=> {
                    return (
                        <div className="col-lg-6" key={statementDataItemIndex}>
                            <div className="statement-item card common-card border border-gray-five">
                                <div className="card-body">
                                    <div className="statement-item__header">
                                        <h6 className="statement-item__title">{statementDataItem.title}</h6>
                                    </div>
                                    <ul className="statement-list">
                                        {
                                            statementDataItem.statementList && statementDataItem.statementList.map((statementListItem, statementListItemIndex) => {
                                                return (
                                                    <li className="statement-list__item text-center" key={statementListItemIndex}>
                                                        <span className="statement-list__text font-13">{statementListItem.text}</span>
                                                        <h6 className="statement-list__amount mb-0 mt-1 fw-600">${statementListItem.amount}</h6>
                                                    </li>
                                                )
                                            }) 
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }   
        </>
    );
};

export default StatementCards;
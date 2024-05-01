import React from 'react';

const EarningCard = ({ earningCardInfoItem }) => {

    const {testiBg, title, text, amount, desc} = earningCardInfoItem; 
    
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="earning-card position-relative z-index-1">
                <img src={testiBg} alt="" className="hover-bg visible opacity-100"/>
                <div>
                    <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">{title}</h6>
                    {
                        text && (
                            <p className="earning-card__text font-14  text-white fw-200">{text}</p>
                        )
                    }
                </div>
                <div>
                    <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">${amount}</h5>
                    <p className="earning-card__text font-14  text-white fw-200">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default EarningCard;
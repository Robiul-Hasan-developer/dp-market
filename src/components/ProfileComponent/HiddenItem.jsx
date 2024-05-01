import React from 'react';
import { rejectedProducts } from '../../data/OthersPageData/OthersPageData';
import RejectedProjectItem from '../items/RejectedProjectItem';

const HiddenItem = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-10">
                <div className="product-reject__wrapper">

                    {
                        rejectedProducts.map((rejectedItem, rejectedItemIndex) => {
                            return (
                              <RejectedProjectItem rejectedItem={rejectedItem} key={rejectedItemIndex}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default HiddenItem;
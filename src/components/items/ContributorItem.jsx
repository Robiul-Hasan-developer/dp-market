import React from 'react';
import { Link } from 'react-router-dom';

const ContributorItem = ({ contributorItem }) => {

    const {badgeImage, authorThumb, author, contributorSoled, mainImage} = contributorItem; 
    
    return (
        <div className="col-sm-6 col-xs-6">
            <div className="contributor-item">
                <img src={badgeImage} alt="" className="contributor-item__badge"/>
                <div className="contributor-item__content">
                    <div className="contributor-info flx-align gap-2">
                        <div className="contributor-info__thumb">
                            <img src={authorThumb} alt=""/>
                        </div>
                        <div className="contributor-info__content">
                            <h6 className="contributor-info__name mb-1 text-white">
                                <Link to="/profile" state={{ authorThumb, author }}> {author} </Link>
                            </h6>
                            <span className="contributor-info__text text-white font-14">{contributorSoled}</span>
                        </div>
                    </div>
                    <div className="contributor-item__thumb">
                        <img src={mainImage} alt="" className="cover-img"/>
                        <Link to="/profile" state={{ authorThumb, author }} className="contributor-item__link">
                            <img src="assets/images/icons/link-white.svg" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default ContributorItem;
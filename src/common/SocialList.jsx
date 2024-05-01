import React from 'react';
import { socialLists } from '../data/CommonData/CommonData';
import { Link } from 'react-router-dom';

const SocialList = (props) => {
    return (
        <ul className={`social-list ${props.ulClass}`}>
            {
                socialLists.map((socialList, index) => {
                    return (
                        <li className="social-list__item" key={index}>
                            <Link to={socialList.link} className={`social-list__link flx-center ${props.linkClass}`}>
                                {socialList.icon}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default SocialList;
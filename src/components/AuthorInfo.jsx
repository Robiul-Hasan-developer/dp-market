import React from 'react';
import authorThumb from '../../public/assets/images/thumbs/author-img.png';
import { randomYear } from '../utility/Utility';
import { Link } from 'react-router-dom';

const AuthorInfo = () => {

    const getRandomYear = randomYear(); 
    
    const author = 'Amplify'; 

    
    return (
        <div className="author-info d-flex align-items-center gap-3">
            <div className="author-info__thumb">
                <img src={authorThumb} alt=""/>
            </div>
            <div className="author-info__content">
                <h4 className="author-info__name mb-1">
                    <Link to="/profile" state={{ authorThumb, author }}>
                        {author}
                    </Link>
                </h4>
                <span className="author-info__text">Member Since {getRandomYear}</span>
            </div>
        </div>
    );
};

export default AuthorInfo;
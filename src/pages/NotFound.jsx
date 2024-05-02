import React  from 'react';
import Button from '../common/Button';
import PageTitle from '../common/PageTitle';

const NotFound = () => {

    return (
        <>
        <PageTitle title="DP Market - 404 Page Not Found" />

            <div className="not-found text-center">
                <div className="not-found__inner">
                    <span className="not-found__icon">
                        <i className="far fa-frown text-body"></i>
                    </span>
                    <h1 className='mt-4 mb-5 font-body'>404 Page Not Found</h1>   
                    <Button 
                        btnLink="/" 
                        btnClass="btn-main btn-lg pill" 
                        btnText="Back To Home" 
                        spanClass="icon-right" 
                        iconClass="" 
                    />
                </div>
            </div>
        </>
    );
};

export default NotFound;
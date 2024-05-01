import React, { useState } from 'react';
// import Countdown from 'react-countdown';



// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };


const BestSeller = (props) => {

    const [closeSeller, setCloseSeller] = useState(false);
    
    const handleCloseSeller = () => {
        setCloseSeller(!closeSeller); 
    }

    
    return (
        <div className={`sale-offer ${props.saleClass} ${closeSeller ? 'd-none' : ''}`}>
            <div className="container container-full ">
                <div className="sale-offer__content flx-between position-relative">
                    <div className="sale-offer__countdown">
            
                        <div className="countdown" data-date="14-10-2026" data-time="12:00">
                            {/* <Countdown
                                date={Date.now() + 5000}
                                renderer={renderer}
                            /> */}
                        </div>
            
                    </div>
                    <div className="sale-offer__discount flx-align gap-2">
                        <span className="sale-offer__text text-heading text-capitalize">New Year Flash Sale Offer</span>
                        <strong className="sale-offer__qty text-heading font-heading">45% OFF</strong>
                        <a href="#" className="btn btn-sm btn-white pill fw-500">Shop Now</a>
                    </div>
                    <div className="sale-offer__button">
                        <button type="submit" className="sale-offer__close text-heading" onClick={handleCloseSeller}> 
                            <i className="las la-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    );
};

export default BestSeller;
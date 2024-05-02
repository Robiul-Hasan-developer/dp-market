import React, { useState, useEffect } from 'react';
import CountDownContent from './CountDownContent.jsx';

const BestSeller = (props) => {
    const [closeSeller, setCloseSeller] = useState(false);

    const handleCloseSeller = () => {
        setCloseSeller(!closeSeller);
    };

    return (
        <div className={`sale-offer ${props.saleClass} ${closeSeller ? 'd-none' : ''}`}>
            <div className="container container-full">
                <div className="sale-offer__content flx-between position-relative">
                    <div className="sale-offer__countdown">
                        
                        <CountDownContent/>
                        
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



// import React, { useState, useEffect } from 'react';

// const BestSeller = (props) => {
//     const [closeSeller, setCloseSeller] = useState(false);

//     const [countdownTime, setCountdownTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//     const handleCloseSeller = () => {
//         setCloseSeller(!closeSeller);
//     };

//     useEffect(() => {
//         // Function to update the countdown
//         const updateCountdown = () => {
//             // Get the countdown element
//             const countdownElement = document.querySelector('.countdown');
//             const targetDate = countdownElement.getAttribute('data-date');
//             const targetTime = countdownElement.getAttribute('data-time');

//             // Convert target date and time to a Date object
//             const targetDateTime = new Date(`${targetDate} ${targetTime}`);
            
//             // Calculate the difference between the target date and the current time
//             const now = new Date();
//             const timeDifference = targetDateTime - now;

//             if (timeDifference > 0) {
//                 // Calculate the time remaining in days, hours, minutes, and seconds
//                 const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//                 const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
//                 const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
//                 const seconds = Math.floor((timeDifference / 1000) % 60);

//                 // Update the state with the calculated time remaining
//                 setCountdownTime({ days, hours, minutes, seconds });
//             } else {
//                 // When the countdown is over, set the countdown to zero
//                 setCountdownTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//             }
//         };

//         // Start the countdown update every second
//         const interval = setInterval(updateCountdown, 1000);

//         // Cleanup function to clear the interval when the component unmounts
//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div className={`sale-offer ${props.saleClass} ${closeSeller ? 'd-none' : ''}`}>
//             <div className="container container-full">
//                 <div className="sale-offer__content flx-between position-relative">
//                     <div className="sale-offer__countdown">
                        
//                         <div className="countdown" data-date="2026-10-14" data-time="12:00">
//                             <div className="day"><span className="num">{countdownTime.days}</span><span className="word"> Days:</span></div>
//                             <div className="hour"><span className="num">{countdownTime.hours.toString().padStart(2, '0')}</span><span className="word"> Hour:</span></div>
//                             <div className="min"><span className="num">{countdownTime.minutes.toString().padStart(2, '0')}</span><span className="word"> Min:</span></div>
//                             <div className="sec"><span className="num">{countdownTime.seconds.toString().padStart(2, '0')}</span><span className="word"> Sec:</span></div>
//                         </div>
                        
//                     </div>
//                     <div className="sale-offer__discount flx-align gap-2">
//                         <span className="sale-offer__text text-heading text-capitalize">New Year Flash Sale Offer</span>
//                         <strong className="sale-offer__qty text-heading font-heading">45% OFF</strong>
//                         <a href="#" className="btn btn-sm btn-white pill fw-500">Shop Now</a>
//                     </div>
//                     <div className="sale-offer__button">
//                         <button type="submit" className="sale-offer__close text-heading" onClick={handleCloseSeller}> 
//                             <i className="las la-times"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BestSeller;

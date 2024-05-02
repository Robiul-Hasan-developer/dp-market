import React, { useEffect, useState } from 'react';

const CountDownContent = () => {

    const [countdownTime, setCountdownTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    useEffect(() => {
        const updateCountdown = () => {
            const countdownElement = document.querySelector('.countdown');
            const targetDate = countdownElement.getAttribute('data-date');
            const targetTime = countdownElement.getAttribute('data-time');

            // Convert target date and time to a Date object
            const targetDateTime = new Date(`${targetDate} ${targetTime}`);
            
            // Calculate the difference between the target date and the current time
            const now = new Date();
            const timeDifference = targetDateTime - now;

            if (timeDifference > 0) {
                // Calculate the time remaining in days, hours, minutes, and seconds
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                // Update the state with the calculated time remaining
                setCountdownTime({ days, hours, minutes, seconds });
            } else {
                // When the countdown is over, set the countdown to zero
                setCountdownTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Start the countdown update every second
        const interval = setInterval(updateCountdown, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="countdown" data-date="2026-10-14" data-time="12:00">
            <div className="day"><span className="num">{countdownTime.days}</span><span className="word"> Days:</span></div>
            <div className="hour"><span className="num">{countdownTime.hours.toString().padStart(2, '0')}</span><span className="word"> Hour:</span></div>
            <div className="min"><span className="num">{countdownTime.minutes.toString().padStart(2, '0')}</span><span className="word"> Min:</span></div>
            <div className="sec"><span className="num">{countdownTime.seconds.toString().padStart(2, '0')}</span><span className="word"> Sec:</span></div>
        </div>
    );
};

export default CountDownContent;
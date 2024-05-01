import React from 'react';
import QuoteIcon from '../../../public/assets/images/icons/quote-icon.svg';

const Quote = () => {
    return (
        <div className="quote-text mb-40">
            <img src={QuoteIcon} alt="" className="quote-text__icon"/>
            <p className="quote-text__desc mb-3 font-20 fw-500 text-heading">“Through their vision, determination, and exacting standards, the winning young developers inspire not only their peers in the Apple developer.</p>
            <h6 className="quote-text__name">Esabela Marun</h6>
        </div>
    );
};

export default Quote;
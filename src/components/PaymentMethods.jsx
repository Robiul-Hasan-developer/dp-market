import React from 'react';
import { paymentMethods } from '../data/OthersPageData/OthersPageData';

const PaymentMethods = () => {
    return (
        <>
            {
                paymentMethods.map((paymentMethod, paymentMethodIndex) => {
                    return (
                        <div className="payment-method__item" key={paymentMethodIndex}>
                            <input className="form-check-input" type="radio" name="payment" id={paymentMethod.label}/>
                            <label className="form-check-label" htmlFor={paymentMethod.label}>
                                <img src={paymentMethod.image} alt=""/>
                            </label>
                        </div>
                    )
                })
            }
        </>
    );
};

export default PaymentMethods;
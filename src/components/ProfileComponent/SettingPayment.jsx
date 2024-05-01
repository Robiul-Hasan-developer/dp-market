import React from 'react';
import PaymentMethods from '../PaymentMethods';

const SettingPayment = () => {
    return (
        <div className="card common-card border border-gray-five overflow-hidden mb-24" id="paymentSystem">
            <div className="card-header">
                <h6 className="title">Payment Method</h6>
            </div>
            <div className="card-body">
                <div className="payment-method mb-0">
                    <div className="payment-method__wrapper arrow-sm">

                        <PaymentMethods/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingPayment;
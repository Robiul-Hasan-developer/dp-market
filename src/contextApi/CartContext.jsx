import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [increment, setIncrement] = useState(1);

    const handleIncrement = () => {
        setIncrement(increment + 1)
    }

    const handleDecrement = () => {
        if(increment > 1) {
            setIncrement(increment - 1)
        }
    }
    
    return (
        <CartContext.Provider value={{ increment, setIncrement, handleIncrement, handleDecrement }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
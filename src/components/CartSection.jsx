import React, { useState } from 'react';
import { tableThData } from '../data/OthersPageData/OthersPageData';
import { Link } from 'react-router-dom';
import TableTrItem from './items/TableTrItem';
import { products as initialProducts} from './../data/HomeOneData/HomeOneData';
import { ToastContainer, toast } from 'react-toastify';

const CartSection = () => {

    // Manage the list of products in state
    const [products, setProducts] = useState(initialProducts.slice(0, 4));

    // Function to remove a product from the list
    const handleRemoveProduct = (index) => {
        // Filter out the product at the given index. Here filter((_, i) means filter((currentIndex, i)
        const updatedProducts = products.filter((_, i) => i !== index);
        // Update the state with the new list of products
        setProducts(updatedProducts);

        toast.success("Item Removed Successfully.", {
            theme: "colored",
        });
    };

    
    return (
        <>
            <ToastContainer/>
            <div className="cart padding-y-120">
                <div className="container">
                    <div className="cart-content">
                        <div className="table-responsive">
                            <table className="table style-two">
                                <thead>
                                <tr>
                                    {
                                        tableThData.map((tableThItem, tableThItemIndex) => {
                                            return (
                                                <th key={tableThItemIndex}>{tableThItem.text}</th>
                                            )
                                        })
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length === 0 ? (
                                            <tr>
                                                <td colSpan="100" className="text-center">
                                                    <div className="d-flex flex-column justify-content-center gap-2">
                                                        <i className="far fa-frown font-40 text-body"></i>
                                                        <span className="font-18">Your cart is empty</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            products.map((productItem, productItemIndex) => {
                                                return (
                                                    <TableTrItem 
                                                        productItem={productItem} 
                                                        key={productItemIndex}
                                                        index={productItemIndex}
                                                        onRemoveProduct={handleRemoveProduct}
                                                    />
                                                )
                                            })
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
            
                        <div className="cart-content__bottom flx-between gap-2">
                            <Link to="/products" className="btn btn-outline-light flx-align gap-2 pill btn-lg"> 
                                <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span> 
                                Continue Shopping
                            </Link>
                            
                            <Link to="/mailing-address" className="btn btn-main flx-align gap-2 pill btn-lg"> 
                                Next
                                <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartSection;
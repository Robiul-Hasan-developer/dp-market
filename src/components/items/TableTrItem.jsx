import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRandomNumber, slugURL } from '../../utility/Utility';

const TableTrItem = ({ productItem, index, onRemoveProduct }) => {

    const {thumb, title, author, price, prevPrice, category} = productItem; 

    // Product Details Slug
    const productURL = slugURL({url: 'products', slug: title}); 

    // Random Sales & Rating 
    const {randomRatingText, randomSales} = getRandomNumber(); 
    
    // add Wishlist Toggle
    const [addWishlist, setAddWishlist] = useState();
    
    const handleAddWishlist = () => {
        setAddWishlist(!addWishlist); 
    }

    // increment & Decrement
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = (index) => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = (index) => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    // increment & Decrement End
    

    return (
        <tr>
            <td>
                <div className="cart-item">
                    <div className="d-flex align-items-center gap-3">
                        <div className="cart-item__thumb">
                            <Link to={productURL} state={{ thumb, title, author, price, prevPrice, category, randomSales, randomRatingText }} className="link">
                                <img src={thumb} alt="" className="cover-img"/>
                            </Link>
                        </div>
                        <div className="cart-item__content">
                            <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                                <Link to={productURL} state={{ thumb, title, author, price, prevPrice, category, randomSales, randomRatingText }} className="link">
                                    {title} 
                                </Link>
                            </h6>
                            <span className="cart-item__price font-18 text-heading fw-500">Category: <span className="text-body font-14"> {category}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flx-align gap-4 mt-3 mt-lg-4">
                        <div className="flx-align gap-2">
                            <button type="button" className={`product-card__wishlist style-two ${addWishlist ? 'active' : ''}`} onClick={()=>handleAddWishlist()}>
                                <i className="fas fa-heart"></i>
                            </button>
                            <span className="text-body">Add to wishlist</span>
                        </div>
                        <button type="button" className="rounded-btn delete-btn text-danger hover-text-decoration-underline" onClick={()=>onRemoveProduct(index)}>
                            Remove
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <div className="cart-item__count">
                    <button data-decrease="data-decrease" onClick={()=>handleDecrement(index)}> 
                        <i className="fas fa-minus"></i>
                    </button>
                    <input data-value="data-value" type="number" min={1} value={quantity}/>
                    <button data-increase="data-increase" onClick={()=>handleIncrement(index)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </td>
            <td>
                <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">${price}</span>
            </td>
            <td>
                <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0"> ${price * quantity}</span>
            </td>
        </tr>
    );
};

export default TableTrItem;
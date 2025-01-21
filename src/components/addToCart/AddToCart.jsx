import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { addToCard, decreseCart, clearCart, removeFromCart } from '../../store/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'


const AddToCart = () => {

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const incrementValue = (cartItem) => {
        dispatch(addToCard(cartItem))
        toast.success("Increased Product Successfully !")
    }

    const decrementValue = (cartItem) => {
        dispatch(decreseCart(cartItem));
        toast.success("Decreased Product Successfully !")
    }

    return (

        <div className="cart-container" style={{ marginTop: "7%", textAlign: "center", background: "linear-gradient(135deg, #f0f9ff, #cbebff)", padding: "30px", borderRadius: "15px", boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", }}>
            <Toaster />
            <h2 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "2.5rem", color: "#333", }}>
                Shopping Cart
            </h2>

            {cart.cartItems.length === 0 ? (

                <div className="cart-empty" style={{ padding: "30px", borderRadius: "15px", background: "#ffffff", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", marginTop: "20px", }}>
                    <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
                        Your cart is currently empty. Don't wait any longer, explore now and find
                        amazing products!
                    </p>
                    <Link to="/" style={{ color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "1.2rem", fontWeight: "bold", background: "#007bff", borderRadius: "20px" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            aria-label="Arrow Left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H4.707l4.646 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L4.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                            />
                        </svg>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            ) : (

                <div className="shopping-cart-container">
                    <div className="cart-titles">
                        <h4 className="product-title">Product</h4>
                        <h4 className="price-title">Price</h4>
                        <h4 className="quantity-title">Quantity</h4>
                        <h4 className="total-title">Total</h4>
                    </div>

                    {cart.cartItems.map((cartItem) => (
                        <div className="cart-row" key={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt={cartItem.name} className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-name">{cartItem.name}</h3>
                                    <p className="product-desc">{cartItem.desc}</p>
                                    <button className="remove-button" onClick={() => handleRemoveFromCart(cartItem)}>
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <div className="cart-product-price">
                                ${cartItem.price}
                            </div>

                            <div className="cart-product-quantity">
                                <button className="quantity-button" onClick={() => { decrementValue(cartItem) }}>
                                    -
                                </button>

                                <div className="quantity-count" >
                                    {cartItem.cartQuantity}
                                </div>

                                <button className="quantity-button" onClick={() => { incrementValue(cartItem) }} >
                                    +
                                </button>
                            </div>

                            <div>
                                ${Number(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                            </div>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <button className="clear-cart-button" onClick={handleClearCart}>
                            Clear All Cart
                        </button>
                        <div className="checkout-section">
                            <div className="subtotal">
                                <span style={{ fontSize: "25px", fontWeight: "bold", marginLeft: "40px" }}>Subtotal</span>&nbsp;&nbsp;&nbsp;
                                <span style={{ fontSize: "25px" }}>
                                    ${cart.cartTotalAmount.toFixed(2)}
                                </span>
                            </div>

                            <br />

                            <div className="continue-shopping">
                                <Link to="/" className="continue-link">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        aria-label="Arrow Left to Continue Shopping"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 1-.5.5H4.707l4.646 4.646a.5.5 0 0 1-.708.708l-4.646-4.646a.5.5 0 0 1 0-.708L8.646 3.146a.5.5 0 0 1 .708.708L4.707 7.5H14.5a.5.5 0 0 1 .5.5z"
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddToCart;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const [cate, setCate] = useState([])

    const cardProduct = useSelector(state => state.cart)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                setCate(res.data)
            })
    }, [])


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid" style={{ backgroundColor: "#222" }}>
                    <Link style={{ color: "white" }} class="navbar-brand" to="#">Fashion Store</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link style={{ color: "white" }} class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link style={{ color: "white" }} class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Categories
                                </Link>
                                <ul class="dropdown-menu">
                                    {
                                        cate.map((item, index) =>
                                            <li key={index}>
                                                <Link class="dropdown-item" to={`/?cate_name=${item}`} style={{ textTransform: "capitalize" }}>{item}</Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link style={{ color: "white", marginLeft: "1400px"}} class="nav-link active" aria-current="page" to="/">CART</Link>
                            </li>

                            <Link to="/cart" className="d-flex align-items-center ms-auto">
                                <div className="d-flex align-items-center" style={{  }}>

                                    <svg
                                    
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-label="Cart Icon"
                                        color='white'
                                    >
                                        <circle cx="9" cy="20" r="1.5" />
                                        <circle cx="17" cy="20" r="1.5" />
                                        <path d="M5 5h2l1 7h8l1.5-5H7" />
                                        <path d="M2 2h2l2 12h12" />
                                    </svg>

                                    <span style={{ color: "white" }} className="ms-2">{cardProduct.cartItems.length}</span>

                                </div>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

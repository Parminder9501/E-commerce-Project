import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCard } from '../../store/slice/cartSlice';
 


const ProductsDetails = () => {

    const use_params = useParams()
    let { id } = useParams();

    const dispatch = useDispatch()

    const [state, setState] = useState(
        {
            title: "",
            price: "",
            category: "",
            description: "",
            image: "",
            
        }
    )

    useEffect(() => {
        window.scrollTo(0, 10);
        axios.get("https://fakestoreapi.com/products/" + id)
            .then((res) => {
                setState(res.data)
            })
    }, [])


    const addToCardData = (item) => {
        // alert(item)
        dispatch(addToCard(item));
        toast.success("Cart Added Successfully !")
    }


    return (
        <>
            <Toaster/>
            <div className='container' style={{marginTop:"5%"}}>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-md-12'>
                        <div className='card mb-3'>
                            <div className='row '>
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                    <div style={{ width: "500px", padding:"50px" }}>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: state.image,
                                                width: 400,
                                                height: 450
                                            },
                                            largeImage: {
                                                src: state.image,
                                                width: 1200,
                                                height: 1800
                                            }
                                        }} />
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 d-flex align-items-center' style={{ paddingTop:"50px" }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{state.title}</h5>
                                        <p className='card-text' style={{ textAlign: "justify" }}>{state.description}</p>
                                        <p className='card-text' style={{ textAlign: "justify" }}>{state.price}</p>
                                        <p className='card-text'>
                                            <small className='text-body-secondary'>Last Updated 3 mins Ago</small>
                                        </p>
                                        <br />
                                        <br />
                                        <button className='btn btn-danger' onClick={() => { addToCardData(state) }}>Add to Card</button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsDetails

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { addToCard } from '../../store/slice/cartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';


const Dashboard = () => {

  const use_navigate = useNavigate()

  const dispatch = useDispatch()

  const [state, setState] = useState([]);

  const [cate, setCate] = useState([])

  const [searchParams] = useSearchParams();    
  const query = searchParams.get('cate_name');    




  const getAllCategory = () => [                  
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCate(res.data)
      })
  ]

  const getAllProducts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setState(res.data);
      })
  }

  const getDataByCategoryName = (cate_name) => {
    window.scrollTo(0, 0);
    axios.get("https://fakestoreapi.com/products/category/" + cate_name)
      .then((res) => {
        // console.log(res.data)
        setState(res.data);
      })
  };


  useEffect(() => {
    // getAllProducts()
    // getAllCategory()

    if (query != null) {    
      getAllProducts()
      getAllCategory()
      getDataByCategoryName(query)
    }
    else {
      getAllProducts()
      getAllCategory()
    }
  }, [query])


  const addToCardData = (item) => {
    dispatch(addToCard(item))
    toast.success("Cart Added Successfully !")
  }

  const goToProductDetail = (id) => {
    use_navigate(`product-details/${id}`)
  }


  return (
    <>
      <Toaster />
      <img src="images/sale.png" class="d-block w-100 my_img" alt="..." />
      
      <div className='container-fluid' style={{ marginTop: "2%" }}>
        <div className='row' >
          <div className='col-12 col-md-2 mb-4'>
            <ul className="list-group">
              <li className="list-group-item active text-center" >
                Select Categories
              </li>
              {
                cate.map((item, index) =>
                  <li key={index} class="list-group-item category-item " style={{ textTransform: "capitalize", cursor: "pointer" }}>
                    <Link to={`/?cate_name=${item}`} style={{ textDecoration: "none", color: "#333", fontWeight: "bold", }}> {item} </Link>
                  </li>
                )
              }

            </ul>
          </div>
          <div className='col-12 col-md-10'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
              {state.map((item, index) =>
                <div className='col mb-4' key={index}>
                  <Card raised>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      image={item.image}
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: '18px', md: '18px' } }}>
                        {item.title.substring(0, 20)}
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description.substring(0, 60)}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <input type='submit' value="Add to Card" className='btn btn-success' onClick={() => { addToCardData(item) }} />

                      <span>
                        <Button variant='contained' size='medium' onClick={() => { goToProductDetail(item.id) }}>View</Button>
                      </span>

                    </CardActions>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard;

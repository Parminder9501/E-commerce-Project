import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import PageNotFound from './components/pageNotFound/PageNotFound';
import ProductsDetails from './components/productsDetails/ProductsDetails';
import AddToCart from './components/addToCart/AddToCart';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='header' element={<Header/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='product-details/:id' element={<ProductsDetails/>}/>
        <Route path='cart' element={<AddToCart/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

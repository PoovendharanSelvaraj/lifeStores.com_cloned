import React from 'react'
import {Routes,Route} from "react-router-dom";
import BasketPage from '../pages/BasketPage';
// import { CategoriesContext } from '../Context/CategoriesContext';
import { Checkout } from '../pages/Checkout';
import ProductPage from '../pages/ProductPage';
import Products from '../pages/Products';
import WomensPage from '../pages/WomensPage';

const Body = () => {
  // const {cato}=useContext(CategoriesContext);

  return (
    <div>
      {/* {cato.women?<WomensPage/>:null} */}
      <Routes>
         <Route path='/' element={<WomensPage/>} />
         <Route path='/products' element={<Products/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         <Route path='/item' element={<ProductPage/>}/>
         <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
    </div>
  )
}

export default Body
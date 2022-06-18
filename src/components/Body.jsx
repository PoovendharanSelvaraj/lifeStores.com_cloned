import React, { useContext } from 'react'
import {Routes,Route} from "react-router-dom";
import { CategoriesContext } from '../Context/CategoriesContext';
import WomensPage from '../pages/WomensPage';

const Body = () => {
  const {cato}=useContext(CategoriesContext);

  return (
    <div>
      {cato.women?<WomensPage/>:null}
      <Routes>
         <Route path='/' element={<WomensPage/>} />
      </Routes>
    </div>
  )
}

export default Body
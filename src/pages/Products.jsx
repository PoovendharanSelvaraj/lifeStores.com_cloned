import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import styles from "./Products.module.css";
import {Heading} from "@chakra-ui/react";
import {FiHeart} from "react-icons/fi";
import { CartContext } from '../Context/CartContext';

const Products = () => {
  const {productId} = useContext(CartContext)
  const [product,setProduct] = useState([]);
  // const [sorted,setSorted] = useState(product);
  const  navigate = useNavigate();
  const handleCart=(id)=>{
      productId(id);
      // console.log(id)
      navigate("/item")
  }
  const handleSelect=(event)=>{
    event.preventDefault();
     var sortedBy;
      let value = event.target.value;
     if(value==="HL"){
        sortedBy = product.sort((a,b)=> b.price-a.price );
      setProduct(sortedBy);
      console.log(sortedBy)
     }
     else if(value==="LH"){
       sortedBy = product.sort((a,b)=> a.price-b.price);
       setProduct(sortedBy);
     }
     console.log(value)
  }
  useEffect(()=>{
    fetch("https://lifestyle-back.herokuapp.com/products").then(r=>r.json()).then((d)=>{setProduct(d); console.log(d);})
  },[])
  return (
    <div className={styles.ProductsBox} >
      <div style={{marginLeft:"1000px",width:"300px"}} >
          Sort By:
          <select onChange={handleSelect} name="sort" id="">
            <option value="">Price</option>
            <option value="HL">High to Low</option>
            <option value="LH">Low to High</option>
          </select>
        </div>
        <Heading textAlign='left' ml='50px' >Women</Heading>
        
        <div className={styles.ProductBox} >
          
             {product.map((d)=>{
              return (
                <div key={d._id} onClick={()=>handleCart(d._id)}>
                  <div style={{padding:'10px 0',marginLeft:"300px",width:"fit-content"}} > <FiHeart className={styles.wish}/></div>
                  <img src={d.image1} alt="" />
                  <div style={{textAlign:"left",padding:"0 20px"}} >
                    <p>Rs.{d.price}</p>
                    <Heading size='sm' >{d.productName}</Heading>
                  </div>
                </div>
              )
             })}
        </div>
    </div>
  )
}

export default Products
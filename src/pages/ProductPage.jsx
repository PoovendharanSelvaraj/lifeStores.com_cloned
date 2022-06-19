import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import styles from "./Products.module.css";
import {Heading,Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"



const ProductPage = () => {
      const {id,incre,collection} =useContext(CartContext);
      const [item,setItem] = useState({});
      const navigate = useNavigate();
      const handleBasket=()=>{
        incre();
        collection(id);
        navigate("/basket");
      }
     useEffect(()=>{
    fetch(`https://lifestyle-back.herokuapp.com/products/${id}`).then(r=>r.json()).then((d)=>{setItem(d);})
     },[id])
  return (
    <div>
        <Heading textAlign='left' padding='20px 150px' size='md' >{item.productName}</Heading>
        <div className={styles.items}>
      
      <div className={styles.itemBox} >
          <div>
         <img src={item.image1} alt="" />
          </div>
          <div>
         <img src={item.image2} alt="" />
          </div>
          <div>
         <img src={item.image3} alt="" />
          </div><div>
         <img src={item.image4} alt="" />
          </div><div>
         <img src={item.image5} alt="" />
          </div><div>
         <img src={item.image6} alt="" />
          </div>
         
    </div>

    <div style={{alignItems:"center"}}>
         <Heading textAlign='left' >Rs.{item.price}</Heading>
         <div style={{display:"flex"}} >
           <Heading size='md' >Color:</Heading>
           <Heading size='md' padding='0 10px' color={item.color} >{item.color}</Heading>
         </div>
         <div style={{display:"flex"}} >
           <Heading size='md' >Fabric:</Heading>
           <Heading size='md' padding='0 10px'  >{item.fabric}</Heading>
         </div>
         <Button onClick={handleBasket} padding='30px 70px 30px 70px' borderRadius='none' _hover='none'   color='white' fontSize='lg' bg='rgb(251,183,98)' mr={3}>
                Add to Basket
        </Button>
    </div>
</div>
    </div>
  )
}

export default ProductPage
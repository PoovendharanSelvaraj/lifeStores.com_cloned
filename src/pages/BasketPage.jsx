import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import styles from "./Basket.module.css";
import {Heading} from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";

const BasketPage = () => {
    const navigate = useNavigate();
  const {id} = useContext(CartContext);
  const [added,setAdded]=useState({});
  console.log(added);
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  useEffect(()=>{
    fetch(`https://lifestyle-back.herokuapp.com/products/${id}`).then(r=>r.json()).then((d)=>{setAdded(d); })
     },[id])
  return (
    <div>
        <Heading padding="20px 150px" textAlign="left" >Your Shopping Basket </Heading>
        <div className={styles.container} >

       <div className={styles.box1} >
         <div style={{width:"100%",height:"150px",display:"flex"}} >
           {added!=={}? 
            <div style={{width:"100%",height:"150px",display:"flex"}} >
                <img src={added.image1} alt="" />
                <div>
            <p>{added.productName}</p>
            <p>{added.fabric}</p>
            <p>{added.color}</p>
                </div>
            
            </div>: 
              <div>
                <Heading>No Item added to basket yet!!!</Heading>
              </div>
            }
         </div>
       </div>
       <div className={styles.box2} >
            <div>
                <Heading textAlign='left' padding='20px 0 0 20px' marginBottom='50px' size='md' >Toatal amount: Rs.{added.price}</Heading>
                <Heading textAlign='left' padding='0 0 0 20px' marginBottom='10px' marginTop="-20px" size='sm' >Including all taxes</Heading>
            </div>
           <div>
           <Button onClick={handleCheckout}  padding='30px 70px 30px 70px' borderRadius='none' mt='50px' _hover='none'   color='white' fontSize='lg' bg='rgb(251,183,98)' mr={3}>
               Checkout 
        </Button>
           </div>
       </div>
    </div>
    </div>
  )
}

export default BasketPage
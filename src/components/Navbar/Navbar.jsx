import React, { useContext } from 'react'
import styles from "./Navbar.module.css";
import {MdOutlineLocalShipping} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai"
import {BsShopWindow} from "react-icons/bs";
import {Tooltip} from "@chakra-ui/react";
import Signup from './Signup';
import Basket from './Basket';
import { CategoriesContext } from '../../Context/CategoriesContext';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const Navbar = () => {
  const {cato,MensCato,WomensCato}=useContext(CategoriesContext);
  const {count}=useContext(CartContext);
  const navigate=useNavigate()
  const handleMensCate=()=>{
    MensCato();
  }
  const handleWomenCate=()=>{
    WomensCato();
    navigate("/")
  }
  return (
    <div className={styles.navContainer}> 
        <div className={styles.box1}>
        <div className={styles.box1_1}>
          <div style={{display:"flex",gap:"10px", cursor:"pointer"}}>
            <div style={{marginTop:"5px"}}>
            <MdOutlineLocalShipping fontSize="25px"  />
            </div>
            <Tooltip label='On All Orders' hasArrow className={styles.tooltip}>Free Shipping</Tooltip> 
         </div>
          <div style={{display:"flex",gap:"10px",cursor:"pointer"}} >
          <div style={{marginTop:"5px"}}>
            <BsShopWindow fontSize="25px"/>
            </div>
            <Tooltip hasArrow label='Order Online And Collect at a Store Of Your Choice For Free.' className={styles.tooltip}>Click & Collect</Tooltip> 
          </div>
          <div style={{display:"flex",gap:"10px",cursor:"pointer"}} >
          <div style={{marginTop:"5px"}}>
            <BsShopWindow fontSize="25px"/>
            </div>
            <Tooltip hasArrow label='Return to nearest store' className={styles.tooltip}>Return To Store</Tooltip> 
          </div>
        </div>
        <div className={styles.box1_2}>
          <span>Download Our Apps</span>
          <span className={styles.store_locator} >Store Locator</span>
          <span>Help</span>
        </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box2_1}>
             <div className={styles.box2_1_1} >
              <div className={styles.box2_logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rEtI7omf7mv7hu-ONxM_HfSMr5Q43-lESL3Uk0p374Z3F6Wbad29oY2QnTWphwuorc4&usqp=CAU" alt="logo" />
              </div>
              <div className={styles.categories}>
                <div onClick={handleWomenCate} className={cato.women?styles.catoSelect:styles.cato} >Women</div>
                <div onClick={handleMensCate} className={cato.men?styles.catoSelect:styles.cato} >Men</div>
                <div className={styles.cato} >Kids</div>
                <div className={styles.cato} >Shoes & bags</div>
                <div className={styles.cato} >Beauty</div>
              </div>
              <div className={styles.search} >
                <button><AiOutlineSearch color='gray' fontSize="large"/></button>
                <input type="text" placeholder='What are you looking for' />
              </div>
              <div style={{display:"flex"}}>
                <Signup/>
                <Basket/>
                <div  className={count>0 ? styles.basketBadge: null} >{count>0?count:null}</div>
              </div>
             </div>
          </div>  
        </div>
      
        </div>
    
  )
}

export default Navbar
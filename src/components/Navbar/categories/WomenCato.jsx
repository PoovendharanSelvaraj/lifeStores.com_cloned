import {Menu, MenuButton, MenuItem, MenuList,Heading } from '@chakra-ui/react';
import React from 'react'
import styles from "./Categories.module.css";
import {Link,useNavigate} from "react-router-dom";
// import { CategoriesContext } from '../../../Context/CategoriesContext';

const WomenCato = () => {
  const navigate=useNavigate();
  //  const {Changes} = useContext(CategoriesContext);
   const handleItem=()=>{
     navigate('/products')
   }
    
  return (
    <div  className={styles.MenCato} >
          <div className={styles.womens_Cato1}>
            <div>
            <Menu isLazy>
  <MenuButton className={styles.catego} >Ethnic & Fusion</MenuButton>
  <MenuList  className={styles.dropdown} >
    {/* MenuItems are not rendered unless Menu is open */}
    <div style={{display:'flex',flexDirection:"column"}} >
     <Heading size='md' >Shop in Ethnic & Fusion Wear</Heading>
  
     <ul className={styles.list} >
      <li><MenuItem onClick={handleItem} ><Link to="/products" >Kurtas & Kurtis</Link></MenuItem></li>
      <li>Ethnic Sets</li>
      <li>Ethnic Sets</li>
      <li>Ethnic Dresses</li>
      <li>Tops & Tunics</li>
      <li>Leggings & Churidars</li>
      <li>Pants & Palazzos</li>
     </ul>
    
    </div>
    <div>
    <MenuItem></MenuItem>
    </div>
    <div><MenuItem></MenuItem></div>
  </MenuList>
</Menu>
            
            </div>
            <div>Western Wear</div>
            <div>Lingerie/Sleepwear</div>
            <div>Top Brands</div>
            <div>SportsWear</div>
            <div>PlusSize</div>
            <div>WinterWear</div>
            <div>SizeStore</div>
            <div>Beauty</div>
            <div>Footwear/Bags</div>
            <div>Watches</div>
            <div>Jewellery</div>
            <div style={{paddingLeft:"20px"}} >More</div>
          </div>
          
    </div>
  )
}

export default WomenCato;
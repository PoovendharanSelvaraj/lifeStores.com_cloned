import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import styles from "./Categories.module.css";


const WomenCato = () => {
   
    
  return (
    <div  className={styles.MenCato} >
          <div className={styles.womens_Cato1}>
            <div className={styles.btn} >
              <Menu>
  <MenuButton width='130px' bg='none'  as={Button} >
    Ethnic & Fusion
  </MenuButton>
  <MenuList width='1000px' >
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
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
import React from 'react'
import styles from "./Categories.module.css";


const MenCato = () => {
   
    
  return (
    <div  className={styles.MenCato} >
          <div className={styles.Mens_Cato1}>
            <div className={styles.topwear} >TopWear</div>
            <div>Bottomwear</div>
            <div>Activewear</div>
            <div>Ethnic</div>
            <div>Winterwear</div>
            <div>Innerwear</div>
            <div>Top Brands</div>
            <div>Watches</div>
            <div>Sunglasses</div>
            <div>Shoes</div>
            <div>Grooming</div>
            <div>Add-Ons</div>
            <div style={{paddingLeft:"20px"}} >More</div>
          </div>
          <div className={styles.hide} >
            dress categories
          </div>
    </div>
  )
}

export default MenCato
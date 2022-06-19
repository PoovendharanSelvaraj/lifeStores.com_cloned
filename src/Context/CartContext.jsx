import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider= ({children})=>{
    const [id,setId] = useState();
    const [collect,setCollect] =useState([]);
    const [count,setCount]=useState(0);
    const productId=(id)=>{
        setId(id)
    }
    const collection=(item)=>{
        setCollect([...collect,item])
    }
    const incre=()=>{
        setCount(count+1);
    }
    const decre=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    return(
    <CartContext.Provider value={{id,productId,count,setCount,incre,decre,collect,collection}} >
        {children}
    </CartContext.Provider>
    )
}
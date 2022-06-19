import { createContext, useState } from "react";





export const CategoriesContext=createContext();

export const CategoriesProvider=({children})=>{
  const [cato, setCato] = useState({
    women:true,
    men:false
  });
  const WomensCato=()=>{
    setCato({women:true,men:false})
  }

const MensCato=()=>{
   setCato({women:false,men:true})
}
const Changes=()=>{
  setCato({women:false,men:false})
}
    return (
    <CategoriesContext.Provider value={{cato,MensCato,Changes,WomensCato}} >
        {children}
    </CategoriesContext.Provider>
    );
}
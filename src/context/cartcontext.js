// import axios from "axios";
import { createContext, useEffect, useReducer, useContext, useState } from "react";
// import  reducer from '../reducer/productReducer'
const CartContext= createContext();
const CartProvider= ({children})=>{

  const cartFromLocal= JSON.parse(localStorage.getItem("thapaCart")||'[]');
  
  const [cart, setCart] = useState(cartFromLocal);
  
  
  
  useEffect(() => {
    localStorage.setItem("thapaCart", JSON.stringify(cart));
  }, [cart]);

  return(
     <CartContext.Provider value={{cart,setCart}}>
        {children}
     </CartContext.Provider>
   )     
}
const useCartContext= ()=>{
     return  useContext(CartContext);
}
export {CartProvider, useCartContext}
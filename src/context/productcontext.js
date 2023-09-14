import axios from "axios";
import { createContext, useEffect, useReducer, useContext } from "react";
import  reducer from '../reducer/productReducer'
const AppContext= createContext();
const API = "https://api.pujakaitem.com/api/products";
const InitialState= { 
    isLoding: "false",
    isError: "false",
    Product: []
}
const AppProvider= ({children})=>{
    const [state, dispatch] = useReducer(reducer,InitialState)
    const getproducts=  async(url)=>{
        dispatch({type:"Loading"});
         try {
            const res=  await axios.get(url);
            const product= await res.data;
            dispatch({type:"SET_API_DATA",payload: product});
         } catch (error) {
            dispatch({type:"Error"});
         }
    }
    useEffect(()=>{
         getproducts(API);
    },[])

   return(
     <AppContext.Provider value={{...state}}>
        {children}
     </AppContext.Provider>
   )     
}
const useProductContext= ()=>{
     return  useContext(AppContext);
}
export {AppProvider, useProductContext}
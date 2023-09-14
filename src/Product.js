import React, { useState } from 'react'
import { useProductContext } from './context/productcontext'
import Card from './components/cards';
import './styles/filter.css'
import './styles/ul.css'
import { useToast } from '@chakra-ui/react'

function Product() {
    
    // console.log(cart)
    const {Product}= useProductContext();
    const [val,setval]= useState("");
     const changedata=(e)=>{
     setval(e.target.innerText);
  }
   if(val.toLowerCase()==="all") setval("");
   const Filter_Products= Product.filter((element)=>{
       if(element.category.toLowerCase().includes(val.toLowerCase())) return element;
   })
// const toast = useToast()
    return (
        
        <div className='container-fluid mt-5 border '>
            <div className=' filter border p-3' style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",}}>
                <input type='text' placeholder='search' className='mb-3 p-2 text-uppercase'onChange={(event)=>{setval(event.target.value)}}></input>
                <div>
                <span className='mb-2' style={{textAlign:"center",display:"block",fontSize:"25px",fontWeight:"bold",textTransform:"capitalize"}}>categery</span>
                <ul className='mb-4' style={{display:"flex",flexWrap:"wrap"}}>
                    <li style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><a href='#' onClick={changedata}>ALL</a></li>
                    <li style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><a href='#' onClick={changedata}>mobile</a></li>
                    <li style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><a href='#' onClick={changedata}>laptop</a></li>
                    <li style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><a href='#' onClick={changedata}>watch</a></li>
                    <li style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><a href='#' onClick={changedata}>computer</a></li>
                </ul>
                </div>
                <div>
                <button type="button" class="btn btn-primary d-block mt-5 text-dark" onClick={()=>{
                       setval("all")
                
                    }}>Clear Filter</button></div>
                </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
            {
                
                Filter_Products.map((element)=>{
                   return <Card Product={element}/>  
                })
               }
          </div>
            
        </div>
    )
}

export default Product
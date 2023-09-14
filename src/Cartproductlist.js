import React, { useEffect, useState } from 'react'
import { useCartContext } from './context/cartcontext'
// import Product from './Product';

function Cartproductlist() {
    const {cart,setCart}= useCartContext();
    let ans =0;
    cart.map((element)=>{
      ans+=element.Product.price;
    })
    const [cost,setCost]= useState(ans);
    function total_cost(){
       let ans =0;
       cart.map((element)=>{
          ans+=element.Product.price;
       })
       setCost(ans);
       
    }
    

    function remove(event){
     cart.splice(event.target.id,1)
    
     localStorage.setItem("thapaCart",JSON.stringify(cart))
     setCart(JSON.parse(localStorage.getItem("thapaCart")))
      total_cost();
    }

  return (
    <div>
        <h1 style={{fontSize:"35px",fontFamily:"sans-serif",margin:"30px"}}>Selected Product</h1>
      {
        cart.map((element,index)=>{
             return<>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center", margin:"25px"}}> 
                  <img src={element.Product.image} style={{width:"20%",display:"inline"}}></img>
                  <span>{element.Product.name}</span>
                  <span>{element.Product.company}</span>
                  <span>&#x20b9;{element.Product.price}</span>
                  <button id={index} type="button" class="btn btn-danger" style={{color:"black"}} onClick={remove}>Remove</button>
                </div>
             </>
        })
      }
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <div style={{background:"white" , padding:"30px",marginRight:"50px"}}>
           <div style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><span>Total item : </span><span>{cart.length}</span></div>
           {
            cart.map((element)=>{
               return <div style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><span>{element.Product.name}: </span><span>&#x20b9;{element.Product.price}</span></div>
               
            })
           }
           <div style={{marginLeft:"10px",marginTop:"10px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bold",textTransform:"capitalize"}}><span>Total cost : </span>{cost}<span></span></div>
           <button type="button" class="btn btn-success" style={{color:"black",margin:"30px"}} onClick={()=>alert("payment integration is not there ")} >pay now </button>
               
        </div>
      </div>
    </div>
  )
}

export default Cartproductlist
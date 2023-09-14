import React, { useContext } from 'react'
import { useCartContext } from '../context/cartcontext'
function Card(element) {
  const {cart,setCart}= useCartContext();
  return (
    
                <div class="card" style={{maxWidth:"400px",margin:"15px"}}>
                    <img class="card-img-top" src={element.Product.image} alt="Card image cap"/>
                    <div class="card-body">
                        <div style={{display:"flex", justifyContent:"space-between", textTransform:"capitalize",fontSize:"23px",fontFamily:"sans-serif",fontWeight:"bold"}}>
                        <span class="card-title">{element.Product.name}</span>
                        <span>{element.Product.company}</span>
                        </div>
                        <p class="card-text" style={{margin:"20px"}}>{element.Product.description}</p>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                          <span style={{ textTransform:"capitalize",fontSize:"23px",fontFamily:"sans-serif",fontWeight:"bold"}}>&#x20b9;{element.Product.price}</span>
                          <button class="btn btn-primary" onClick={()=>{
                             setCart(prev=> [...prev,element])
                          }}>Add To Card</button>
                        </div>
                    </div>
                    </div>
               

  )
}

export default Card
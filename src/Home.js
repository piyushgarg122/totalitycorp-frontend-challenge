
import React from 'react'
import styled from 'styled-components'
function Home() {
    
  return (
    <>
    <div style={{position:"relative"}}>
    <img src='./images/hero.jpg' alt='not found' style={{position:"absolute",top:"0%",left:"0%",height:"100vh",width:"100%",zIndex:"-1",opacity:"0.5"}}></img>
     <div style={{height:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <h1 style={{fontWeight:"bold",textAlign:"center",fontFamily:"sans-serif",fontSize:"35px",margin:"20px"}} className='display-3'> Welcome to the Ecommerce store </h1>
         <p style={{fontWeight:"bold",textAlign:"center",fontFamily:"sans-serif",fontSize:"35px",margin:"20px"}} className=' display-4'>you will find best quality product with minimal cost here</p>
         <a href='/product'><button type="button" className="btn btn-success font-weight-bold mx-auto d-block m-8 text-dark">Shop Now</button></a>
   
     </div>
    </div>
    </>
  )
}

export default Home

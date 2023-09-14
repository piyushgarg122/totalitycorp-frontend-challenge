## use API 

use public free api https://api.pujakaitem.com/api/products

## tech stack used 
bootstraps framework for css
react js 



## Product List 

use Context Api for global storage 
use axios for fetch api 
use usestate hook for state management 

## filter the product 
use usestate hook for state management 
apply filter method for filtering products by categories 
```bash
const {Product}= useProductContext();
    const [val,setval]= useState("");
     const changedata=(e)=>{
     setval(e.target.innerText);
  }
   if(val.toLowerCase()==="all") setval("");
   const Filter_Products= Product.filter((element)=>{
       if(element.category.toLowerCase().includes(val.toLowerCase())) return element;
   })

```


function productReducer(state,action) {
  switch(action.type){
     case "Loading" :
     return {
        ...state,
        isLoading: true
     }
     case "Error" : 
     return{

        ...state,
        isLoading: true, isError: true
     }
     case "SET_API_DATA":
        return{
            ...state,
            isLoading:false,
            Product:action.payload
        } 
    default:
        return state
  }
}

export default productReducer
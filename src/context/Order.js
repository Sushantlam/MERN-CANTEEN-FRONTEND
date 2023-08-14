import { createContext, useEffect, useReducer } from "react";

const Initital_State ={
    orderData :  [],
    loading : false,
    error: null
}




export const OrderContext = createContext(Initital_State)

const orderReducer =(state, action)=>{
   
    
    switch (action.type) {
       
        case "Order_Start":
            return {
                orderData: null,
                loading: true,
                error: null,
            }

        case "Order_Sucess":
            console.log("state", state);
           
            return {
             ...state.orderData,   orderData: action.payload      
            }
        case "Order_Fail":
            return {
                orderData: null,
                loading: false,
                error: action.payload,
            }

    //         case "SET_CART_DATA":
    //   return {
    //     ...state,
    //     orderData: action.payload
    //   };
        
        default:
            return state
    }
}

export const OrderContextProvider =({children})=> {
    const [state, dispatch]= useReducer(orderReducer, Initital_State)

    // useEffect(() => {
    //     const savedData = JSON.parse(localStorage.getItem("orderData"));
    
    //     if (savedData && savedData.length > 0) {
    //       // Only set the cartData if it exists in localStorage
    //       dispatch({ type: "SET_CART_DATA", payload: savedData });
    //     }
    //   }, []);

    // useEffect(() => {

    //     localStorage.setItem("orderData", JSON.stringify(state.orderData))
    // }, [state.orderData])



    return (<OrderContext.Provider value={{...state, dispatch}}>{children} </OrderContext.Provider> )
}
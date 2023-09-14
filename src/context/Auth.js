// import React, { createContext, useReducer, useEffect } from "react";

import { createContext, useReducer, useEffect, useContext } from "react"
import {CartContext} from "./Product"


// const INITIAL_STATE = {
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     loading: false,
//     error: null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// const AuthReducer = (state, action) => {
//     switch (action.type) {
//         case "Login_Start":
//             return {
//                 user: null,
//                 loading: true,
//                 error: null,
//             }
//         case "Login_Success":
//             return {
//                 user: action.payload,
//                 loading: false,
//                 error: null,
//             }
//         case "Login_Failed":
//             return {
//                 user: null,
//                 loading: false,
//                 error: action.payload,
//             }
//         case "Log_Out":
//             return {
//                 user: null,
//                 loading: false,
//                 error: null,
//             }

//         default:
//             return state;
//     }
// };


// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//     //yedi page refresh vayo vaney login nei garauna ko lagi ho yo chae 
//  useEffect(()=>{
//     localStorage.setItem("user", JSON.stringify(state.user))
//     //stringfy kina gareko vanda kheri chae localStorage ma object store garna mildaina tei vayera string ma convert garera rakheko 
//  }, [state.user])


//     return (
//         <AuthContext.Provider
//             value={{
//                 ...state,
//                 dispatch,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// };


const INITIAL_VALUE = {
    email: JSON.parse(localStorage.getItem("email")) || null,
    loading: false,
    error: null,
}

//Creating context with initial value
export const AuthContext = createContext(INITIAL_VALUE)


const AuthReducer = (state, action) => {
    const cartData = useContext(CartContext)
console.log( "Logout",cartData);
    switch (action.type) {

        case "Login_Start":
            return {
                cartData: null,
                email: null,
                loading: true,
                error: null,
            }

        case "Login_Sucess":
            return {
                email: action.payload,
                loading: false,
                error: null,
            }
        case "Login_Fail":
            return {
                email: null,
                loading: false,
                error: action.payload,
            }
        case "Logout":
            
            return {
                cartData:null,
                email: null,
                loading: false,
                error: null,
            }
        default:
            return state
    }

} 

export const AuthContextProvider= ({children})=> {
    const [state, dispatch]= useReducer(AuthReducer, INITIAL_VALUE)
    
    useEffect(() => {
    
        localStorage.setItem("email", JSON.stringify(state.email))
    }, [state.email])
    

    
    return (<AuthContext.Provider value={{...state, dispatch}}>{children}</AuthContext.Provider>)
}






















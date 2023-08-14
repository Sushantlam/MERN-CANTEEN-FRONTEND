
import { createContext, useReducer, useEffect } from "react"

const INITIAL_VALUE = {
    cartData: JSON.parse(localStorage.getItem("cartData")) || [],
    loading: false,
    error: null,
}

//Creating context with initial value
export const CartContext = createContext(INITIAL_VALUE)

const CartReducer = (state, action) => {
    console.log(state.cartData);
    console.log(action.payload);
    switch (action.type) {

        case "ADD_TO_CART":
            // if(!state.cartData)
            // {
            //     state.cartData=[]
            // }
            const findItem = state.cartData.find((e) => e._id === action.payload._id)
            console.log("findItem", findItem);
            if (findItem) {
                const updatedCart = state.cartData.map((item) => {
                    if (item._id === action.payload._id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    console.log("item", item);
                    return item
                })
                console.log("updatedCart", updatedCart);
                return { ...state, cartData: updatedCart }
            }
            else {
                return {
                    ...state.cartData, cartData: [...state.cartData, { ...action.payload, quantity: 1 }]
                }

            }

        case "Increment":

            const incrementNum = state.cartData.map((e) => {
                if (e._id === action.payload._id) {
                    return { ...e, quantity: e.quantity + 1 }
                }
                console.log(e);
                return e
            })
            return { ...state.cartData, cartData: incrementNum }


        case "Drecrement":
            const decrementNum = state.cartData.map((e) => {
                if (e._id === action.payload._id) {
                    if (e.quantity >= 2) {
                        return { ...e, quantity: e.quantity - 1 }
                    }

                }
                console.log(e);
                return e
            })
            return { ...state.cartData, cartData: decrementNum }


case "PLACE_ORDER":
      // Add logic for placing the order
      return {
        ...state,
        cartData: [], // Reset cartData to empty array
      };

      case "Log_Out":
      // Add logic for placing the order
      return {
        ...state,
        cartData: [], // Reset cartData to empty array
      };



        default:
            return state
    }

}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_VALUE)
    // console.log(typeof state);

    const addToCart = (item, action) => {
        console.log(item);

        dispatch({ type: "ADD_TO_CART", payload: item })
    }

    const incrementQuantity = (value) => {
        console.log("value", value);
        dispatch({ type: "Increment", payload: value })
    }

    const decrementQuantity = (decrementValue) => {
        console.log("value", decrementValue);
        dispatch({ type: "Drecrement", payload: decrementValue })
    }

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("cartData"));
    
        if (savedData && savedData.length > 0) {
          // Only set the cartData if it exists in localStorage
          dispatch({ type: "SET_CART_DATA", payload: savedData });
        }
      }, []);

    useEffect(() => {

        localStorage.setItem("cartData", JSON.stringify(state.cartData))
    }, [state.cartData])



    return (<CartContext.Provider value={{ ...state, addToCart, incrementQuantity, decrementQuantity, dispatch }}>{children}</CartContext.Provider>)
}

import { createContext, useReducer, useEffect } from "react";

const INITIAL_VALUE = {
  cartData: JSON.parse(localStorage.getItem("cartData")) || [],
  totalProduct: 0,
  loading: false,
  error: null,
  totalPrice: 0,
};

export const CartContext = createContext(INITIAL_VALUE);

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const findItem = state.cartData.find((e) => e._id === action.payload._id);
      if (findItem) {
        const updatedCart = state.cartData.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return {
          ...state,
          cartData: updatedCart,
        };
      } else {
        return {
          ...state,
          cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
        };
      }

    case "Increment":
      const incrementNum = state.cartData.map((e) => {
        if (e._id === action.payload._id) {
          return { ...e, quantity: e.quantity + 1 };
        }
        return e;
      });
      return {
        ...state,
        cartData: incrementNum,
      };

    case "Drecrement":
      const decrementNum = state.cartData.map((e) => {
        if (e._id === action.payload?._id) {
          if (e.quantity >= 2) {
            return { ...e, quantity: e.quantity - 1 };
          }
        }
        return e;
      });
      return {
        ...state,
        cartData: decrementNum,
      };

      case "RemoveItem":
        const remove = state.cartData.filter((e) => {

          
          return e._id!==action.payload._id;
        });
        return {...state, cartData: remove}

    case "PLACE_ORDER":
      // Add logic for placing the order
      return {
        ...state,
        cartData: [], // Reset cartData to an empty array
      };

    case "Log_Out":
      // Add logic for logging out
      return {
        ...state,
        cartData: [], // Reset cartData to an empty array
      };

    case "UPDATE_TOTALS":
      // This action updates the total price and total product count
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalProduct: action.payload.totalProduct,
      };

    default:
      return state;
  }
};

const calculateTotalPriceAndProductCount = (cartData) => {
  let totalPrice = 0;
  let totalProduct = 0;

  cartData.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalProduct += item.quantity;
  });

  return { totalPrice, totalProduct };
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_VALUE);

  const addToCart = (item) => {
    console.log("ADD_TO_CART", item);
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (remove) => {
    dispatch({ type: "RemoveItem", payload: remove });
  };

  const incrementQuantity = (value) => {
    dispatch({ type: "Increment", payload: value });
  };

  const decrementQuantity = (decrementValue) => {
    dispatch({ type: "Drecrement", payload: decrementValue });
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cartData"));

    if (savedData && savedData.length > 0) {
      dispatch({ type: "SET_CART_DATA", payload: savedData });
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    } catch (error) {
      console.log(error);
    }
  

    // Calculate total price and total product count
    const { totalPrice, totalProduct } = calculateTotalPriceAndProductCount(
      state.cartData
    );

    // Dispatch an action to update the totals in the state
    dispatch({ type: "UPDATE_TOTALS", payload: { totalPrice, totalProduct } });
  }, [state.cartData]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        dispatch,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

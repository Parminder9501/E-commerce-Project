import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    // cartItems: [],
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQty: 0,
    // cartPrice: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({                   
    name: "cart",
    initialState,
    reducers: {
        addToCard(state, action) {                    
            // console.log(action.payload)
            // state.cartItems.push(action.payload)
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1     
            }
            else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));  

            state.cartTotalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.cartQuantity,
                0
            );
        },

        decreseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.success("Decreased Product Successfully !")

            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = nextCartItems;

                toast.error("Product Removed From Cart !")
            }
            

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            state.cartTotalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.cartQuantity,
                0
            );

        },

        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
            
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            
            toast.success("Product Removed Successfully !");

            state.cartTotalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.cartQuantity,
                0
            );
        },

        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(" Cart Cleared !")

            state.cartTotalAmount = 0;
        }
    }
})

export const { addToCard, decreseCart,removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
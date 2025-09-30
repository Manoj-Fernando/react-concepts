import { configureStore, createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: { value: 0 },
    reducers: {
        addToCart: (state, action) => {
            state.value += action.payload;
        },
        resetCart: (state) => {
            state.value = 0;
        }
    }
})

const walletSlice = createSlice({
    name: "wallet",
    initialState: { value: 0 },
    reducers: {
        addwallet: (state, action) => {
            state.value += action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wallet: walletSlice.reducer
    }
});

export const { addToCart } = cartSlice.actions;

export default store;
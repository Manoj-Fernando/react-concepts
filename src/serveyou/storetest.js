import { configureStore, createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState: { value: 0 },
    reducers: {
        addwallet: (state, action) => {
            state.value += action.payload
        }
    }
})

const walletstore = configureStore({
    reducer: {
        wallet: walletSlice.reducer
    }
}

)

export const { addwallet } = walletSlice.actions
export default walletstore;
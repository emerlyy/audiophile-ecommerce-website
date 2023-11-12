import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { saveCart } from "./utils/localStorage";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	devTools: true,
});

store.subscribe(() => {
	saveCart(store.getState().cart);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

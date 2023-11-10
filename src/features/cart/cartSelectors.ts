import { RootState } from "@/store";

export const selectAllCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalQuantity = (state: RootState) =>
	state.cart.totalQuantity;

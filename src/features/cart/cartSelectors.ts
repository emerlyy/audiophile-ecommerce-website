import { RootState } from "@/store";

export const selectAllCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalQuantity = (state: RootState) =>
	state.cart.totalQuantity;

export const selectCartTotalPrice = (state: RootState) => {
	return state.cart.items.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
};	

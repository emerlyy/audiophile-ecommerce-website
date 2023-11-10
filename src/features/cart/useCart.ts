import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { CartItem } from "@/types";
import { selectAllCartItems, selectCartTotalQuantity } from "./cartSelectors";
import {
	clearCart,
	decreaseItemQuantity,
	increaseItemQuantity,
} from "./cartSlice";

export const useCart = (): [
	number,
	typeof items,
	typeof handleIncreaseItemQuantity,
	typeof handleDecreaseItemQuantity,
	typeof handleClear
] => {
	const dispatch = useAppDispatch();
	const totalQuantity = useAppSelector(selectCartTotalQuantity);
	const items = useAppSelector(selectAllCartItems);

	const handleIncreaseItemQuantity = (itemId: CartItem["id"]) => () => {
		dispatch(increaseItemQuantity(itemId));
	};

	const handleDecreaseItemQuantity = (itemId: CartItem["id"]) => () => {
		dispatch(decreaseItemQuantity(itemId));
	};

	const handleClear = () => {
		dispatch(clearCart());
	};

	return [
		totalQuantity,
		items,
		handleIncreaseItemQuantity,
		handleDecreaseItemQuantity,
		handleClear,
	];
};

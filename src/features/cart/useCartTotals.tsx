import { useAppSelector } from "@/hooks/reduxHooks";
import { selectCartTotalPrice } from "./cartSelectors";

const TAX_RATE = 0.2;
const SHIPPING_COST = 50;

export const useCartTotals = () => {
	const totalPrice = useAppSelector(selectCartTotalPrice);
	const tax = totalPrice * TAX_RATE;
	const grandTotal = totalPrice + SHIPPING_COST;

	return {
		totalPrice,
		tax,
		grandTotal,
	};
};

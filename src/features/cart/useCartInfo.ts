import { useAppSelector } from "@/hooks/reduxHooks";
import { selectAllCartItems, selectCartTotalQuantity } from "./cartSelectors";

export const useCartInfo = () => {
	const items = useAppSelector(selectAllCartItems);
	const totalQuantity = useAppSelector(selectCartTotalQuantity);

	return {
		items,
		totalQuantity,
	};
};

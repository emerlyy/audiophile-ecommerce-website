import { selectAllCartItems } from "@/features/cart/cartSelectors";
import { useAppSelector } from "@/hooks/reduxHooks";
import Button from "../Button/Button";
import SmallItem from "../SmallItem/SmallItem";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./Summary.module.css";

const SHIPPING_COST = 50;

const Summary = () => {
	const items = useAppSelector(selectAllCartItems);
	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	const vat = totalPrice * 0.2;
	const grandTotal = totalPrice + SHIPPING_COST;
	return (
		<div className={styles.summary}>
			<Title tag="h2" size="xs">
				Summary
			</Title>
			<div className={styles.list}>
				{items.map((item, index) => (
					<SmallItem
						key={`${item.id}-${index}`}
						variant="static"
						name={item.shortName}
						image={item.image}
						price={item.price}
						quantity={item.quantity}
					/>
				))}
			</div>
			<div>
				<div className={styles.totalsText}>
					<Text tag="span">TOTAL</Text>
					<span className={styles.price}>$ {totalPrice}</span>
				</div>
				<div className={styles.totalsText}>
					<Text tag="span">SHIPPING</Text>
					<span className={styles.price}>$ 50</span>
				</div>
				<div className={styles.totalsText}>
					<Text tag="span">VAT (INCLUDED)</Text>
					<span className={styles.price}>$ {vat}</span>
				</div>
				<div className={`${styles.totalsText} ${styles.grandTotal}`}>
					<Text tag="span">GRAND TOTAL</Text>
					<span className={styles.price}>$ {grandTotal}</span>
				</div>
			</div>
			<Button role="button" form="checkout-form">
				Continue & Pay
			</Button>
		</div>
	);
};

export default Summary;

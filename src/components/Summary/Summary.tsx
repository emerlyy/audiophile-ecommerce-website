import { useCartInfo } from "@/features/cart/useCartInfo";
import { useCartTotals } from "@/features/cart/useCartTotals";
import { formatPrice } from "@/utils/formatPrice";
import Button from "../Button/Button";
import SmallItem from "../SmallItem/SmallItem";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./Summary.module.css";

const Summary = () => {
	const { items, totalQuantity } = useCartInfo();
	const { totalPrice, tax, grandTotal } = useCartTotals();

	return (
		<div className={styles.summary}>
			<Title tag="h2" size="xs">
				Summary
			</Title>
			<div className={styles.list}>
				{totalQuantity > 0 ? (
					items.map((item, index) => (
						<SmallItem
							key={`${item.id}-${index}`}
							variant="static"
							name={item.shortName}
							image={item.image}
							price={item.price}
							quantity={item.quantity}
						/>
					))
				) : (
					<Text extraClasses={styles.emptyMessage}>Cart is empty</Text>
				)}
			</div>
			<div>
				<div className={styles.totalsText}>
					<Text tag="span">TOTAL</Text>
					<span className={styles.price}>$ {formatPrice(totalPrice)}</span>
				</div>
				<div className={styles.totalsText}>
					<Text tag="span">SHIPPING</Text>
					<span className={styles.price}>$ 50</span>
				</div>
				<div className={styles.totalsText}>
					<Text tag="span">VAT (INCLUDED)</Text>
					<span className={styles.price}>$ {formatPrice(tax)}</span>
				</div>
				<div className={`${styles.totalsText} ${styles.grandTotal}`}>
					<Text tag="span">GRAND TOTAL</Text>
					<span className={styles.price}>$ {formatPrice(grandTotal)}</span>
				</div>
			</div>
			<Button
				role="button"
				rest={{ form: "checkout-form", disabled: !totalQuantity }}
			>
				Continue & Pay
			</Button>
		</div>
	);
};

export default Summary;

import CartIcon from "@/assets/shared/desktop/icon-cart.svg";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import SmallItem from "@/components/SmallItem/SmallItem";
import Text from "@/components/Text/Text";
import Title from "@/components/Title/Title";
import { useModal } from "@/hooks/useModal";
import { formatPrice } from "@/utils/formatPrice";
import styles from "./Cart.module.css";
import { useCart } from "./useCart";
import { useCartTotals } from "./useCartTotals";

const Cart = () => {
	const [isModalOpen, openModal, closeModal] = useModal();

	const [
		totalQuantity,
		items,
		increaseItemQuantity,
		decreaseItemQuantity,
		clearCart,
	] = useCart();

	const { totalPrice } = useCartTotals();

	return (
		<div className={styles.cartWrapper}>
			<div onClick={openModal} className={styles.cartIcon}>
				<img src={CartIcon} alt="cart-icon" />
				{totalQuantity > 0 && (
					<div className={styles.quantityIndicator}>{totalQuantity}</div>
				)}
			</div>
			<Modal
				isOpen={isModalOpen}
				variant="outsideOverlay"
				onRequestClose={closeModal}
				className={styles.cartBody}
			>
				<div className={styles.flex}>
					<Title tag="h2" size="xs">
						Cart ({totalQuantity})
					</Title>
					<button className={styles.removeAll} onClick={clearCart}>
						Remove all
					</button>
				</div>
				<div className={styles.content}>
					{items.map((item, index) => (
						<SmallItem
							key={`${item.shortName}-${index}`}
							variant="changeable"
							name={item.shortName}
							image={item.image}
							price={item.price}
							quantity={item.quantity}
							onDecrease={decreaseItemQuantity(item.id)}
							onIncrease={increaseItemQuantity(item.id)}
						/>
					))}
				</div>
				<div className={`${styles.flex} ${styles.total}`}>
					<Text>TOTAL</Text>
					<span className={styles.totalPrice}>$ {formatPrice(totalPrice)}</span>
				</div>
				<Button role="link" href="/checkout" extraClasses={styles.checkout}>
					Checkout
				</Button>
			</Modal>
		</div>
	);
};

export default Cart;

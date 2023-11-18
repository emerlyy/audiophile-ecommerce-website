import ConfirmationImage from "@/assets/checkout/icon-order-confirmation.svg";
import { useCartInfo } from "@/features/cart/useCartInfo";
import { useCartTotals } from "@/features/cart/useCartTotals";
import { formatPrice } from "@/utils/formatPrice";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SmallItem from "../SmallItem/SmallItem";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./CheckoutConfirmationModal.module.css";

type CheckoutConfirmationModalProps = {
	isOpen: boolean;
	onClose: () => void;
	clearCart: () => void;
};

const CheckoutConfirmationModal = ({
	isOpen,
	onClose,
	clearCart,
}: CheckoutConfirmationModalProps) => {
	const { items } = useCartInfo();
	const { grandTotal } = useCartTotals();
	const [isListOpened, setIsListOpened] = useState(false);

	const toggleList = () => {
		setIsListOpened((prev) => !prev);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			overlayClass={styles.confirmationOverlay}
			className={styles.checkoutConfirmation}
		>
			<img
				src={ConfirmationImage}
				className={styles.confirmationImage}
				alt="icon-order"
				width={48}
				height={48}
			/>
			<Title size="lg" extraClasses={styles.confirmationTitle}>
				Thank you
				<br /> for your order
			</Title>
			<Text extraClasses={styles.confirmationText}>
				You will receive an email confirmation shortly.
			</Text>
			<motion.div
				layout="size"
				transition={{ duration: 0.7, type: "spring" }}
				className={styles.summary}
			>
				<div className={styles.itemsListWrapper}>
					<div className={styles.itemsList}>
						{isListOpened ? (
							<>
								{items.map((item) => (
									<SmallItem
										variant="static"
										size="small"
										key={item.id}
										name={item.shortName}
										image={item.image}
										price={item.price}
										quantity={item.quantity}
									/>
								))}
							</>
						) : (
							items[0] && (
								<SmallItem
									variant="static"
									size="small"
									key={items[0].id}
									name={items[0].shortName}
									image={items[0].image}
									price={items[0].price}
									quantity={items[0].quantity}
								/>
							)
						)}
					</div>
					{items.length > 1 && (
						<button onClick={toggleList} className={styles.showMore}>
							{isListOpened
								? "Show less"
								: `and ${items.length - 1} other item(s)`}
						</button>
					)}
				</div>
				<div className={styles.grandTotalWrapper}>
					<Text color="gray">GRAND TOTAL</Text>
					<span className={styles.grandTotalPrice}>
						$ {formatPrice(grandTotal)}
					</span>
				</div>
			</motion.div>
			<Button
				role="link"
				href="/"
				extraClasses={styles.homeButton}
				rest={{ onClick: clearCart }}
			>
				Back to home
			</Button>
		</Modal>
	);
};

export default CheckoutConfirmationModal;

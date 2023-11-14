import CheckoutForm from "../CheckoutForm/CheckoutForm";
import GoBackLink from "../GoBackLink/GoBackLink";
import Summary from "../Summary/Summary";
import styles from "./Checkout.module.css";

const Checkout = () => {
	return (
		<div className={styles.checkout}>
			<div className="container">
				<GoBackLink extraClasses={styles.goback} />
				<div className={styles.content}>
					<CheckoutForm />
					<Summary />
				</div>
			</div>
		</div>
	);
};

export default Checkout;

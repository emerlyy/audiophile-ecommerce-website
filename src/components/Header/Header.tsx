import Cart from "@/features/cart/Cart";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<Logo />
					<Navigation />
					<Cart />
				</div>
			</div>
		</header>
	);
};

export default Header;

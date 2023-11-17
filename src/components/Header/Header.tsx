import Cart from "@/features/cart/Cart";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.logo}>
						{" "}
						<Logo />
					</div>
					<div className={styles.headerNavigation}>
						<Navigation />
					</div>
					<Cart />
				</div>
			</div>
		</header>
	);
};

export default Header;

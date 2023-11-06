import CartImage from "@/assets/shared/desktop/icon-cart.svg";
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
					<img src={CartImage} alt="cart" />
				</div>
			</div>
		</header>
	);
};

export default Header;

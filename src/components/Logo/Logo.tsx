import LogoImage from "@/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<Link className={styles.logo} to={"/"}>
			<img src={LogoImage} alt="audiophile" />
		</Link>
	);
};

export default Logo;

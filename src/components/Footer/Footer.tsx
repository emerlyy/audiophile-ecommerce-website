import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Socials from "../Socials/Socials";
import Text from "../Text/Text";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.header}>
						<Logo />
						<Navigation burger={false} />
					</div>
					<div className={styles.content}>
						<Text color="gray" extraClasses={styles.areaA}>
							Audiophile is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we’re open 7 days a week.
						</Text>
						<Text color="gray" extraClasses={`${styles.areaB} ${styles.bold}`}>
							Copyright 2021. All Rights Reserved
						</Text>
						<div className={`${styles.socials} ${styles.areaC}`}>
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

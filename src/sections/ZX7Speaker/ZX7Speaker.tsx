import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";
import styles from "./ZX7Speaker.module.css";

const ZX7Speaker = () => {
	return (
		<section className={styles.zx7speaker}>
			<div className="container">
				<div className={styles.inner}>
					<Title size="md" color="dark" extraClasses={styles.zx7title}>
						ZX7 Speaker
					</Title>
					<Button href="/speakers/zx7-speaker" type="outlined">
						See Product
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ZX7Speaker;

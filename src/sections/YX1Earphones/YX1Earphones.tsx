import YX1DesktopImage from "@/assets/home/desktop/image-earphones-yx1.jpg";
import YX1MobileImage from "@/assets/home/mobile/image-earphones-yx1.jpg";
import YX1TabletImage from "@/assets/home/tablet/image-earphones-yx1.jpg";
import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";
import styles from "./YX1Earphones.module.css";

const YX1Earphones = () => {
	return (
		<section className={styles.yx1earphones}>
			<div className="container">
				<div className={styles.inner}>
					<picture className={styles.yx1picture}>
						<source media="(min-width: 62rem)" srcSet={YX1DesktopImage} />
						<source media="(min-width: 40rem)" srcSet={YX1TabletImage} />
						<img src={YX1MobileImage} alt="YX1 Earphones" />
					</picture>
					<div className={styles.content}>
						<Title size="md" color="dark" extraClasses={styles.yx1title}>
							YX1 Earphones
						</Title>
						<Button href="/" type="outlined" color="dark">
							See Product
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default YX1Earphones;
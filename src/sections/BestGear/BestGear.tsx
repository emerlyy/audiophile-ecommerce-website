import BestGearDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import BestGearMobile from "@/assets/shared/mobile/image-best-gear.jpg";
import BestGearTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import Text from "@/components/Text/Text";
import Title from "@/components/Title/Title";
import styles from "./BestGear.module.css";

type BestGearProps = {
	mb?: string;
};

const BestGear = ({ mb }: BestGearProps) => {
	return (
		<section className={styles.bestGear} style={{ marginBottom: mb }}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.content}>
						<Title size="xl" extraClasses={styles.bestGearTitle}>
							Bringing you the <span>best</span> audio gear
						</Title>
						<Text extraClasses={styles.bestGearText}>
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</Text>
					</div>
					<picture className={styles.bestGearPicture}>
						<source media="(min-width: 62rem)" srcSet={BestGearDesktop} />
						<source media="(min-width: 40rem)" srcSet={BestGearTablet} />
						<img src={BestGearMobile} alt="Best Gear" />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default BestGear;

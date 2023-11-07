import ZX9DesktopImage from "@/assets/home/desktop/image-speaker-zx9.png";
import ZX9MobileImage from "@/assets/home/mobile/image-speaker-zx9.png";
import ZX9TabletImage from "@/assets/home/tablet/image-speaker-zx9.png";
import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";
import Title from "@/components/Title/Title";
import styles from "./ZX9Speaker.module.css";

const ZX9Speaker = () => {
	return (
		<section className={styles.zx9speaker}>
			<div className="container">
				<div className={styles.inner}>
					<picture className={styles.zx9picture}>
						<source media="(min-width: 62rem)" srcSet={ZX9DesktopImage} />
						<source media="(min-width: 40rem)" srcSet={ZX9TabletImage} />
						<img src={ZX9MobileImage} alt="ZX9 Speaker" />
					</picture>
					<div className={styles.description}>
						<Title
							tag="h2"
							color="light"
							size="2xl"
							extraClasses={styles.zx9title}
						>
							ZX9 Speaker
						</Title>
						<Text color="light" extraClasses={styles.zx9text}>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</Text>
						<Button href="/" color="dark">
							See Product
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ZX9Speaker;

import Text from "@/components/Text/Text";
import Title from "@/components/Title/Title";
import styles from "./Hero.module.css";
import Button from "@/components/Button/Button";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.content}>
						<Title
							size="overline"
							color="transparent"
							extraClasses={styles.overline}
						>
							New Product
						</Title>
						<Title
							tag="h1"
							size="2xl"
							color="light"
							extraClasses={styles.title}
						>
							XX99 Mark II Headphones
						</Title>
						<Text color="light" extraClasses={styles.text}>
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</Text>
					<Button href="/">See Product</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

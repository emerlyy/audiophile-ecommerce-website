import { Similar } from "@/types";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./OtherProductItem.module.css";

const OtherProductItem = ({ slug, name, category, image }: Similar) => {
	return (
		<div className={styles.productWrapper}>
			<picture className={styles.productPicture}>
				<source media="(min-width: 62rem)" srcSet={image.desktop} />
				<source media="(min-width: 40rem)" srcSet={image.tablet} />
				<img src={image.mobile} alt={name} />
			</picture>
			<Title tag="h3" size="sm" extraClasses={styles.productTitle}>
				{name}
			</Title>
			<Button role="link" href={`/${category}/${slug}`}>
				See Product
			</Button>
		</div>
	);
};

export default OtherProductItem;

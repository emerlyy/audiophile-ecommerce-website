import ArrowIcon from "@/assets/shared/desktop/icon-arrow-right.svg";
import { Category } from "@/types";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ link, image, title }: Category) => {
	return (
		<Button href={link} type="text" extraClasses={styles.category}>
			<img className={styles.categoryImg} src={image} />
			<Title tag="h2" size="xs">
				{title}
			</Title>
			<div className={styles.cardLink}>
				<p>Shop</p>
				<img className={styles.linkIcon} src={ArrowIcon} alt="" />
			</div>
		</Button>
	);
};

export default CategoryCard;

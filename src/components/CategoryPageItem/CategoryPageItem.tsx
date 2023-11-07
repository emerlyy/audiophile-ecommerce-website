import { Product } from "@/types";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./CategoryPageItem.module.css";

type CategoryPageItemProps = Pick<
	Product,
	"name" | "description" | "slug" | "new" | "categoryImage"
>;

const CategoryPageItem = ({
	name,
	description,
	slug,
	new: isNew,
	categoryImage,
}: CategoryPageItemProps) => {
	console.log(categoryImage);
	return (
		<div className={styles.categoryItem}>
			<picture className={styles.categoryItemImage}>
				<source media="(min-width: 62rem)" srcSet={categoryImage.desktop} />
				<source media="(min-width: 40rem)" srcSet={categoryImage.tablet} />
				<img src={categoryImage.mobile} alt={name} />
			</picture>
			<div className={styles.categoryItemDescription}>
				{isNew && (
					<Title
						tag="h3"
						size="overline"
						color="accent"
						extraClasses={styles.categoryItemOverline}
					>
						NEW PRODUCT
					</Title>
				)}
				<Title tag="h2" size="xl" extraClasses={styles.categoryItemTitle}>
					{name}
				</Title>
				<Text color="dark" extraClasses={styles.categoryItemText}>
					{description}
				</Text>
				<Button href={`./${slug}`}>See Product</Button>
			</div>
		</div>
	);
};

export default CategoryPageItem;

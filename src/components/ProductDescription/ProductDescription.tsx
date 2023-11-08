import { useCounter } from "@/hooks/useCounter";
import { Product } from "@/types";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import GoBackLink from "../GoBackLink/GoBackLink";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./ProductDescription.module.css";

type ProductDescriptionProps = Partial<
	Pick<Product, "name" | "description" | "price" | "new" | "image">
>;

const ProductDescription = ({
	name,
	description,
	price,
	new: isNew,
	image,
}: ProductDescriptionProps) => {
	const [count, increment, decrement] = useCounter();

	return (
		<div className={styles.product}>
			<div className="container">
				<GoBackLink extraClasses={styles.goback} />
				<div className={styles.inner}>
					<picture className={styles.picture}>
						<source media="(min-width: 62rem)" srcSet={image?.desktop} />
						<source media="(min-width: 40rem)" srcSet={image?.tablet} />
						<img src={image?.mobile} alt={name} />
					</picture>
					<div className={styles.content}>
						{isNew && (
							<Title
								tag="h3"
								size="overline"
								color="accent"
								extraClasses={styles.overline}
							>
								New Product
							</Title>
						)}
						<Title tag="h1" size="xl" extraClasses={styles.title}>
							{name}
						</Title>
						<Text extraClasses={styles.description}>{description}</Text>
						<span className={styles.price}>$ {price}</span>
						<div className={styles.purchase}>
							<Counter
								value={count}
								increment={increment}
								decrement={decrement}
							/>
							<Button href="#">Add to cart</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;

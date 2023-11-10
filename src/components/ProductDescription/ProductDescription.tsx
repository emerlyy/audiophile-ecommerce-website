import { addItemToCart } from "@/features/cart/cartSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useCounter } from "@/hooks/useCounter";
import { Product } from "@/types";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import GoBackLink from "../GoBackLink/GoBackLink";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./ProductDescription.module.css";

type ProductDescriptionProps = {
	product: Product;
};

const ProductDescription = ({ product }: ProductDescriptionProps) => {
	const [count, increment, decrement] = useCounter();

	const dispatch = useAppDispatch();

	return (
		<div className={styles.product}>
			<div className="container">
				<GoBackLink extraClasses={styles.goback} />
				<div className={styles.inner}>
					<picture className={styles.picture}>
						<source media="(min-width: 62rem)" srcSet={product.image.desktop} />
						<source media="(min-width: 40rem)" srcSet={product.image.tablet} />
						<img src={product.image.mobile} alt={product.name} />
					</picture>
					<div className={styles.content}>
						{product.new && (
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
							{product.name}
						</Title>
						<Text extraClasses={styles.description}>{product.description}</Text>
						<span className={styles.price}>$ {product.price}</span>
						<div className={styles.purchase}>
							<Counter
								value={count}
								increment={increment}
								decrement={decrement}
							/>
							<Button
								role="button"
								onClick={() => {
									dispatch(
										addItemToCart({
											id: product.id,
											image: `/assets/cart/image-${product.slug}.jpg`,
											price: product.price,
											quantity: count,
											shortName: product.name,
										})
									);
								}}
							>
								Add to cart
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;

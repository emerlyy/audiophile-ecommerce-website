import { Similar } from "@/types";
import OtherProductItem from "../OtherProductItem/OtherProductItem";
import Title from "../Title/Title";
import styles from "./OtherProducts.module.css";

type OtherProductsProps = {
	products: Similar[];
};

const OtherProducts = ({ products }: OtherProductsProps) => {
	return (
		<div className={styles.other}>
			<div className="container">
				<Title tag="h2" size="lg" extraClasses={styles.title}>
					You May Also Like
				</Title>
				<ul className={styles.productsList}>
					{products.map((product) => (
						<li key={product.slug}>
							<OtherProductItem {...product} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default OtherProducts;

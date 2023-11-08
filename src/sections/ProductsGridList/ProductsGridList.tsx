import CategoryPageItem from "@/components/CategoryPageItem/CategoryPageItem";
import { Product } from "@/types";
import styles from "./ProductsGridList.module.css";

type ProductsGridListProps = {
	products: Product[];
};

const ProductsGridList = ({ products }: ProductsGridListProps) => {
	return (
		<section>
			<div className="container">
				<div className={styles.stack}>
					{products.map((product) => (
						<CategoryPageItem
							key={product.id}
							name={product.name}
							description={product.description}
							slug={product.slug}
							new={product.new}
							categoryImage={product.categoryImage}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsGridList;

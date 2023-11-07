import CategoryPageItem from "@/components/CategoryPageItem/CategoryPageItem";
import CategoryPageTitle from "@/components/CategoryPageTitle/CategoryPageTitle";
import BestGear from "@/sections/BestGear/BestGear";
import Categories from "@/sections/Categories/Categories";
import { Product } from "@/types";
import { useLoaderData, useParams } from "react-router-dom";
import styles from "./CategoryPage.module.css";
const CategoryPage = () => {
	const params = useParams();
	const products = useLoaderData() as Product[];
	console.log(products);
	return (
		<>
			<CategoryPageTitle>{params.category}</CategoryPageTitle>
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
			<Categories />
			<BestGear />
		</>
	);
};

export default CategoryPage;

import CategoryPageTitle from "@/components/CategoryPageTitle/CategoryPageTitle";
import BestGear from "@/sections/BestGear/BestGear";
import Categories from "@/sections/Categories/Categories";
import ProductsGridList from "@/sections/ProductsGridList/ProductsGridList";
import { Product } from "@/types";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryPage = () => {
	const params = useParams();
	const products = useLoaderData() as Product[];

	return (
		<>
			<CategoryPageTitle>{params.category}</CategoryPageTitle>
			<ProductsGridList products={products} />
			<Categories/>
			<BestGear />
		</>
	);
};

export default CategoryPage;

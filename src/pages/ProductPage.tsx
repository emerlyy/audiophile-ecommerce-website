import BestGear from "@/sections/BestGear/BestGear";
import Categories from "@/sections/Categories/Categories";
import ProductDetails from "@/sections/ProductDetails/ProductDetails";
import { Product } from "@/types";
import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
	const product = useLoaderData() as Product;

	return (
		<>
			<ProductDetails product={product} />
			<Categories />
			<BestGear />
		</>
	);
};

export default ProductPage;

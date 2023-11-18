import BestGear from "@/sections/BestGear/BestGear";
import Categories from "@/sections/Categories/Categories";
import ProductDetails from "@/sections/ProductDetails/ProductDetails";
import { Product } from "@/types";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ProductPage = () => {
	const product = useLoaderData() as Product;

	return (
		<>
			<ProductDetails product={product} />
			<Categories />
			<BestGear />
			<ToastContainer
				position="top-left"
				autoClose={1500}
				closeOnClick
				draggable
				pauseOnHover={false}
				theme="colored"
			/>
		</>
	);
};

export default ProductPage;

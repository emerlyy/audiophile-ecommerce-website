import OtherProducts from "@/components/OtherProducts/OtherProducts";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import ProductFeatures from "@/components/ProductFeatures/ProductFeatures";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import { Product } from "@/types";

type ProductDetailsProps = {
	product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
	const { features, includes, gallery, others } = product;
	
	return (
		<>
			<ProductDescription product={product} />
			<ProductFeatures features={features} includedItems={includes} />
			<ProductGallery {...gallery} />
			<OtherProducts products={others} />
		</>
	);
};

export default ProductDetails;

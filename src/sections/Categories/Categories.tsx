import EarphonesImage from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImage from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import { Category } from "@/types";
import styles from "./Categories.module.css";

const categories: Category[] = [
	{
		title: "Headphones",
		link: "/headphones",
		image: HeadphonesImage,
	},
	{
		title: "Speakers",
		link: "/speakers",
		image: SpeakersImage,
	},
	{
		title: "Earphones",
		link: "/earphones",
		image: EarphonesImage,
	},
];

type CategoriesProps = {
	mb?: boolean;
};

const Categories = ({ mb = true }: CategoriesProps) => {
	return (
		<section className={mb ? styles.categories : ""}>
			<div className="container">
				<div className={styles.stack}>
					{categories.map((product, index) => (
						<CategoryCard
							key={`${product.title}-${index}`}
							link={product.link}
							title={product.title}
							image={product.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;

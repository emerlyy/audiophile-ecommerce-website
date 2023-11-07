import Title from "../Title/Title";
import styles from "./CategoryPageTitle.module.css";

type Props = {
	children: React.ReactNode;
};

const CategoryPageTitle = ({ children }: Props) => {
	return (
		<section className={styles.title}>
			<Title tag="h1" size="lg" color="light">
				{children}
			</Title>
		</section>
	);
};

export default CategoryPageTitle;

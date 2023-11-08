import { Product } from "@/types";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./ProductFeatures.module.css";

type ProductFeaturesProps = {
	features: Product["features"];
	includedItems: Product["includes"];
};

const ProductFeatures = ({ features, includedItems }: ProductFeaturesProps) => {
	return (
		<div className={styles.featuresWrapper}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.features}>
						<Title tag="h2" size="lg" extraClasses={styles.title}>
							Features
						</Title>
						<Text extraClasses={styles.featuresText}>{features}</Text>
					</div>
					<div>
						<Title tag="h2" size="lg" extraClasses={styles.title}>
							In The Box
						</Title>
						<ul>
							{includedItems.map((item) => (
								<li key={item.item}>
									<div className={styles.addon}>
										<Text extraClasses={styles.addonCount}>
											{item.quantity}x
										</Text>
										<Text>{item.item}</Text>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductFeatures;

import { Gallery } from "@/types";
import styles from "./ProductGallery.module.css";

type GalleryProps = Partial<Gallery>;

const ProductGallery = ({ first, second, third }: GalleryProps) => {
	return (
		<div className={styles.gallery}>
			<div className="container">
				<div className={styles.inner}>
					<picture className={styles.galleryPicture}>
						<source media="(min-width: 62rem)" srcSet={first?.desktop} />
						<source media="(min-width: 40rem)" srcSet={first?.tablet} />
						<img src={first?.mobile} />
					</picture>
					<picture className={styles.galleryPicture}>
						<source media="(min-width: 62rem)" srcSet={second?.desktop} />
						<source media="(min-width: 40rem)" srcSet={second?.tablet} />
						<img src={second?.mobile} />
					</picture>
					<picture className={styles.galleryPicture}>
						<source media="(min-width: 62rem)" srcSet={third?.desktop} />
						<source media="(min-width: 40rem)" srcSet={third?.tablet} />
						<img src={third?.mobile} />
					</picture>
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;

import { formatPrice } from "@/utils/formatPrice";
import Counter from "../Counter/Counter";
import Text from "../Text/Text";
import styles from "./SmallItem.module.css";

type SmallItemSize = "basic" | "small";

type SmallItemStatic = {
	variant: "static";
	size?: SmallItemSize;
	name: string;
	image: string;
	price: number;
	quantity: number;
};

type SmallItemChangeable = {
	variant: "changeable";
	onIncrease: () => void;
	onDecrease: () => void;
} & Omit<SmallItemStatic, "variant">;

type SmallItemProps = SmallItemStatic | SmallItemChangeable;

const SmallItem = (props: SmallItemProps) => {
	const { variant, image, name, price, quantity, size = "basic" } = props;

	return (
		<div className={`${styles.smallItem} ${size==='small'?` ${styles.small}`:''}`}>
			<img className={styles.image} src={image} alt={name} />
			<div className={styles.content}>
				<div>
					<Text tag="strong" extraClasses={styles.itemName}>
						{name}
					</Text>
					<Text tag="span" extraClasses={styles.itemPrice}>
						$ {formatPrice(price)}
					</Text>
				</div>

				{variant === "static" && (
					<Text tag="span" extraClasses={styles.quantityText}>
						x{quantity}
					</Text>
				)}
				{variant === "changeable" && (
					<div className={styles.quantityCounter}>
						<Counter
							size="small"
							value={quantity}
							decrement={props.onDecrease}
							increment={props.onIncrease}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default SmallItem;

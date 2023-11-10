import Counter from "../Counter/Counter";
import Text from "../Text/Text";
import styles from "./SmallItem.module.css";

type SmallItemStatic = {
	variant: "static";
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
	const { variant, image, name, price, quantity } = props;

	return (
		<div className={styles.smallItem}>
			<img className={styles.image} src={image} alt={name} />
			<div className={styles.content}>
				<div>
					<Text tag="strong" extraClasses={styles.itemName}>
						{name}
					</Text>
					<Text tag="span" extraClasses={styles.itemPrice}>
						$ {price}
					</Text>
				</div>

				{variant === "static" && <Text tag="span">x{quantity}</Text>}
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

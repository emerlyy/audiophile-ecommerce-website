import styles from "./Counter.module.css";

type CounterProps = {
	value: number;
	increment: () => void;
	decrement: () => void;
	size?: "normal" | "small";
};

const Counter = ({
	value,
	increment,
	decrement,
	size = "normal",
}: CounterProps) => {
	return (
		<div
			className={`${styles.counter} ${
				size === "small" ? ` ${styles.small}` : ""
			}`}
		>
			<button className={styles.button} onClick={decrement}>
				-
			</button>
			<span>{value}</span>
			<button className={styles.button} onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Counter;

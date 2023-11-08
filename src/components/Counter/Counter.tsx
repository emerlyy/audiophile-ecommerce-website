import styles from "./Counter.module.css";

type CounterProps = {
	value: number;
	increment: () => void;
	decrement: () => void;
};

const Counter = ({ value, increment, decrement }: CounterProps) => {
	return (
		<div className={styles.counter}>
			<button className={styles.button} onClick={decrement}>-</button>
			<span>{value}</span>
			<button className={styles.button} onClick={increment}>+</button>
		</div>
	);
};

export default Counter;

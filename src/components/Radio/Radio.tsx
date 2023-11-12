import styles from "./Radio.module.css";

type Props = {
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ label, ...props }: Props) => {
	return (
		<label className={styles.radioBody}>
			<input type="radio" name="radio" {...props} />
			{label}
		</label>
	);
};

export default Radio;

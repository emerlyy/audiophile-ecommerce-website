import { forwardRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
	label: string;
	id: string;
	errorMessage?: string;
	className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
	(
		{ label, id, errorMessage, className, ...props }: InputProps,
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const hasError = !!errorMessage?.length;

		return (
			<div className={`${className}  ${hasError ? `${styles.error}` : ""}`}>
				<div className={styles.labelWrapper}>
					<label htmlFor={id} className={styles.label}>
						{label}
					</label>
					{hasError && (
						<span className={styles.errorMessage}>{errorMessage}</span>
					)}
				</div>
				<input ref={ref} id={id} {...props} className={`${styles.input}`} />
			</div>
		);
	}
);

export default Input;

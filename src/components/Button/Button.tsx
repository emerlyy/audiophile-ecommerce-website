import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonType = "primary" | "outlined" | "text";

const types: {
	[key in ButtonType]: string;
} = {
	primary: styles["button-primary"],
	outlined: styles["button-outlined"],
	text: styles["button-text"],
};

const getStyles = (type: ButtonType, extra?: string) => {
	let buttonStyles = `${styles.button} ${types[type]}`;

	if (extra) {
		buttonStyles += ` ${extra}`;
	}

	return buttonStyles;
};

type ButtonProps = {
	type?: ButtonType;
	href: string;
	children: React.ReactNode;
	extraClasses?: string;
};

const Button = ({
	type = "primary",
	extraClasses,
	href,
	children,
}: ButtonProps) => {
	return (
		<Link className={getStyles(type, extraClasses)} to={href}>
			{children}
		</Link>
	);
};

export default Button;

import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonType = "primary" | "outlined" | "text";
type ButtonColor = "accent" | "dark";

const types: {
	[key in ButtonType]: string;
} = {
	primary: styles["button-primary"],
	outlined: styles["button-outlined"],
	text: styles["button-text"],
};
const colors: {
	[key in ButtonColor]: string;
} = {
	accent: styles["button-accent"],
	dark: styles["button-dark"],
};

const getStyles = (
	type: ButtonType,
	color: ButtonColor | undefined,
	extra?: string
) => {
	let buttonStyles = `${styles.button} ${types[type]}`;

	if (color) {
		buttonStyles += ` ${colors[color]}`;
	}

	if (extra) {
		buttonStyles += ` ${extra}`;
	}

	return buttonStyles;
};

type ButtonProps = {
	type?: ButtonType;
	color?: ButtonColor;
	href: string;
	children: React.ReactNode;
	extraClasses?: string;
};

const Button = ({
	type = "primary",
	color,
	extraClasses,
	href,
	children,
}: ButtonProps) => {
	return (
		<Link className={getStyles(type, color, extraClasses)} to={href}>
			{children}
		</Link>
	);
};

export default Button;

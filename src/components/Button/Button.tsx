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

type LinkButton = {
	role: "link";
	type?: ButtonType;
	color?: ButtonColor;
	href: string;
	children: React.ReactNode;
	extraClasses?: string;
};

type TriggerButton = {
	role: "button";
	type?: ButtonType;
	color?: ButtonColor;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	extraClasses?: string;
};

type ButtonProps = LinkButton | TriggerButton;

const Button = (props: ButtonProps) => {
	const { role, type = "primary", color, children, extraClasses } = props;
	switch (role) {
		case "button":
			return (
				<button
					className={getStyles(type, color, extraClasses)}
					onClick={props.onClick}
				>
					{children}
				</button>
			);
		case "link":
			return (
				<Link
					className={getStyles(type, color, extraClasses)}
					to={props.href}
					reloadDocument={true}
				>
					{children}
				</Link>
			);
	}
};

export default Button;

import styles from "./Text.module.css";

type TextColor = "dark" | "light" | "gray";

type TextProps = {
	color?: TextColor;
	extraClasses?: string;
	children: React.ReactNode;
};

const colors: {
	[key in TextColor]: string;
} = {
	dark: styles["text-dark"],
	light: styles["text-light"],
	gray: styles["text-gray"],
};

const getStyles = (color: TextColor, extra?: string) => {
	let textStyles = `${styles.text} ${colors[color]}`;

	if (extra) {
		textStyles += ` ${extra}`;
	}

	return textStyles;
};

const Text = ({ color = "dark", extraClasses, children }: TextProps) => {
	return <p className={getStyles(color, extraClasses)}>{children}</p>;
};

export default Text;

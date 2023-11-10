import styles from "./Text.module.css";

type TextColor = "dark" | "light" | "gray";

type TextProps = {
	tag?: React.ElementType;
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

const Text = ({
	tag = "p",
	color = "dark",
	extraClasses,
	children,
}: TextProps) => {
	const TextTag = tag;

	return (
		<TextTag className={getStyles(color, extraClasses)}>{children}</TextTag>
	);
};

export default Text;

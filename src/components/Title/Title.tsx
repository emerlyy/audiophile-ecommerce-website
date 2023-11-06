import styles from "./Title.module.css";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TitleSize =
	| "2xl"
	| "xl"
	| "lg"
	| "md"
	| "sm"
	| "xs"
	| "overline"
	| "subtitle";
type TitleColor = "light" | "dark" | "accent" | "transparent";

const sizes: {
	[key in TitleSize]: string;
} = {
	"2xl": styles[`title-2xl`],
	xl: styles[`title-xl`],
	lg: styles[`title-lg`],
	md: styles[`title-md`],
	sm: styles[`title-sm`],
	xs: styles[`title-xs`],
	overline: styles[`title-overline`],
	subtitle: styles[`title-subtitle`],
};

const colors: {
	[key in TitleColor]: string;
} = {
	light: styles[`title-light`],
	dark: styles[`title-dark`],
	accent: styles[`title-accent`],
	transparent: styles[`title-transparent`],
};

const getStyles = (size: TitleSize, color: TitleColor, extra?: string) => {
	let titleStyles = `${styles.title} ${sizes[size]} ${colors[color]}`;

	if (extra) {
		titleStyles += ` ${extra}`;
	}

	return titleStyles;
};

type TitleProps = {
	tag?: TitleTag;
	size?: TitleSize;
	color?: TitleColor;
	children: React.ReactNode;
	extraClasses?: string;
};

const Title = ({
	tag,
	size = "md",
	color = "dark",
	extraClasses,
	children,
}: TitleProps) => {
	const Tag = tag ?? "h2";
	const styles = getStyles(size, color, extraClasses);

	return <Tag className={styles}>{children}</Tag>;
};

export default Title;

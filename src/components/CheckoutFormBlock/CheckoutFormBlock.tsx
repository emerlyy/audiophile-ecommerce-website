import Title from "../Title/Title";
import styles from "./CheckoutFormBlock.module.css";

type CheckoutFormBlockProps = {
	title: string;
	className?: string;
	children?: React.ReactNode;
};

const CheckoutFormBlock = ({
	title,
	className,
	children,
}: CheckoutFormBlockProps) => {
	return (
		<>
			<Title
				tag="h3"
				size="subtitle"
				color="accent"
				extraClasses={styles.blockTitle}
			>
				{title}
			</Title>
			<div className={className}>{children}</div>
		</>
	);
};

export default CheckoutFormBlock;

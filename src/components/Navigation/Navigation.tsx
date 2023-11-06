import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

type Link = {
	title: string;
	href: string;
};

const links: Link[] = [
	{
		title: "HOME",
		href: "/",
	},
	{
		title: "HEADPHONES",
		href: "/headphones",
	},
	{
		title: "SPEAKERS",
		href: "/speakers",
	},
	{
		title: "EARPHONES",
		href: "/earphones",
	},
];

const Navigation = () => {
	return (
		<nav>
			<ul className={styles.list}>
				{links.map((link) => (
					<li key={link.href}>
						<Link className={styles.link} to={link.href}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

type NavLink = {
	title: string;
	href: string;
};

const links: NavLink[] = [
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
						<Link className={styles.link} to={link.href} reloadDocument={true}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

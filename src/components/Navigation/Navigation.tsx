import useMediaQuery from "@/hooks/useMediaQuery";
import { useModal } from "@/hooks/useModal";
import Categories from "@/sections/Categories/Categories";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
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

type NavigationProps = {
	burger?: boolean;
};

const Navigation = ({ burger = true }: NavigationProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 992px)");
	const [isNavbarOpen, , close, toggle] = useModal();
	return (
		<nav>
			{isAboveMediumScreens || !burger ? (
				<ul className={styles.list}>
					{links.map((link) => (
						<li key={link.href}>
							<Link
								className={styles.link}
								to={link.href}
								reloadDocument={true}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<>
					<button onClick={toggle} className={styles.navigationButton}>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<Modal
						variant="outsideOverlay"
						isOpen={isNavbarOpen}
						onRequestClose={close}
						className={styles.mobileNavigation}
					>
						<Categories mb={false} />
					</Modal>
				</>
			)}
		</nav>
	);
};

export default Navigation;

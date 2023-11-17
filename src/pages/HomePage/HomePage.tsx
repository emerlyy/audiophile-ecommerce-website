import BestGear from "@/sections/BestGear/BestGear";
import Categories from "@/sections/Categories/Categories";
import Hero from "@/sections/Hero/Hero";
import YX1Earphones from "@/sections/YX1Earphones/YX1Earphones";
import ZX7Speaker from "@/sections/ZX7Speaker/ZX7Speaker";
import ZX9Speaker from "@/sections/ZX9Speaker/ZX9Speaker";
import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Categories />
			<ZX9Speaker />
			<ZX7Speaker />
			<YX1Earphones />
			<BestGear className={styles.bestGear} />
		</>
	);
};

export default HomePage;

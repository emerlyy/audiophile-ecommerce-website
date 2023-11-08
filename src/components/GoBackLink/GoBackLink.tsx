import { useNavigate } from "react-router-dom";
import styles from "./GoBackLink.module.css";

type GoBackLinkProps = {
	extraClasses?: string;
};

const GoBackLink = ({ extraClasses }: GoBackLinkProps) => {
	const navigate = useNavigate();

	const classes = `${styles.goback}${extraClasses ? ` ${extraClasses}` : ""}`;

	return (
		<a onClick={() => navigate(-1)} className={classes}>
			Go Back
		</a>
	);
};

export default GoBackLink;

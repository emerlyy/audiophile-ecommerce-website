import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

type ModalProps = {
	isOpen: boolean;
	variant?: "insideOverlay" | "outsideOverlay";
	className?: string;
	onRequestClose: () => void;
	children?: React.ReactNode;
};

const Modal = ({
	isOpen,
	variant = "insideOverlay",
	className,
	onRequestClose,
	children,
}: ModalProps) => {
	useEffect(() => {
		document.body.className = isOpen ? "noscroll" : "";
	}, [isOpen]);

	return (
		<>
			{isOpen && (
				<>
					{variant === "outsideOverlay" && (
						<div className={className}>{children}</div>
					)}
					{/* overlay */}
					{createPortal(
						<div className={styles.overlay} onClick={() => onRequestClose()}>
							{variant === "insideOverlay" && (
								<div className={className} onClick={(e)=>e.stopPropagation()}>{children}</div>
							)}
						</div>,
						document.getElementById("root") ?? document.body
					)}
				</>
			)}
		</>
	);
};

export default Modal;

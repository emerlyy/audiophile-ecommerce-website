import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

type ModalProps = {
	isOpen: boolean;
	variant?: "insideOverlay" | "outsideOverlay";
	className?: string;
	overlayClass?: string;
	onRequestClose: () => void;
	children?: React.ReactNode;
};

const Modal = ({
	isOpen,
	variant = "insideOverlay",
	className,
	overlayClass,
	onRequestClose,
	children,
}: ModalProps) => {
	useEffect(() => {
		document.body.className = isOpen ? "noscroll" : "";
	}, [isOpen]);

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<>
						{variant === "outsideOverlay" && (
							<motion.div
								initial={{
									y: -100,
								}}
								animate={{
									y: 0,
								}}
								className={className}
							>
								{children}
							</motion.div>
						)}
						{/* overlay */}
						{createPortal(
							<div
								className={overlayClass ? overlayClass : styles.overlay}
								onClick={() => onRequestClose()}
							>
								{variant === "insideOverlay" && (
									<motion.div
										initial={{
											y: -100,
										}}
										animate={{
											y: 0,
										}}
										transition={{ duration: 0.2, type: "spring" }}
										className={className}
										onClick={(e) => e.stopPropagation()}
									>
										{children}
									</motion.div>
								)}
							</div>,
							document.getElementById("root") ?? document.body
						)}
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Modal;

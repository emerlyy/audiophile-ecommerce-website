import { ChangeEvent } from "react";
import Radio from "../Radio/Radio";

import { PaymentMethodValue, isPaymentMethodValue } from "@/types";
import styles from "./PaymentMethod.module.css";

type PaymentOption = {
	value: PaymentMethodValue;
	label: string;
};

const options: PaymentOption[] = [
	{
		label: "e-Money",
		value: "e-money",
	},
	{
		label: "Cash on Delivery",
		value: "cash",
	},
];

type PaymentMethodProps = {
	selected: PaymentMethodValue;
	onChange: (value: PaymentMethodValue) => void;
	disabled?: boolean;
};

const PaymentMethod = ({
	selected,
	onChange,
	disabled,
}: PaymentMethodProps) => {
	const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = target.name;
		if (isPaymentMethodValue(value)) {
			onChange(value);
		}
	};

	return (
		<>
			<div role="radiogroup" className={styles.paymentOptions}>
				<h3 className={styles.paymentTitle}>Payment Method</h3>
				{options.map((option) => (
					<Radio
						key={option.label}
						name={option.value}
						label={option.label}
						checked={option.value === selected}
						onChange={onOptionChange}
						disabled={disabled}
					/>
				))}
			</div>
		</>
	);
};

export default PaymentMethod;

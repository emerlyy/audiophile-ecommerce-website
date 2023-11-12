import CashImage from "@/assets/checkout/icon-cash-on-delivery.svg";
import { PaymentMethodValue } from "@/types";
import { useState } from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import CheckoutFormBlock from "../CheckoutFormBlock/CheckoutFormBlock";
import Input from "../Input/Input";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./CheckoutForm.module.css";

interface FormInputs {
	name: string;
	email: string;
	phone: string;
	address: string;
	zipCode: number;
	city: string;
	country: string;
	emoneyNumber?: string;
	emoneyZip?: number;
}

interface FormInput {
	id: keyof FormInputs;
	label: string;
	placeholder: string;
	className?: string;
	validators: RegisterOptions;
}

const formBlocks: {
	title: string;
	inputs: FormInput[];
}[] = [
	{
		title: "Billing Details",
		inputs: [
			{
				id: "name",
				label: "Name",
				placeholder: "Alexei Ward",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
					minLength: {
						value: 2,
						message: "Must contain at least 2 characters",
					},
				},
			},
			{
				id: "email",
				label: "Email Address",
				placeholder: "alexei@mail.com",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
			{
				id: "phone",
				label: "Phone Number",
				placeholder: "+1 202-555-0136",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
		],
	},
	{
		title: "Shipping Info",
		inputs: [
			{
				id: "address",
				label: "Address",
				placeholder: "1137 Williams Avenue",
				className: styles.fullWidth,
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
			{
				id: "zipCode",
				label: "ZIP code",
				placeholder: "10001",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
			{
				id: "city",
				label: "City",
				placeholder: "New York",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
			{
				id: "country",
				label: "Country",
				placeholder: "United States",
				validators: {
					required: {
						value: true,
						message: "Required",
					},
				},
			},
		],
	},
];

const emoneyInputs: FormInput[] = [
	{
		id: "emoneyNumber",
		label: "e-Money Number",
		placeholder: "238521993",
		validators: {
			required: {
				value: true,
				message: "Required",
			},
		},
	},
	{
		id: "emoneyZip",
		label: "e-Money ZIP",
		placeholder: "6891",
		validators: {
			required: {
				value: true,
				message: "Required",
			},
		},
	},
];

const CheckoutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		console.log(data);
	};

	const [paymentMethod, setPaymentMethod] =
		useState<PaymentMethodValue>("e-money");

	const onPaymentMethodChange = (value: PaymentMethodValue) => {
		setPaymentMethod(value);
	};

	const renderPaymentMethodBody = () => {
		switch (paymentMethod) {
			case "e-money":
				return (
					<div className={styles.emoney}>
						{emoneyInputs.map(
							({ id, label, placeholder, validators, className }) => (
								<Input
									errorMessage={errors[id]?.message}
									key={id}
									id={id}
									label={label}
									placeholder={placeholder}
									className={className}
									{...register(id, validators)}
								/>
							)
						)}
					</div>
				);
			case "cash":
				return (
					<div className={styles.cashWrapper}>
						<img
							className={styles.cashImage}
							src={CashImage}
							alt="Cash on delivery"
						/>
						<Text extraClasses={styles.cashText}>
							The ‘Cash on Delivery’ option enables you to pay in cash when our
							delivery courier arrives at your residence. Just make sure your
							address is correct so that your order will not be cancelled.
						</Text>
					</div>
				);
		}
	};

	return (
		<form
			id="checkout-form"
			className={styles.checkoutForm}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Title tag="h2" size="lg" extraClasses={styles.formTitle}>
				Checkout
			</Title>
			{formBlocks.map(({ title, inputs }) => (
				<CheckoutFormBlock key={title} title={title} className={styles.grid}>
					{inputs.map(({ id, label, placeholder, validators, className }) => (
						<Input
							errorMessage={errors[id]?.message}
							key={id}
							id={id}
							label={label}
							placeholder={placeholder}
							className={className}
							{...register(id, validators)}
						/>
					))}
				</CheckoutFormBlock>
			))}
			<CheckoutFormBlock title="Payment Details">
				<PaymentMethod
					selected={paymentMethod}
					onChange={onPaymentMethodChange}
				/>
				{renderPaymentMethodBody()}
			</CheckoutFormBlock>
		</form>
	);
};

export default CheckoutForm;

import { PaymentMethodValue } from "..";

export const isPaymentMethodValue = (
	value: string
): value is PaymentMethodValue => value === "cash" || value === "e-money";

const formatter = new Intl.NumberFormat("en-US", {
	maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const formatPrice = (price: number) => {
	return formatter.format(price);
};

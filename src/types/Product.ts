type Image = {
	mobile: string;
	tablet: string;
	desktop: string;
};

type Addon = {
	quantity: number;
	item: string;
};

type Similar = {
	slug: string;
	name: string;
	image: Image;
};

export type Product = {
	id: number;
	slug: string;
	name: string;
	image: Image;
	category: string;
	categoryImage: Image;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: Addon[];
	gallery: {
		first: Image;
		second: Image;
		third: Image;
	};
	others: Similar[];
};

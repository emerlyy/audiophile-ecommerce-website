type Image = {
	mobile: string;
	tablet: string;
	desktop: string;
};

type Addon = {
	quantity: number;
	item: string;
};

export type Similar = {
	slug: string;
	name: string;
	image: Image;
	category: string;
};

export type Gallery = {
	first: Image;
	second: Image;
	third: Image;
};

export type Product = {
	id: number;
	slug: string;
	name: string;
	shortName:string
	image: Image;
	category: string;
	categoryImage: Image;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: Addon[];
	gallery: Gallery;
	others: Similar[];
};

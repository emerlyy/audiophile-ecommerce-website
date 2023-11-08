import data from "@/data/data.json";
import { Product } from "@/types";

export const getProductsByCategory = (category?: string) => {
	if (!category) return [];

	return (data as Product[])
		.filter((item) => item.category === category)
		.sort((a, b) => b.id - a.id);
};

export const getProductBySlug = (slug?: string) => {
	return data.find((item) => item.slug === slug) as Product;
};

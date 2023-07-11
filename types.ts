export interface Category {
	title: string;
	slug: string;
	image: {
		url: string;
	};
}
export interface Product {
	title: string;
	slug: string;
	category: string;
	categoryLatin: string;
	description: string;
	monthPrice: number;
	dailyPrice: number;
	year: number;
	cardImages: [
		{
			url: string;
		}
	];
	cardThumb: {
		url: string;
	};
}
export interface Post {
	title: string;
	slug: string;
	description: string;
	publishedAt: string;
	content: {
		html: string;
	};
	image: {
		url: string;
	};
}

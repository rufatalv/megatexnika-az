import { Category } from "@/types";
import CategoryItem from "./CategoryItem";

export default function Categories({ data }: { data: Category[] }) {
	return (
		<div className="container pb-12 md:pb-24 lg:pb-32 px-5 lg:px-0">
			<h1 className="font-montserrat text-3xl font-bold text-lightblue-600 mb-7">
				Kateqoriyalar
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				{data.map((category, idx) => (
					<CategoryItem key={idx} data={category} />
				))}
			</div>
		</div>
	);
}

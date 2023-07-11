import { ReactNode } from "react";
export type CrumbItem = {
	label: ReactNode;
	path: string;
};
export type BreadcrumbsProps = {
	items: CrumbItem[];
};

import Link from "next/link";
const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<div className="container px-5 lg:px-0 mt-4 flex gap-2 font-mulish text-xs items-start">
			{items.map((crumb, i) => {
				const isLastItem = i === items.length - 1;
				if (!isLastItem) {
					return (
						<div key={i}>
							<Link
								href={crumb.path}
								className="text-lightgray-500 hover:text-yellow hover:underline">
								{crumb.label}
							</Link>
							<span> | </span>
						</div>
					);
				} else {
					return crumb.label;
				}
			})}
		</div>
	);
};
export default Breadcrumbs;

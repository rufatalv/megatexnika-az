import React from "react";

interface IButton {
	className: string;
	children: React.ReactNode;
	onClick: () => void;
}

export default function Button({ className, onClick, children }: IButton) {
	return (
		<button
			className={`py-3 font-mulish font-bold text-xs text-darkgray-300 rounded-[30px] ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
}

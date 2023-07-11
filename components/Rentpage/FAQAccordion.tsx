import React, { useState, createContext, useContext } from "react";
import { FiX } from "react-icons/fi";

interface IFAQAccordionProps {
	children: React.ReactNode;
}

interface IFAQAccordion extends React.FC<IFAQAccordionProps> {
	Body: React.FC<IFAQAccordionProps>;
	Number: React.FC<IFAQAccordionProps>;
	Title: React.FC<IFAQAccordionProps>;
	Text: React.FC<IFAQAccordionProps>;
}

interface IAccordionContext {
	isOpen: boolean;
	toggleOpen: () => void;
}

const AccordionContext = createContext<IAccordionContext | undefined>(
	undefined
);

const FAQAccordion: IFAQAccordion = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex justify-between items-start max-w-[1037px] mx-auto border-b-[1px] border-[#ECECF1] last-of-type:border-none pt-8 md:first-of-type:pt-0 pb-4">
			<AccordionContext.Provider value={{ isOpen, toggleOpen }}>
				{children}
				<FiX
					onClick={toggleOpen}
					className={`transition-all cursor-pointer text-darkblue text-3xl sm:text-2xl ${
						isOpen ? "" : "rotate-45"
					}`}
				/>
			</AccordionContext.Provider>
		</div>
	);
};

const Body: React.FC<IFAQAccordionProps> = ({ children }) => {
	const { isOpen } = useContext(AccordionContext) as IAccordionContext;

	return <div className=" mr-auto flex flex-col gap-4">{children}</div>;
};

const Number: React.FC<IFAQAccordionProps> = ({ children }) => {
	return (
		<div className="mr-3 sm:mr-8 md:mr-16 text-xl md:text-2xl text-royalblue font-medium">
			{children}
		</div>
	);
};

const Title: React.FC<IFAQAccordionProps> = ({ children }) => {
	const { isOpen, toggleOpen } = useContext(
		AccordionContext
	) as IAccordionContext;
	return (
		<div
			className="cursor-pointer text-darkblue font-montserrat"
			onClick={toggleOpen}>
			{children}
		</div>
	);
};

const Text: React.FC<IFAQAccordionProps> = ({ children }) => {
	const { isOpen } = useContext(AccordionContext) as IAccordionContext;
	return (
		<div
			className={`text-darkblue font-montserrat  md:leading-5 text-sm text-lightblue-700 grid grid-rows-1 max-w-[855px] overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
				isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
			}`}>
			<div className="overflow-hidden">{children}</div>
		</div>
	);
};

FAQAccordion.Body = Body;
FAQAccordion.Number = Number;
FAQAccordion.Title = Title;
FAQAccordion.Text = Text;

export default FAQAccordion;

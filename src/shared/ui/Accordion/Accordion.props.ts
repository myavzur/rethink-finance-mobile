import type { ReactNode } from "react";

export interface AccordionProps {
	title: string;
	children: ReactNode;
	initialOpen?: boolean;
	preventBorderTop?: boolean;
}

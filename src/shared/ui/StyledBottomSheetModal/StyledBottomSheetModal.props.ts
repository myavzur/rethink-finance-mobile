import type { ReactNode } from "react";

export type SnapPoints = "50%" | "75%" | "100%";

export interface StyledBottomSheetModalProps {
	children: ReactNode;
	/** Размер на который открывается меню изначально. */
	snapPoint?: SnapPoints;
	portalHostName?: string;
}

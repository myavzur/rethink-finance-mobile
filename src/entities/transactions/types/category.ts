import type { HighlightColor } from "@/entities/themes/const";
import type { IconName } from "@/shared/ui";
import type { Transaction } from "./transaction";

export interface Category {
	id: string;
	name: string;
	transactions: Transaction[];
	iconName: IconName;
	highlightColor: HighlightColor;
}

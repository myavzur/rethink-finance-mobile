import type { Category } from "@/shared/database/schema";

export interface CategoryIconProps {
	iconName: Category["icon_name"];
	highlightColor: Category["highlight_color"];
	size?: "medium";
}

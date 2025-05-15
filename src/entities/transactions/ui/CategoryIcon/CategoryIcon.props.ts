import type { Category } from "@/shared/database/schemas";

export interface CategoryIconProps {
	iconName: Category["icon_name"];
	highlightColor: Category["highlight_color"];
}

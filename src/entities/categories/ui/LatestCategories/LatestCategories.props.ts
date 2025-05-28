import type { Category } from "@/shared/database/schema";

export interface LatestCategoriesProps {
	onSelectCategory: (category: Category) => void;
}

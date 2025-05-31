import type { Category } from "@/shared/database/schema";

export interface LatestCategoriesProps {
	selectedCategoryId: Category["id"] | null;
	onSelectCategory: (category: Category) => void;
}

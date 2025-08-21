import type { Category } from "@/shared/database/schema";

export interface CategoryListProps {
	withHeader: boolean;
	onSelectCategory: (category: Category) => void;
	selectedCategoryId?: Category["id"];
}

import type { Category } from "@/entities/transactions/types";

export interface CategoryListProps {
	onSelect: (category: Category) => void;
}

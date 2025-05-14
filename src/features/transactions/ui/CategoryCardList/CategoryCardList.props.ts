import type { Category } from "@/entities/transactions/types";

export interface CategoryCardListProps {
	onSelect: (category: Category) => void;
}
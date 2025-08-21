import type { Category } from "@/shared/database/schema";

export interface CategoryCardProps {
	category: Category;
	onPress: (category: Category) => void;
	isActive?: boolean;
}

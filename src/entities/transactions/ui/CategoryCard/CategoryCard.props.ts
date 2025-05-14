import type { Category } from "@/shared/database/schemas";

export interface CategoryCardProps {
	category: Category;
	onPress?: () => void;
}
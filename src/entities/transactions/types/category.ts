import type { HighlightColor } from "@/entities/themes/const";
import type { IconName } from "@/shared/ui";

export interface Category {
	id: string;
	name: string;
	icon_name: IconName;
	highlight_color: HighlightColor;
}

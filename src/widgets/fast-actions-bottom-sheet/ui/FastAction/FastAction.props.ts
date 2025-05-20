import type { IHighlightColor } from "@/entities/themes/const";

import type { IconName } from "@/shared/ui";

export interface FastActionProps {
	onPress: () => void;
	icon: IconName;
	label: string;
	highlightColor?: IHighlightColor;
}

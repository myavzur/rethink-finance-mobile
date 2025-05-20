import type { HighlightColor } from "@/entities/themes/const";

import type { ValueOf } from "@/shared/types";

export interface SelectHighlightColorProps {
	onSelect: (highlightColor: ValueOf<typeof HighlightColor>) => void;
}

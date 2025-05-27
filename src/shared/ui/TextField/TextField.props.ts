import type { ComponentProps, Ref } from "react";
import { TextInput } from "react-native";

import type { IconName } from "@/shared/ui";

export interface TextFieldProps extends ComponentProps<typeof TextInput> {
	label: string;
	endIcon?: IconName;
}

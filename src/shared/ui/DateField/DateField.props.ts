import type { TextFieldProps } from "@/shared/ui";

export interface DateFieldProps {
	errorMessage: TextFieldProps["errorMessage"];
	value: TextFieldProps["value"];
	onChangeText: TextFieldProps["onChangeText"];
}

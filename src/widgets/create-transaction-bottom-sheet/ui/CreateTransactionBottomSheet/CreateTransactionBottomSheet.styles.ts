import { useThemeStyles } from "@/entities/themes/lib/hooks";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		layout: {},
		header: {},
		fields: {},
		category: {}
	}));

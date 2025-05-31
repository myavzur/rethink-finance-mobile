import type { Dictionary } from "@/shared/i18n/dictionary.type";

const messages: Dictionary = {
	dates: {
		today: "Today",
		yesterday: "Yesterday",
		tomorrow: "Tomorrow",
	},

	tabbar: {
		home: "History",
		categories: "Categories",
		analysis: "Analysis",
		profile: "Profile"
	},

	expenses: "Expenses",
	income: "Income"
} as const;

export default messages;

import type { IconName} from "@/shared/ui";

export const UI_ICONS = {
	tabbar_history: "home",
	tabbar_categories: "box",
	tabbar_big_circle_button: "plus-circle",
	tabbar_analysis: "eye",
	tabbar_settings: "settings",
	transaction_income: "trending-up",
	transaction_expense: "trending-down",
	transactions_by_voice: "volume-2",
	transactions_by_screenshot: "layout"
} as const satisfies Record<string, IconName>;
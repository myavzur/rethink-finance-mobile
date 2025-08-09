export type DictionaryKeys =
	| "dates_today"
	| "dates_yesterday"
	| "dates_tomorrow"
	| "tabbar_home"
	| "tabbar_categories"
	| "tabbar_analysis"
	| "tabbar_settings"
	| "income"
	| "income_many"
	| "add_income"
	| "add_transactions_by_voice"
	| "add_transactions_by_screenshot"
	| "expense"
	| "expense_many"
	| "add_expense"
	| "amount"
	| "comment";

export type Dictionary = Record<DictionaryKeys, string>;

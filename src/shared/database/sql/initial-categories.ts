import type { Category } from "../schema/categories.entity.types";

export const initialCategories: Omit<Category, "id">[] = [
	// Basic expenses
	{ name: "Жилье", icon_name: "home", highlight_color: "ROYAL_BLUE" },
	{
		name: "Коммунальные услуги",
		icon_name: "droplet",
		highlight_color: "AQUA_BLUE"
	},
	{ name: "Связь и интернет", icon_name: "wifi", highlight_color: "LAVENDER" },

	// Daily expenses
	{ name: "Одежда", icon_name: "shopping-bag", highlight_color: "HOT_PINK" },
	{ name: "Здоровье", icon_name: "heart", highlight_color: "RUBY_RED" },
	{ name: "Красота", icon_name: "smile", highlight_color: "BUBBLEGUM_PINK" },
	{ name: "Аптека", icon_name: "plus-circle", highlight_color: "FIRE_ENGINE_RED" },
	{ name: "Еда", icon_name: "shopping-cart", highlight_color: "EMERALD_GREEN" },
	{ name: "Транспорт", icon_name: "truck", highlight_color: "COBALT_BLUE" },
	{ name: "Такси", icon_name: "send", highlight_color: "SUNSET_ORANGE" },

	// Entertainment
	{
		name: "Кафе и рестораны",
		icon_name: "coffee",
		highlight_color: "SUNSET_ORANGE"
	},
	{ name: "Кино и театры", icon_name: "film", highlight_color: "AMETHYST" },
	{ name: "Хобби", icon_name: "music", highlight_color: "LAVENDER" },
	{ name: "Путешествия", icon_name: "globe", highlight_color: "EMERALD_GREEN" },
	{ name: "Книги", icon_name: "book", highlight_color: "COBALT_BLUE" },
	{ name: "Спорт", icon_name: "activity", highlight_color: "ELECTRIC_GREEN" },
	{ name: "Подписки", icon_name: "repeat", highlight_color: "LAVENDER" },

	// Finances
	{ name: "Сбережения", icon_name: "dollar-sign", highlight_color: "GOLDEN_YELLOW" },
	{
		name: "Инвестиции",
		icon_name: "trending-up",
		highlight_color: "ELECTRIC_GREEN"
	},
	{ name: "Страхование", icon_name: "shield", highlight_color: "SKY_BLUE" },
	{ name: "Кредиты", icon_name: "credit-card", highlight_color: "LILAC" },

	// Income
	{ name: "Зарплата", icon_name: "briefcase", highlight_color: "MINT_GREEN" },
	{ name: "Фриланс", icon_name: "edit", highlight_color: "LEMON_YELLOW" },
	{ name: "Подарки", icon_name: "gift", highlight_color: "NEON_PINK" },
	{ name: "Дивиденды", icon_name: "pie-chart", highlight_color: "GOLDEN_YELLOW" },

	// Other
	{ name: "Образование", icon_name: "book-open", highlight_color: "ROYAL_BLUE" },
	{ name: "Дети", icon_name: "users", highlight_color: "BUBBLEGUM_PINK" },
	{ name: "Питомцы", icon_name: "github", highlight_color: "SUNSET_ORANGE" },
	{ name: "Благотворительность", icon_name: "heart", highlight_color: "RUBY_RED" },
	{
		name: "Неожиданные расходы",
		icon_name: "alert-circle",
		highlight_color: "ASH_GRAY"
	},
	{ name: "Ремонт", icon_name: "tool", highlight_color: "COBALT_BLUE" },
	{ name: "Канцелярия", icon_name: "edit-2", highlight_color: "LAVENDER" }
];

export const HighlightColor = {
	ELECTRIC_GREEN: {
		primary: "#00C853", // Более мягкий, но контрастный зеленый
		dimmed: "#E8F5E9" // Светлый зеленоватый фон
	},
	EMERALD_GREEN: {
		primary: "#00897B", // Глубокий изумрудный
		dimmed: "#E0F2F1" // Светло-бирюзовый
	},
	MINT_GREEN: {
		primary: "#00BFA5", // Яркий, но не резкий мятный
		dimmed: "#E0F7FA" // Ледяной голубоватый
	},
	AQUA_BLUE: {
		primary: "#00B8D4", // Насыщенный аквамарин
		dimmed: "#E0F7FA" // Очень светлый голубой
	},
	SKY_BLUE: {
		primary: "#0091EA", // Чистый небесно-голубой
		dimmed: "#E1F5FE" // Пастельный голубой
	},
	ROYAL_BLUE: {
		primary: "#2962FF", // Яркий королевский синий
		dimmed: "#E3F2FD" // Светло-синий фон
	},
	COBALT_BLUE: {
		primary: "#304FFE", // Глубокий кобальт
		dimmed: "#E8EAF6" // Бледно-сиреневый
	},
	LAVENDER: {
		primary: "#9C27B0", // Насыщенный лавандовый
		dimmed: "#F3E5F5" // Светло-лиловый
	},
	LILAC: {
		primary: "#7B1FA2", // Приглушенный сиреневый
		dimmed: "#EDE7F6" // Бледно-фиолетовый
	},
	AMETHYST: {
		primary: "#673AB7", // Темный аметист
		dimmed: "#D1C4E9" // Светло-лавандовый
	},
	NEON_PINK: {
		primary: "#FF4081", // Яркий, но не кислотный розовый
		dimmed: "#FCE4EC" // Розоватый фон
	},
	HOT_PINK: {
		primary: "#D500F9", // Фуксия с синим подтоном
		dimmed: "#F3E5F5" // Светло-фиолетовый
	},
	BUBBLEGUM_PINK: {
		primary: "#E91E63", // Насыщенный розовый
		dimmed: "#F8BBD0" // Пастельно-розовый
	},
	SUNSET_ORANGE: {
		primary: "#FF6D00", // Теплый оранжевый
		dimmed: "#FFE0B2" // Светло-персиковый
	},
	GOLDEN_YELLOW: {
		primary: "#FFAB00", // Золотистый (хороший контраст)
		dimmed: "#FFF8E1" // Светло-желтый
	},
	LEMON_YELLOW: {
		primary: "#FFD600", // Яркий лимонный
		dimmed: "#FFFDE7" // Почти белый с желтым оттенком
	},
	RUBY_RED: {
		primary: "#D50000", // Глубокий красный (без "кричащего" #FF0000)
		dimmed: "#FFCDD2" // Бледно-красный
	},
	FIRE_ENGINE_RED: {
		primary: "#FF1744", // Яркий, но не режущий глаз
		dimmed: "#FFEBEE" // Светло-розовый
	},
	ASH_GRAY: {
		primary: "#616161", // Темно-серый (лучше читается)
		dimmed: "#F5F5F5" // Светло-серый
	}
} as const;

// Цвета для темной темы
export const HighlightColorDark = {
	ELECTRIC_GREEN: {
		primary: "#42F549",
		dimmed: "#E3FDF5"
	},
	EMERALD_GREEN: {
		primary: "#00BF8D",
		dimmed: "#D2FFF3"
	},
	MINT_GREEN: {
		primary: "#42F569",
		dimmed: "#E4FDE3"
	},
	AQUA_BLUE: {
		primary: "#42E0F5",
		dimmed: "#E3FDFB"
	},
	SKY_BLUE: {
		primary: "#42B5F5",
		dimmed: "#E3FAFD"
	},
	ROYAL_BLUE: {
		primary: "#4269F5",
		dimmed: "#E3EFFD"
	},
	COBALT_BLUE: {
		primary: "#4274F5",
		dimmed: "#E3EDFD"
	},
	LAVENDER: {
		primary: "#BC42F5",
		dimmed: "#F3E3FD"
	},
	LILAC: {
		primary: "#9142F5",
		dimmed: "#E5E3FD"
	},
	AMETHYST: {
		primary: "#7142F5",
		dimmed: "#E4E3FD"
	},
	NEON_PINK: {
		primary: "#F142F5",
		dimmed: "#FDE3F6"
	},
	HOT_PINK: {
		primary: "#F542D8",
		dimmed: "#FCE3FD"
	},
	BUBBLEGUM_PINK: {
		primary: "#F54298",
		dimmed: "#FDE3EE"
	},
	SUNSET_ORANGE: {
		primary: "#F58242",
		dimmed: "#FDEFE3"
	},
	GOLDEN_YELLOW: {
		primary: "#F5CE42",
		dimmed: "#FCFDE3"
	},
	LEMON_YELLOW: {
		primary: "#F5E342",
		dimmed: "#FDFAE3"
	},
	RUBY_RED: {
		primary: "#FF0000",
		dimmed: "#FFE4E4"
	},
	FIRE_ENGINE_RED: {
		primary: "#F54242",
		dimmed: "#FDE3E3"
	},
	ASH_GRAY: {
		primary: "#979797",
		dimmed: "#EBEBEB"
	}
} as const;

export type IHighlightColor = keyof typeof HighlightColor;

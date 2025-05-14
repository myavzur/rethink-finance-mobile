export const HighlightColor = {
  ELECTRIC_GREEN: {
    primary: "#42F549",
    dimmed: "#E3FDF5",
  },
  EMERALD_GREEN: {
    primary: "#00BF8D",
    dimmed: "#D2FFF3",
  },
  MINT_GREEN: {
    primary: "#42F569",
    dimmed: "#E4FDE3",
  },
  AQUA_BLUE: {
    primary: "#42E0F5",
    dimmed: "#E3FDFB",
  },
  SKY_BLUE: {
    primary: "#42B5F5",
    dimmed: "#E3FAFD",
  },
  ROYAL_BLUE: {
    primary: "#4269F5",
    dimmed: "#E3EFFD",
  },
  COBALT_BLUE: {
    primary: "#4274F5",
    dimmed: "#E3EDFD",
  },
  LAVENDER: {
    primary: "#BC42F5",
    dimmed: "#F3E3FD",
  },
  LILAC: {
    primary: "#9142F5",
    dimmed: "#E5E3FD",
  },
  AMETHYST: {
    primary: "#7142F5",
    dimmed: "#E4E3FD",
  },
  NEON_PINK: {
    primary: "#F142F5",
    dimmed: "#FDE3F6",
  },
  HOT_PINK: {
    primary: "#F542D8",
    dimmed: "#FCE3FD",
  },
  BUBBLEGUM_PINK: {
    primary: "#F54298",
    dimmed: "#FDE3EE",
  },
  SUNSET_ORANGE: {
    primary: "#F58242",
    dimmed: "#FDEFE3",
  },
  GOLDEN_YELLOW: {
    primary: "#F5CE42",
    dimmed: "#FCFDE3",
  },
  LEMON_YELLOW: {
    primary: "#F5E342",
    dimmed: "#FDFAE3",
  },
	RUBY_RED: {
    primary: "#FF0000",
    dimmed: "#FFE4E4",
  },
  FIRE_ENGINE_RED: {
    primary: "#F54242",
    dimmed: "#FDE3E3",
  },
  ASH_GRAY: {
    primary: "#979797",
    dimmed: "#EBEBEB",
  },
} as const;

export type IHighlightColor = keyof typeof HighlightColor;
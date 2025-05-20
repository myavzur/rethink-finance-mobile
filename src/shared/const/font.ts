export const FontWeight = {
	regular: "400",
	medium: "500",
	semiBold: "600",
	bold: "700"
} as const;

export const FontSize = {
	s11: 11,
	s12: 12,
	s14: 14,
	s16: 16
} as const;

export const Font = {
	size: FontSize,
	weight: FontWeight
};

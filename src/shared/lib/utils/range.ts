export const range = (start: number, stop: number, step = 1) => {
	return Array.from(
		{ length: Math.floor((stop - start) / step + 1) },
		(_, i) => start + i * step // Iterates each element in new-array
	);
};

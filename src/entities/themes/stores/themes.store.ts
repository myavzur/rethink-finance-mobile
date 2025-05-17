import { create } from "zustand";

import type { ThemeStore } from "./themes.types";

export const useThemeStore = create<ThemeStore>((set) => ({
	theme: "eclipse",
	setTheme: (theme) => set({ theme: theme })
}));

import { create } from "zustand";

import { Currency } from "../database/schema";
import { Locale, type PrefsStore } from "./prefs.types";

export const usePrefsStore = create<PrefsStore>((set) => ({
	preferredLocale: Locale.ENGLISH,
	preferredCurrency: Currency.RUB,
	setPreferredLocale: (preferredLocale) => set({ preferredLocale }),
	setPreferredCurrency: (preferredCurrency) => set({ preferredCurrency }),
}));

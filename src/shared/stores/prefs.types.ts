import type { ValueOf } from "@/shared/types/util.types";
import type { ICurrency } from "@/shared/database/schema";

export const Locale = {
	RUSSIAN: "ru-RU",
	ENGLISH: "en-US",
} as const;

export type ILocale = ValueOf<typeof Locale>;

export interface PrefsStore {
	preferredLocale: ILocale;
	preferredCurrency: ICurrency;

	setPreferredLocale: (preferredLocale: ILocale) => void;
	setPreferredCurrency: (preferredCurrency: ICurrency) => void;
}

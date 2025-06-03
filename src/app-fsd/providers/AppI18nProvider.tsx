import { type FC, type PropsWithChildren, useMemo } from "react";
import { IntlProvider } from "react-intl";

import { en } from "@/shared/i18n/en";
import { ru } from "@/shared/i18n/ru";
import { Locale, usePrefsStore } from "@/shared/stores";

export const AppI18nProvider: FC<PropsWithChildren> = ({ children }) => {
	const preferredLocale = usePrefsStore((state) => state.preferredLocale);

	const messages = useMemo(() => {
		if (preferredLocale === Locale.RUSSIAN) {
			return ru;
		}

		if (preferredLocale === Locale.ENGLISH) {
			return en;
		}

		return en;
	}, [preferredLocale]);

	return (
		<IntlProvider
			messages={messages}
			locale={preferredLocale}
		>
			{children}
		</IntlProvider>
	);
};

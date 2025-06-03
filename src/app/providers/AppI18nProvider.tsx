import { type FC, type PropsWithChildren, useMemo } from "react";
import { IntlProvider } from "react-intl";

import { en } from "@/shared/i18n/en";
import { ru } from "@/shared/i18n/ru";
import { Locale, usePrefsStore } from "@/shared/stores";
import type { Dictionary } from "@/shared/i18n/dictionary.type";

const castToIntlMessages = (dictionary: Dictionary): Record<string, string> => {
	return dictionary;
};

export const AppI18nProvider: FC<PropsWithChildren> = ({ children }) => {
	const locale = usePrefsStore((state) => state.preferredLocale);

	const messages = useMemo(() => {
		if (locale === Locale.RUSSIAN) {
			return castToIntlMessages(ru);
		}

		if (locale === Locale.ENGLISH) {
			return castToIntlMessages(en);
		}

		return castToIntlMessages(en);
	}, [locale]);

	return (
		<IntlProvider
			messages={messages}
			locale={locale}
		>
			{children}
		</IntlProvider>
	);
};

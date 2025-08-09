import { useCallback } from "react";
import { type MessageDescriptor, useIntl as useReactIntl } from "react-intl";

import type { DictionaryKeys } from "@/shared/i18n/dictionary.type";

interface FormatMessageDescriptor extends MessageDescriptor {
	id: DictionaryKeys;
}

/** Хук для интернализации приложения, основанный на useIntl из react-intl, но со строгими типами для ID. */
export const useIntl = () => {
	const intl = useReactIntl();

	/** Типизация ф-ции intl.formatMessage(), чтобы можно было передавать существующие в словаре id-шки. */
	const formatMessage = useCallback(
		(descriptor: FormatMessageDescriptor) => {
			return intl.formatMessage(descriptor);
		},
		[intl.formatMessage]
	);

	return {
		...intl,
		formatMessage
	};
};

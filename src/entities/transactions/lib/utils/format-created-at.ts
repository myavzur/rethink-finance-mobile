import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import type { IntlShape } from "react-intl";

import type { Transaction } from "@/shared/database/schema";
import "@/shared/i18n/dayjs-ru";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const formatCreatedAt = (
	createdAt: Transaction["created_at"],
	intl: IntlShape
) => {
	const date = dayjs(createdAt).locale(intl.locale);

	if (date.isToday()) {
		return intl.formatMessage({ id: "dates_today" });
	}

	if (date.isYesterday()) {
		return intl.formatMessage({ id: "dates_yesterday" });
	}

	return date.format("D MMM");
};

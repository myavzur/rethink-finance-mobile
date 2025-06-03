import dayjs from "dayjs";
import "dayjs/locale/ru";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

import type { Transaction } from "@/shared/database/schema";
import messages from "@/shared/i18n/en";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const formatCreatedAt = (
	createdAt: Transaction["created_at"],
	locale = "ru" as const
) => {
	const date = dayjs(createdAt).locale(locale);

	if (date.isToday()) {
		return messages.dates.today;
	}

	if (date.isYesterday()) {
		return messages.dates.yesterday;
	}

	return dayjs(createdAt).format("D MMM");
};

import type { Transaction } from "@/shared/database/schemas";
import dayjs from "dayjs";
import "dayjs/locale/ru";

import messages from "@/shared/i18n/en";

import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const formatCreatedAt = (createdAt: Transaction["created_at"], locale = "ru") => {
	const date = dayjs(createdAt).locale(locale);

	if (date.isToday()) {
		return messages.today;
	}

	if (date.isYesterday()) {
		return messages.yesterday;
	}

	return dayjs(createdAt).format("D MMM");
}
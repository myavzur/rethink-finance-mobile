import type { Transaction } from "@/shared/database/schemas";
import dayjs from "dayjs";

export const formatCreatedAt = (createdAt: Transaction["created_at"]) => {
	return dayjs(createdAt).format("YYYY-MM-DD");
}
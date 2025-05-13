import type { AmountValue, ICurrency } from "@/entities/amounts/types";
import type { ValueOf } from "@/shared/types/util.types";
import type { TransactionType } from "../const";
import type { Category } from "./category";

export type ITransactionType = ValueOf<typeof TransactionType>;

export interface Transaction {
	id: string;
	name: string;
	created_at: string;
	description?: string;
	type: ITransactionType,
	amount_value: AmountValue;
	amount_currency: ICurrency;
	category: Category;
}

interface Schedule {
	type: 'monthly' | 'weekly' | 'daily' | 'yearly';
	startDate: Date | string;
	endDate?: Date | string | null; // null если бессрочно
}

interface MonthlySchedule extends Schedule {
	type: "monthly";
	dayOfMonth?: number; // для monthly (например 15)
}

interface WeeklySchedule extends Schedule {
	type: "weekly";
	dayOfWeek?: number; // для weekly (0-6)
}

export interface ScheduledTransaction {
	transaction: Transaction;
	schedule: MonthlySchedule | WeeklySchedule | Schedule;
  isActive: boolean;
}

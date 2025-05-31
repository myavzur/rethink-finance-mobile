import { useForm } from "react-hook-form";
import { Alert } from "react-native";

import type { CreateTransactionForm } from "@/entities/transactions";

import { transactionRepository } from "@/shared/database/repositories";
import type { Transaction } from "@/shared/database/schema";

export const useTransactionForm = (type: Transaction["type"]) => {
	const {
		control,
		formState: { errors, isValid },
		handleSubmit
	} = useForm<CreateTransactionForm>({
		mode: "onBlur",
		defaultValues: {
			type,
			amount_value: 0,
			amount_currency: "RUB",
			category_id: undefined,
			comment: undefined
		}
	});

	const handleCreateTransaction = handleSubmit(async (transaction) => {
		if (!isValid) return;

		await transactionRepository.create({
			...transaction,
			type
		});
	});

	return {
		control,
		errors,
		handleCreateTransaction
	};
};

import { useForm } from "react-hook-form";

import type { CreateTransactionForm } from "@/entities/transactions";

import { transactionRepository } from "@/shared/database/repositories";
import { type Transaction, Currency } from "@/shared/database/schema";
import { useEffect } from "react";

export const useTransactionForm = (type: Transaction["type"], options: { afterSubmit: () => void }) => {
	const {
		control,
		formState: { errors, isValid },
		setValue,
		reset,
		handleSubmit
	} = useForm<CreateTransactionForm>({
		mode: "onBlur",
		defaultValues: {
			type,
			amount_value: 0,
			amount_currency: Currency.RUB,
			category_id: undefined,
			created_at: Date.now(),
			comment: undefined
		}
	});

	const clearForm = () => {
		reset();
		setValue("created_at", Date.now());
	}

	const handleCreateTransaction = handleSubmit(async (transaction) => {
		if (!isValid) return;

		await transactionRepository.create({
			...transaction,
			type
		});

		options.afterSubmit();
		clearForm();
	});

	// TODO: Wtf??
	useEffect(() => {
		clearForm();
	}, []);

	return {
		control,
		errors,
		handleCreateTransaction
	};
};

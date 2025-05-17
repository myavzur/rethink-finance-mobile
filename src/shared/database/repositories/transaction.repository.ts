import { asc, eq, sql } from "drizzle-orm";

import { type Transaction, transactions } from "../schemas";
import { databaseRepository } from "./database.repository";

class TransactionRepository {
	getAll = () => {
		const order = asc(transactions.created_at);

		return databaseRepository.db.query.transactions.findMany({
			with: {
				category: true
			},
			orderBy: order
		});
	};

	getById = (id: Transaction["id"]) => {
		const condition = eq(transactions.id, id);

		return databaseRepository.db.query.transactions.findFirst({
			with: {
				category: true
			},
			where: condition
		});
	};

	getBetweenDates = (
		startDate: Transaction["created_at"],
		endDate: Transaction["created_at"]
	) => {
		const condition = sql`${transactions.created_at} BETWEEN ${startDate} AND ${endDate}`;

		return databaseRepository.db.query.transactions.findMany({
			with: {
				category: true
			},
			where: condition
		});
	};

	create = async (transaction: Partial<Transaction>) => {
		try {
			return await databaseRepository.db.insert(transactions).values({
				...(transaction as Transaction)
			});
		} catch (e) {
			console.log(e);
		}
	};

	delete = async (id: Transaction["id"]) => {
		const condition = eq(transactions.id, id);

		return await databaseRepository.db.delete(transactions).where(condition);
	};
}

export const transactionRepository = new TransactionRepository();

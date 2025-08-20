import { desc, eq, sql } from "drizzle-orm";

import { type Transaction, transactions } from "../schema";
import { databaseRepository } from "./database.repository";

class TransactionRepository {
	DEFAULT_ORDER_BY = desc(transactions.created_at);

	getAll = () => {
		return databaseRepository.db.query.transactions.findMany({
			with: {
				category: true
			},
			orderBy: this.DEFAULT_ORDER_BY
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
		const condition = sql`${transactions.created_at}
		BETWEEN
		${startDate}
		AND
		${endDate}
		`;

		return databaseRepository.db.query.transactions.findMany({
			with: {
				category: true
			},
			where: condition,
			orderBy: this.DEFAULT_ORDER_BY
		});
	};

	create = async (transaction: typeof transactions.$inferInsert) => {
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

import { desc, eq } from "drizzle-orm";
import { transactions, type Transaction } from "../schemas";
import { databaseRepository } from "./database.repository";

class TransactionRepository {
  getAll = async () => {
    return await databaseRepository.db.query.transactions.findMany({
			with: {
				categories: true
			},
			orderBy: [desc(transactions.created_at)]
		});
  };

	getById = async (id: Transaction["id"]) => {
		const condition = eq(transactions.id, id);

		return await databaseRepository.db.query.transactions.findFirst({
			with: {
				categories: true
			},
			where: condition,
		});
	};

	create = async (transaction: Transaction) => {
		return await databaseRepository.db.insert(transactions).values(transaction);
	}

  delete = async (id: Transaction["id"]) => {
    const condition = eq(transactions.id, id);

    return await databaseRepository.db.delete(transactions).where(condition);
  };
}

export const transactionRepository = new TransactionRepository();

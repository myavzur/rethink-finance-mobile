
import { TransactionList } from "@/features/transactions/ui";

import { MainLayout } from "@/shared/ui";

export default function Tab() {
	return (
		<MainLayout>
			<TransactionList />
		</MainLayout>
	);
}

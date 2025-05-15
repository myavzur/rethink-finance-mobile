import { useRouter } from "expo-router";

import { TransactionList } from "@/features/transactions/ui";

import { MainLayout } from "@/shared/ui";
import { Button } from "@/shared/ui/Button/Button";

export default function Tab() {
	const router = useRouter();

	return (
		<MainLayout>
			<Button
				kind="fill"
				onPress={() => router.push("/admin")}
			>
				Admin Panel
			</Button>

			<TransactionList />
		</MainLayout>
	);
}

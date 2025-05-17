import { Button, MainLayout } from "@/shared/ui";
import { useRouter } from "expo-router";

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
		</MainLayout>
	);
}

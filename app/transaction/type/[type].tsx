import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { ScrollView, Text, View } from "react-native";

import { TransactionKeyboard } from "@/widgets/transaction-keyboard/ui";

import { type ITransactionType, TransactionType } from "@/shared/database/schema";
import { MainLayout, TextField } from "@/shared/ui";

import { useStyles } from "./type.styles";

export default function Route() {
	const intl = useIntl();
	const styles = useStyles();
	const params = useLocalSearchParams<{ type: ITransactionType }>();

	const pageTitle = useMemo(() => {
		if (params.type === TransactionType.INCOME) return "Новый доход";
		return "Новый расход";
	}, [params.type]);

	const handleCreateTransaction = () => {
		console.log("Done!");
	};

	return (
		<MainLayout>
			<ScrollView>
				<Text style={styles.header}>{pageTitle}</Text>
				<View style={styles.fields}>
					<TextField label={"Комментарий"} />
				</View>
			</ScrollView>

			<View style={styles.keyboard}>
				<TransactionKeyboard onDone={handleCreateTransaction} />
			</View>
		</MainLayout>
	);
}

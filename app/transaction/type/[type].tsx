import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { ScrollView, Text, View } from "react-native";

import { TransactionKeyboard } from "@/widgets/transaction-keyboard/ui";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Font, Gaps } from "@/shared/const";
import { type ITransactionType, TransactionType } from "@/shared/database/schema";
import { MainLayout, TextField } from "@/shared/ui";

export const useStyles = () =>
	useThemeStyles(() => ({
		header: {
			fontSize: Font.size.s16,
			fontWeight: Font.weight.semiBold
		},
		fields: {
			flexDirection: "column",
			gap: 12
		},
		keyboard: {
			paddingBottom: Gaps.mainLayoutVertical
		}
	}));

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

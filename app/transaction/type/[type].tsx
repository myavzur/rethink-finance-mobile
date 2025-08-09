import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";

import { TransactionKeyboard } from "@/widgets/transaction-keyboard/ui";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";
import { type ITransactionType, TransactionType } from "@/shared/database/schema";
import { MainLayout, PageHeader, TextField } from "@/shared/ui";
import { useIntl } from "@/shared/lib/hooks";

export const useStyles = () =>
	useThemeStyles(() => ({
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
		if (params.type === TransactionType.INCOME) return intl.formatMessage({ id: "income" });
		return intl.formatMessage({ id: "expense" });
	}, [params.type, intl]);

	const handleCreateTransaction = (amount: number) => {
		console.log(amount);
	};

	return (
		<MainLayout withPaddingBottomForTabbar={false}>
			<ScrollView>
				<PageHeader title={pageTitle} />

				<View style={styles.fields}>
					<TextField label={intl.formatMessage({ id: "comment" })} />
				</View>
			</ScrollView>

			<View style={styles.keyboard}>
				<TransactionKeyboard onDone={handleCreateTransaction} />
			</View>
		</MainLayout>
	);
}

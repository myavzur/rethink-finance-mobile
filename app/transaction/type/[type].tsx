import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";

import { TransactionKeyboard } from "@/widgets/transaction-keyboard/ui";

import { CategoryList } from "@/entities/categories";
import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";
import { transactionRepository } from "@/shared/database/repositories";
import {
	type Category,
	Currency,
	type ITransactionType,
	TransactionType
} from "@/shared/database/schema";
import { useIntl } from "@/shared/lib/hooks";
import { MainLayout, PageHeader } from "@/shared/ui";

export const useStyles = (keyboardHeight: number) => {
	const OFFSET_HEIGHT = 80;

	return useThemeStyles((theme) => ({
		content: {
			paddingBottom: keyboardHeight + OFFSET_HEIGHT
		},
		fields: {
			flexDirection: "column",
			gap: 12
		},
		keyboard: {
			// backgroundColor: theme.colors.background,
			position: "absolute",
			width: "100%",
			left: Gaps.mainLayoutHorizontal,
			right: Gaps.mainLayoutHorizontal,
			bottom: Gaps.mainLayoutVertical,
			paddingBottom: Gaps.mainLayoutVertical
		},
		keyboard_visible: {
			display: "flex"
		}
	}));
};

export default function Route() {
	const router = useRouter();
	const params = useLocalSearchParams<{ type: ITransactionType }>();
	const intl = useIntl();
	const styles = useStyles(200);

	const pageTitle = useMemo(() => {
		if (params.type === TransactionType.INCOME)
			return intl.formatMessage({ id: "income" });
		return intl.formatMessage({ id: "expense" });
	}, [params.type, intl]);

	const [selectedCategoryId, setSelectedCategoryId] = useState<Category["id"]>(1);
	const hasSelectedCategoryId = typeof selectedCategoryId === "number";

	const [isAlreadyCreating, setIsAlreadyCreating] = useState(false);

	const handleSelectCategory = useCallback(
		(category: Category) => {
			setSelectedCategoryId(category.id);
		},
		[setSelectedCategoryId]
	);

	const handleCreateTransaction = async (amount: number) => {
		if (isAlreadyCreating) return;

		setIsAlreadyCreating(true);

		await transactionRepository.create({
			amount_value: amount,
			amount_currency: Currency.RUB,
			type: params.type,
			category_id: 1
		});

		setIsAlreadyCreating(false);
		router.push("/");
	};

	return (
		<MainLayout withPaddingBottomForTabbar={false}>
			<View style={styles.content}>
				<PageHeader title={isAlreadyCreating ? "Создаем..." : pageTitle} />

				<View>
					<CategoryList
						withHeader={false}
						onSelectCategory={handleSelectCategory}
					/>
				</View>
			</View>

			<View
				style={[styles.keyboard, hasSelectedCategoryId && styles.keyboard_visible]}
			>
				<TransactionKeyboard onDone={handleCreateTransaction} />
			</View>
		</MainLayout>
	);
}

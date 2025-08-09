import { type BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { useIntl } from "@/shared/lib/hooks";
import { Text, TouchableOpacity, View } from "react-native";

import { useTransactionForm } from "@/widgets/create-transaction-bottom-sheet/lib/hooks";

import { AmountField } from "@/features/amount-field";

import { CategoryList, LatestCategories } from "@/entities/categories";
import { formatCreatedAt } from "@/entities/transactions";

import { PortalHostName } from "@/shared/const";
import { TransactionType } from "@/shared/database/schema";
import {
	Accordion,
	Button,
	Icon,
	StyledBottomSheetModal,
	TextField
} from "@/shared/ui";

import type { CreateTransactionBottomSheetProps } from "./CreateTransactionBottomSheet.props.";
import { useStyles } from "./CreateTransactionBottomSheet.styles";
import { MathKeyboard } from "@/features/math-keyboard/ui";

export const CreateTransactionBottomSheet = forwardRef<
	BottomSheetModal,
	CreateTransactionBottomSheetProps
>((props, ref) => {
	const intl = useIntl();

	const { type } = props;
	const { dismiss } = useBottomSheetModal();

	const styles = useStyles();

	const { control, handleCreateTransaction } = useTransactionForm(type, {
		afterSubmit: dismiss
	});

	const typeMessageId = type === TransactionType.INCOME ? "income" : "expenses";
	const typeMessage = intl.formatMessage({ id: typeMessageId });

	return (
		<StyledBottomSheetModal
			ref={ref}
			snapPoint="100%"
			portalHostName={PortalHostName.CREATE_NEW_TRANSACTION_BOTTOM_SHEET}
		>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.back}
					onPress={() => dismiss()}
				>
					<Icon
						name="arrow-left"
						size={25}
					/>
				</TouchableOpacity>

				<Text style={styles.title}>Новые {typeMessage}</Text>
			</View>

			<View style={styles.section}>
				<View style={styles.sectionFields}>
					<Controller
						render={({ field, fieldState }) => (
							<AmountField
								autoFocus={true}
								errorMessage={fieldState.error?.message}
								onBlur={field.onBlur}
								onChangeText={field.onChange}
								value={field.value.toString()}
							/>
						)}
						rules={{
							required: "Сумма является обязательной",
							min: {
								value: 0,
								message: "Сумма не может быть меньше 0"
							}
						}}
						name="amount_value"
						control={control}
					/>

					<Controller
						render={({ field, fieldState }) => (
							<TextField
								label="Дата"
								errorMessage={fieldState.error?.message}
								onBlur={field.onBlur}
								onChangeText={(text) => {
									field.onChange(Date.now());
								}}
								value={formatCreatedAt(field.value, intl)}
							/>
						)}
						name="created_at"
						control={control}
					/>

					<Controller
						render={({ field, fieldState }) => (
							<TextField
								label="Комментарий"
								errorMessage={fieldState.error?.message}
								onBlur={field.onBlur}
								onChangeText={field.onChange}
								value={field.value!}
							/>
						)}
						name="comment"
						control={control}
					/>
				</View>
			</View>

			<View style={styles.section}>
				<Accordion title="Последние категории">
					<Controller
						render={({ field }) => (
							<LatestCategories
								selectedCategoryId={field.value}
								onSelectCategory={(category) => field.onChange(category.id)}
							/>
						)}
						name="category_id"
						control={control}
					/>
				</Accordion>

				<Accordion title="Список всех категорий" preventBorderTop={true}>
					<CategoryList withHeader={false} onSelectCategory={console.log} />
					<Text>Red</Text>
				</Accordion>
			</View>

			{/*<View style={styles.submitButtons}>*/}
			{/*	<MathKeyboard />*/}
			{/*</View>*/}
		</StyledBottomSheetModal>
	);
});

CreateTransactionBottomSheet.displayName = "CreateTransactionBottomSheet";

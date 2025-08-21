import React, { type FC, memo, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { Icon } from "@/shared/ui";

import {
	type IMathAction,
	MathAction,
	addAction,
	backspaceAction,
	clearAction,
	decimalAction,
	digitAction,
	divideAction,
	doneAction,
	multiplyAction,
	subAction
} from "../../lib/utils";
import { MathExpressionService } from "../../services";
import { KeyboardButton } from "../KeyboardButton";
import type { CalcKeyboardProps } from "./CalcKeyboard.props";
import { useStyles } from "./CalcKeyboard.styles";

const mathExpressionService = new MathExpressionService();

const CalcKeyboardComponent: FC<CalcKeyboardProps> = ({
	onExpressionChange,
	isLoading,
	onDone
}) => {
	const styles = useStyles();
	const expressionRef = useRef<string>("");

	const handleAction = (action: IMathAction) => {
		const prevExpression = expressionRef.current;

		switch (action.type) {
			case MathAction.DIGIT: {
				expressionRef.current = mathExpressionService.tryInsertDigit(
					prevExpression,
					action.payload.digit
				);
				break;
			}
			case MathAction.BACKSPACE: {
				expressionRef.current = mathExpressionService.deleteLastChar(prevExpression);
				break;
			}
			case MathAction.DECIMAL: {
				expressionRef.current = mathExpressionService.tryInsertSeparator(
					prevExpression,
					action.payload.separator
				);
				break;
			}
			case MathAction.CLEAR: {
				expressionRef.current = "";
				break;
			}
			case MathAction.DONE: {
				if (prevExpression.trim() === "") return prevExpression;

				const answer = mathExpressionService.evaluate(prevExpression);

				onDone(answer);
				expressionRef.current = String(answer);

				break;
			}
			default: {
				expressionRef.current = mathExpressionService.tryInsertOrReplaceOperator(
					prevExpression,
					action.payload.operator
				);
			}
		}

		onExpressionChange(expressionRef.current);
	};

	return (
		<View style={styles.keyboard}>
			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => handleAction(clearAction())}
					kind={"secondary"}
				>
					C
				</KeyboardButton>

				{[7, 4, 1].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => handleAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}

				{/*<KeyboardButton onPress={() => handleAction(percentAction())}>*/}
				{/*	<Icon name="percent" />*/}
				{/*</KeyboardButton>*/}
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => handleAction(divideAction())}
					kind={"secondary"}
				>
					<Icon name="divide" />
				</KeyboardButton>

				{[8, 5, 2, 0].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => handleAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => handleAction(multiplyAction())}
					kind={"secondary"}
				>
					<Icon name="x" />
				</KeyboardButton>

				{[9, 6, 3].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => handleAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}

				<KeyboardButton onPress={() => handleAction(decimalAction())}>
					,
				</KeyboardButton>
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => handleAction(backspaceAction())}
					onLongPress={() => handleAction(clearAction())}
					kind={"secondary"}
				>
					<Icon name="chevrons-left" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => handleAction(subAction())}
					kind={"secondary"}
				>
					<Icon name="minus" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => handleAction(addAction())}
					kind={"secondary"}
				>
					<Icon name="plus" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => handleAction(doneAction())}
					kind={"primary"}
					takes={2}
				>
					{isLoading ? <ActivityIndicator size="small" /> : <Icon name="check" />}
				</KeyboardButton>
			</View>
		</View>
	);
};

export const CalcKeyboard = memo(CalcKeyboardComponent);

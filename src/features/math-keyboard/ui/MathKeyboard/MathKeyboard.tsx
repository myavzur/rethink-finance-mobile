import type { FC } from "react";
import { View } from "react-native";

import { Icon } from "@/shared/ui";

import {
	addAction,
	backspaceAction,
	clearAction,
	decimalAction,
	digitAction,
	divideAction,
	doneAction,
	multiplyAction,
	percentAction,
	subAction
} from "../../lib/utils";
import { KeyboardButton } from "../KeyboardButton";
import type { MathKeyboardProps } from "./MathKeyboard.props";
import { useStyles } from "./MathKeyboard.styles";

const DECIMAL_SEPARATOR = ",";

export const MathKeyboard: FC<MathKeyboardProps> = ({ onAction }) => {
	const styles = useStyles();

	return (
		<View style={styles.keyboard}>
			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => onAction(clearAction())}
					kind={"secondary"}
				>
					C
				</KeyboardButton>

				{[7, 4, 1].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => onAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}

				<KeyboardButton onPress={() => onAction(percentAction())}>
					<Icon name="percent" />
				</KeyboardButton>
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => onAction(divideAction())}
					kind={"secondary"}
				>
					<Icon name="divide" />
				</KeyboardButton>

				{[8, 5, 2, 0].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => onAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => onAction(multiplyAction())}
					kind={"secondary"}
				>
					<Icon name="x" />
				</KeyboardButton>

				{[9, 6, 3].map((digit) => (
					<KeyboardButton
						key={digit}
						onPress={() => onAction(digitAction(digit))}
					>
						{digit}
					</KeyboardButton>
				))}

				<KeyboardButton onPress={() => onAction(decimalAction(DECIMAL_SEPARATOR))}>
					{DECIMAL_SEPARATOR}
				</KeyboardButton>
			</View>

			<View style={styles.keyboard__column}>
				<KeyboardButton
					onPress={() => onAction(backspaceAction())}
					onLongPress={() => onAction(clearAction())}
					kind={"secondary"}
				>
					<Icon name="chevrons-left" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => onAction(subAction())}
					kind={"secondary"}
				>
					<Icon name="minus" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => onAction(addAction())}
					kind={"secondary"}
				>
					<Icon name="plus" />
				</KeyboardButton>

				<KeyboardButton
					onPress={() => onAction(doneAction())}
					kind={"primary"}
					takes={2}
				>
					<Icon name="check" />
				</KeyboardButton>
			</View>
		</View>
	);
};

import { type FC } from "react";
import { Pressable, Text, View } from "react-native";

import { useToggle } from "@/shared/lib/hooks";

import { Icon } from "../Icon";
import type { AccordionProps } from "./Accordion.props";
import { styles } from "./Accordion.styles";

export const Accordion: FC<AccordionProps> = ({
	title,
	children,
	initialOpen = true
}) => {
	const [isOpen, toggleOpen] = useToggle(initialOpen);
	const iconName = isOpen ? "chevron-down" : "chevron-left";

	return (
		<View style={styles.accordion}>
			<Pressable
				style={styles.header}
				onPress={toggleOpen}
			>
				<Text style={styles.title}>{title}</Text>
				<Icon
					name={iconName}
					size={22}
				/>
			</Pressable>

			{isOpen && <View style={styles.content}>{children}</View>}
		</View>
	);
};

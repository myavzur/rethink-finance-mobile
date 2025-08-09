import { type FC } from "react";
import { Pressable, Text, View } from "react-native";

import { useToggle } from "@/shared/lib/hooks";

import { Icon } from "../Icon";
import type { AccordionProps } from "./Accordion.props";
import { useStyles } from "./Accordion.styles";

export const Accordion: FC<AccordionProps> = ({
	title,
	children,
	initialOpen = true,
	preventBorderTop
}) => {
	const styles = useStyles();

	const [isOpen, toggleOpen] = useToggle(initialOpen);
	const iconName = isOpen ? "chevron-down" : "chevron-left";

	return (
		<View style={styles.accordion}>
			<Pressable onPress={toggleOpen}>
				{!preventBorderTop && <View style={styles.header__line} />}

				<View style={styles.header__content}>
					<Text style={styles.title}>{title}</Text>

					<Icon
						name={iconName}
						size={22}
					/>
				</View>

				<View style={styles.header__line} />
			</Pressable>

			{isOpen && <View style={styles.content}>{children}</View>}
		</View>
	);
};

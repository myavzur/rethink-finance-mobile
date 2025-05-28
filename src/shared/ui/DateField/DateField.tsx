import { type FC, useState } from "react";
import DateTimePicker, {
	type DateType,
	useDefaultStyles
} from "react-native-ui-datepicker";

import type { DateFieldProps } from "./DateField.props";

export const DateField: FC<DateFieldProps> = ({}) => {
	const defaultStyles = useDefaultStyles();
	const [selected, setSelected] = useState<DateType>();

	return (
		<DateTimePicker
			mode="single"
			date={selected}
			onChange={({ date }) => setSelected(date)}
			styles={defaultStyles}
		/>
	);
};

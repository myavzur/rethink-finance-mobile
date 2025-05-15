import { useCallback, useState } from "react";

type UseToggle = (initialValue: boolean) => [boolean, () => void];

export const useToggle: UseToggle = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const toggleValue = useCallback(() => {
		setValue((prevValue) => !prevValue);
	}, []);

	return [value, toggleValue];
};

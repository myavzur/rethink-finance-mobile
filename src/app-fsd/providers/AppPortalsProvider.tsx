import { PortalHost, PortalProvider } from "@gorhom/portal";
import React, { type FC, type PropsWithChildren } from "react";

import { PortalHostName } from "@/shared/const";

export const AppPortalsProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<PortalProvider>
			<PortalHost name={PortalHostName.CREATE_NEW_TRANSACTION_BOTTOM_SHEET} />
			<PortalHost name={PortalHostName.FAST_ACTIONS_BOTTOM_SHEET} />

			{children}
		</PortalProvider>
	);
};

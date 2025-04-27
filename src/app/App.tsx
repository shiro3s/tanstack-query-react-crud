import { QueryClientProvider } from "@tanstack/react-query";

import { RouterProvider } from "react-router-dom";
import { routes, queryClient } from "./routes";

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
		</QueryClientProvider>
	);
};

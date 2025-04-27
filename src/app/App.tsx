import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { store } from "@/store";
import { RouterProvider } from "react-router-dom";
import { routes, queryClient } from "./routes";

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</QueryClientProvider>
	);
};

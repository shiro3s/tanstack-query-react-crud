import { styled } from "@kuma-ui/core";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { store } from "@/store";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";


const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</QueryClientProvider>
	);
};

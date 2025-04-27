import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { MemoLists } from "@/pages/memos/lists";
import { CreateMemo } from "@/pages/memos/new";
import { EditMemo } from "@/pages/memos/edit";
import { NotFound } from "@/pages/not-found";
import { Layout } from "@/components/layouts";

import { listsLoader } from "@/pages/memos/lists/loader";

export const queryClient = new QueryClient();

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <MemoLists />, loader: listsLoader(queryClient) },
			{ path: "new", element: <CreateMemo /> },
			{ path: "edit/:id", element: <EditMemo /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

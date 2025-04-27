import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { MemoLists } from "@/pages/memos/lists";
import { CreateMemo } from "@/pages/memos/new";
import { EditMemo } from "@/pages/memos/edit";
import { NotFound } from "@/pages/not-found";
import { Layout } from "@/components/layouts";

import { listsLoader } from "@/pages/memos/lists/loader";
import { editLoader } from "@/pages/memos/edit/loader";

export const queryClient = new QueryClient();

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <MemoLists />, loader: listsLoader(queryClient) },
			{ path: "new", element: <CreateMemo /> },
			{ path: "edit/:id", element: <EditMemo />, loader: editLoader(queryClient) },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

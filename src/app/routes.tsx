import { createBrowserRouter } from "react-router-dom";
import { MemoLists } from "@/pages/memos/lists";
import { CreateMemo } from "@/pages/memos/new";
import { EditMemo } from "@/pages/memos/edit";
import { NotFound } from "@/pages/not-found";
import { Layout } from "@/components/layouts";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <MemoLists /> },
			{ path: "new", element: <CreateMemo /> },
			{ path: "edit/:id", element: <EditMemo /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

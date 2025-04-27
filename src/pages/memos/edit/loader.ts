import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";

import client from "@/utils/axios"

export const editLoader =
	(queryClient: QueryClient) =>
	async ({ params }: LoaderFunctionArgs) => {
		return await queryClient.fetchQuery({
			queryKey: ["lists"],
			queryFn: async () => {
				try {
					const id: string = params.id || ""
					const memo = await client.memos.getOne(id)

					return { memo };
				} catch {
					return { memo: undefined };
				}
			},
		});
	};

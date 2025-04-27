import type { QueryClient } from "@tanstack/react-query";
import client from "@/utils/axios";

export const listsLoader = (queryClient: QueryClient) => async () => {
	return await queryClient.fetchQuery({
		queryKey: ["lists"],
		queryFn: async () => {
			try {
				const memos = await client.memos.getLists();
				return { memos };
			} catch {
				return { memos: [] };
			}
		},
	});
};

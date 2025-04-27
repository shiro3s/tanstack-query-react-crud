import type { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const listsLoader = (queryClient: QueryClient) => async () => {
	return await queryClient.fetchQuery({
		queryKey: ["lists"],
		queryFn: async () => {
			const { data } = await axios.get<Memo[]>("http://localhost:3000/memos");
      
			return { memos: data };
		},
	});
};

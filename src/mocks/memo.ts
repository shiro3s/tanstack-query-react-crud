import { http, HttpResponse } from "msw";

const memoryMemos: Memo[] = [];

export const handlers = [
	http.get("/memos", () => {
		return HttpResponse.json({ memos: memoryMemos });
	}),
];

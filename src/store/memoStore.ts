import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

type State = {
	memos: Memo[];
};

const initialState: State = {
	memos: [],
};

const ACTIONS = {
	CREATE: "memo/create",
	UPDATE: "memo/update",
	DELETE: "memo/delete",
};

export const createMemo = createAction(
	ACTIONS.CREATE,
	(memo: Omit<Memo, "id">) => {
		return {
			payload: {
				id: nanoid(),
				title: memo.title,
				content: memo.content,
			},
		};
	},
);

export const updateMemo = createAction(ACTIONS.UPDATE, (payload: Memo) => {
	return {
		payload,
	};
});

export const deleteMemo = createAction(ACTIONS.DELETE, (payload: string) => {
	return {
		payload,
	};
});

export const memoStore = createSlice({
	name: "memo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createMemo, (state, { payload }) => {
			state.memos.push(payload);
		});

		builder.addCase(updateMemo, (state, { payload }) => {
			const index = state.memos.findIndex((memo) => memo.id === payload.id);
			if (index > -1) {
				state.memos[index].title = payload.title;
				state.memos[index].content = payload.content;
			}
		});

		builder.addCase(deleteMemo, (state, { payload }) => {
			const newMemos = state.memos.filter((memo) => memo.id !== payload);
			state.memos = newMemos;
		});
	},
});

export default memoStore.reducer;

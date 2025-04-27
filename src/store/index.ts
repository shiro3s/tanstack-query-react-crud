import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./memoStore";

export const store = configureStore({
	reducer: {
		memo: memoReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

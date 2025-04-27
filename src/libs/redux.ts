import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
	useStore,
} from "react-redux";

import type { AppDispatch, AppStore, RootState } from "@/store";

// NOTE: https://redux.js.org/usage/usage-with-typescript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

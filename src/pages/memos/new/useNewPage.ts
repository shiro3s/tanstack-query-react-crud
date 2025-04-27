import { useNavigate } from "react-router-dom";

import type { FormState } from "@/components/feature/memo-form/useMemoForm";
import { useAppDispatch } from "@/libs/redux";
import { createMemo } from "@/store/memoStore";

export const useNewPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = (memo: FormState) => {
		dispatch(createMemo(memo));
		navigate("/");
	};

	return {
		handleSubmit,
	};
};

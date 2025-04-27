import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { FormState } from "@/components/feature/memo-form/useMemoForm";
import { useAppDispatch, useAppSelector } from "@/libs/redux";
import { deleteMemo, updateMemo } from "@/store/memoStore";

export const useEditPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const memos = useAppSelector((state) => state.memo.memos);

	const params = useParams();
	const memo = useMemo(
		() => memos.find((memo) => memo.id === params.id),
		[memos, params.id],
	);

	const handleSubmit = (values: FormState) => {
		if (!memo?.id) return;

		dispatch(updateMemo({ ...values, id: memo.id }));
		navigate("/");
	};

	const handleDelete = () => {
		if (!memo?.id) return;

		dispatch(deleteMemo(memo.id));
		navigate("/");
	};

	return { memo, handleSubmit, handleDelete };
};

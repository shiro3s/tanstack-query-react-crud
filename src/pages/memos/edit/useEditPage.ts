import { useNavigate, useLoaderData } from "react-router-dom";

import type { FormState } from "@/components/feature/memo-form/useMemoForm";
import { useAppDispatch } from "@/libs/redux";
import { deleteMemo, updateMemo } from "@/store/memoStore";
import type { editLoader } from "./loader";

export const useEditPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { memo } = useLoaderData() as Awaited<
		ReturnType<ReturnType<typeof editLoader>>
	>;

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

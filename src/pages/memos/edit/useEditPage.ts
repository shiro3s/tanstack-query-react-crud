import { useNavigate, useLoaderData } from "react-router-dom";

import type { FormState } from "@/components/feature/memo-form/useMemoForm";
import type { editLoader } from "./loader";
import client from "@/utils/axios";

export const useEditPage = () => {
	const navigate = useNavigate();

	const { memo } = useLoaderData() as Awaited<
		ReturnType<ReturnType<typeof editLoader>>
	>;

	const handleSubmit = async (values: FormState) => {
		if (!memo?.id) return;

		await client.memos.update(memo.id, values)
		navigate("/");
	};

	const handleDelete = async () => {
		if (!memo?.id) return;

		await client.memos.remove(memo.id)
		navigate("/");
	};

	return { memo, handleSubmit, handleDelete };
};

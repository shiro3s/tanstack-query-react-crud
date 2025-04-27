import { useNavigate } from "react-router-dom";

import type { FormState } from "@/components/feature/memo-form/useMemoForm";
import client from "@/utils/axios";
import { nanoid } from "nanoid";

export const useNewPage = () => {
	const navigate = useNavigate();

	const handleSubmit = async (memo: FormState) => {
		await client.memos.create({ ...memo, id: nanoid() });
		navigate("/");
	};

	return {
		handleSubmit,
	};
};

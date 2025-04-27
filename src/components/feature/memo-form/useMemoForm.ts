import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { nonEmpty, object, optional, pipe, string } from "valibot";

export type FormState = Omit<Memo, "id">;

const schema = object({
	title: pipe(string(), nonEmpty("Title is required")),
	content: optional(string()),
});

export const useMemoForm = (defaultValues?: FormState) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormState>({
		resolver: valibotResolver(schema),
		defaultValues,
	});

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
	};
};

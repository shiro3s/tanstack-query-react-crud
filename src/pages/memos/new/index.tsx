import { MemoForm } from "@/components/feature/memo-form";
import { useNewPage } from "./useNewPage";

export const CreateMemo = () => {
	const { handleSubmit } = useNewPage();

	return (
		<MemoForm
			title="Create a new memo"
			submitText="Create memo"
			submit={handleSubmit}
		/>
	);
};

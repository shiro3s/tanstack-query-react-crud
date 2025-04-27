import { styled } from "@kuma-ui/core";

import { MemoForm } from "@/components/feature/memo-form";
import { useEditPage } from "./useEditPage";

export const EditMemo = () => {
	const { memo, handleSubmit, handleDelete } = useEditPage();

	if (!memo) {
		return (
			<Empty>
				<EmptyText>Not Found</EmptyText>
			</Empty>
		);
	}

	return (
		<MemoForm
			title="Edit memo"
			submitText="Save changed"
			defaultValues={memo}
			submit={handleSubmit}
			remove={handleDelete}
		/>
	);
};

const Empty = styled.div`
	margin-top: 10rem
`;

const EmptyText = styled.h2`
	font-size: 24px;
	margin: 0;
	color: #606266;
`;

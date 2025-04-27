import { InputText } from "@/components/common/input-text";
import { Textarea } from "@/components/common/textarea";
import { styled } from "@kuma-ui/core";

import { Btn } from "@/components/common/btn";
import { type FormState, useMemoForm } from "./useMemoForm";

type Props = {
	title: string;
	submitText: string;
	defaultValues?: FormState;
	submit: (memo: FormState) => void;
	remove?: () => void;
};

export const MemoForm: React.FC<Props> = ({
	title,
	submitText,
	defaultValues,
	submit,
	remove,
}) => {
	const { register, handleSubmit, isSubmitting, errors } =
		useMemoForm(defaultValues);

	return (
		<Container onSubmit={handleSubmit(submit)}>
			<Title>{title}</Title>

			<Field>
				<InputText placeholder="Title" register={register("title")} />
				{!!errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
			</Field>

			<Field>
				<Textarea placeholder="Content" register={register("content")} />
			</Field>

			<Action>
				<BtnGroup>
					{!!remove && (
						<Btn
							type="button"
							disabled={isSubmitting}
							theme="danger"
							onClick={remove}
						>
							Delete
						</Btn>
					)}
					<Btn type="submit" disabled={isSubmitting}>
						{submitText}
					</Btn>
				</BtnGroup>
			</Action>
		</Container>
	);
};

const Container = styled.form`
  max-width: 812px;
  margin: 10vh auto 0;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 0 0 1.5rem;
	color: #606266;
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

const ErrorMsg = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #e5534b;
`;

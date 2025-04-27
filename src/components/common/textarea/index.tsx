import { styled } from "@kuma-ui/core";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = Partial<HTMLTextAreaElement> & {
	register?: UseFormRegisterReturn;
};

export const Textarea: React.FC<Props> = ({
	placeholder,
	autocomplete,
	disabled,
	readOnly,
	maxLength,
	minLength,
	register,
}) => {
	return (
		<Container>
			<Input
				disabled={disabled}
				readOnly={readOnly}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholder}
				autoComplete={autocomplete || "off"}
				{...register}
			/>
		</Container>
	);
};

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  padding: 8px 11px;
  cursor: text;

  &:hover {
    border-color: #c0c4cc;
  }
`;

const Input = styled.textarea`
  width: 100%;
  min-height: 20vh;
  outline: none;
  border: none;
  resize: none;
  field-sizing: content;
  padding: 0;
	color: #606266;
`;

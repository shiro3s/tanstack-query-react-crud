import { styled } from "@kuma-ui/core";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = Partial<HTMLInputElement> & {
	register?: UseFormRegisterReturn;
};

export const InputText: React.FC<Props> = ({
	disabled,
	id,
	maxLength,
	minLength,
	readOnly,
	autofocus,
	autocomplete,
	placeholder,
	tabIndex,
	register,
}) => {
	return (
		<Container>
			<ContainerInner>
				<Input
					type="text"
					id={id}
					readOnly={readOnly}
					disabled={disabled}
					minLength={minLength}
					maxLength={maxLength}
					autoFocus={autofocus}
					autoComplete={autocomplete || "off"}
					placeholder={placeholder}
					tabIndex={tabIndex}
					{...register}
				/>
			</ContainerInner>
		</Container>
	);
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
`;

const ContainerInner = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  cursor: text;
  box-shadow: 0 0 0 1px #dcdcdc;

  &:hover {
    box-shadow: 0 0 0 1px #c0c4cc;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  outline: none;
  border: none;
  appearance: none;
  background: none;
  box-sizing: border-box;
  color: #606266;
`;

import { styled } from "@kuma-ui/core";

type Props = Partial<Omit<HTMLButtonElement, "children">> & {
	children: string;
	theme?: "danger";
	onClick?: () => void;
};

export const Btn: React.FC<Props> = ({
	type = "button",
	disabled,
	children,
	theme,
	onClick,
}) => {
	return (
		<Button
			type={type}
			disabled={disabled}
			data-theme={theme}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  font-weight: 500;
  user-select: none;
  appearance: none;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  color: #606266;

  &[data-theme="danger"] {
    background-color: #db2e2e;
    border-color: #cf2b2b;
    color: #fff;
  }
`;

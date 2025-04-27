import { styled } from "@kuma-ui/core";
import { NavLink } from "react-router-dom";

type Props = {
	href: string;
	children: string;
	disabled?: boolean;
};

export const AnchorBtn: React.FC<Props> = ({ children, href, disabled }) => {
	return (
		<Container>
			<NavLink to={href} aria-disabled={disabled}>
				{children}
			</NavLink>
		</Container>
	);
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  a {
    line-height: 1;
    height: 32px;
    padding: 8px 15px;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    background-color: #fff;
    white-space: nowrap;
    color: #606266;
    cursor: pointer;
  }

  a[aria-disabled="true"] {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

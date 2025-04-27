import { styled } from "@kuma-ui/core";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};

const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	box-sizing: border-box;
	padding: 2rem 1.5rem;
`;

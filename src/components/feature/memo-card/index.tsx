import { styled } from "@kuma-ui/core";
import { NavLink } from "react-router-dom";

export const MemoCard: React.FC<Memo> = ({ id, title, content }) => {
	return (
		<Container>
			<NavLink to={`/edit/${id}`} />

			<Header>
				<Title>{title}</Title>
			</Header>

			<Body>{content}</Body>
		</Container>
	);
};

const Container = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  box-sizing: border-box;
  text-decoration: none;

  &:hover {
    border-color: #ccc;
    box-shadow: 0 0 10px #ddd;
  }

  a {
    position: absolute;
    inset: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #606266;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Body = styled.div`
  min-height: 50px;
  color: #303133;
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

import { styled } from "@kuma-ui/core";

import { MemoCard } from "@/components/feature/memo-card";

interface Props {
	memos: Memo[];
}

export const Contents: React.FC<Props> = ({ memos }) => {
	if (memos.length === 0) {
		return (
			<Container>
				<Head>No items</Head>
			</Container>
		);
	}

	return (
		<GridContainer>
			{memos.map((memo) => (
				<MemoCard
					id={memo.id}
					title={memo.title}
					content={memo.content}
					key={memo.id}
				/>
			))}
		</GridContainer>
	);
};

const Container = styled.div`
  margin: 10rem 0 0;
`;

const Head = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #606266;
`;

const GridContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(300px, 1fr))
`;

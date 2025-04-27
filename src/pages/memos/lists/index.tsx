import { useLoaderData } from "react-router-dom";
import { Contents } from "./Contents";
import { Header } from "./Header";
import type { listsLoader } from "./loader";

export const MemoLists = () => {
	const { memos } = useLoaderData() as Awaited<
		ReturnType<ReturnType<typeof listsLoader>>
	>;

	return (
		<section>
			<Header />
			<Contents memos={memos} />
		</section>
	);
};

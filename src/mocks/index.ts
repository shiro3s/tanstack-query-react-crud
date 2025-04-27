import { setupWorker } from "msw/browser";

import { handlers } from "./memo";

export const setupMsw = () => {
	if (!import.meta.env.DEV) return;

	const worker = setupWorker(...handlers);

	worker.start();
};

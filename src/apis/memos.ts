import type { AxiosInstance } from "axios";

export class MemoApi {
	private axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	async getLists() {
		const { data } = await this.axiosInstance.get<Memo[]>("/memos");
		return data;
	}

	async getOne(id: string) {
		const { data } = await this.axiosInstance.get<Memo>(`/memos/${id}`);
		return data;
	}

	async create(memo: Memo) {
		const { data } = await this.axiosInstance.post("/memos", memo);
		return data;
	}

	async update(id: string, memo: Omit<Memo, "id">) {
		const { data } = await this.axiosInstance.put(`/memos/${id}`, memo);
		return data;
	}

	async remove(id: string) {
		const { data } = await this.axiosInstance.delete(`/memos/${id}`);
		return data;
	}
}

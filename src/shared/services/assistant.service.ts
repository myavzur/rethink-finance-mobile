import * as FileSystem from "expo-file-system";
import OpenAi from "openai";

import { categoryRepository } from "@/shared/database/repositories";
import { currencyOptions } from "@/shared/database/schema";

// "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"

class AssistantService {
	client = new OpenAi({
		apiKey:
			"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"
	});

	constructor() {
		this.getFuck();
	}

	getFuck = async () => {
		console.log("fuck");

		const res = await this.client.responses.create({
			model: "gpt-4o-mini",
			"input": "write a haiku about ai"
		});

		console.log("yes")

		console.log(res);
	}
	getTransactionsFromAudio = async (audioUri: string) => {
		const currencyValues = currencyOptions.map((currency) => currency.value);
		const categories = await categoryRepository.getAll();
		const categoriesAvailable = categories.map(
			(category) => `${category.name}(${category.id})`
		);

		console.log("audioUri", audioUri);
		console.log("cats", categoriesAvailable);

		// Читаем файл в base64
		const base64 = await FileSystem.readAsStringAsync(audioUri, {
			encoding: FileSystem.EncodingType.Base64
		});

		console.log("yes the base");

		// Конвертируем base64 в Blob
		const blob = new Blob([Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))], {
			type: "audio/m4a"
		});

		console.log("BLOB YES");

		// Создаем File для OpenAI SDK
		const audioFile = await this.client.files.create({
			file: new File([blob], "recording.m4a", { type: "audio/m4a" }),
			purpose: "user_data"
		});

		console.log("audioFile", "YES");
		console.log("audioFileId", audioFile.id);

		const response = await this.client.responses.create({
			model: "gpt-5",
			input: [
				{
					role: "developer",
					content: `
						Требование: Сделай json объект из запроса пользователя следующего содержания 
							{ 
								comment: string; 
								amount_value: number; 
								amount_currency: ${currencyValues.join("|")}; 
								created_at: number; // Формат unix timestamp 
								category_id: number; 
							} 
						Дата на момент запроса: 
							${new Date()}
						Категории по шаблону Название(ID): 
							${categoriesAvailable.join(", ")}
					`
				},
				{
					role: "user",
					content: [
						{
							type: "input_file",
							file_id: audioFile.id
						}
					]
				}
			]
		});

		// JSON уже будет в правильном формате
		console.log(response.output_text);
	};

	getTransactionsFromScreenshot = async () => {
		const file = await this.client.files.create({
			file: fs.createReadStream("draconomicon.pdf"),
			purpose: "user_data"
		});

		const response = await this.client.responses.create({
			model: "gpt-5",
			input: [
				{
					role: "user",
					content: [
						{
							type: "input_file",
							file_id: file.id
						},
						{
							type: "input_text",
							text: "What is the first dragon in the book?"
						}
					]
				}
			]
		});

		console.log(response.output_text);
	};
}

export const assistantService = new AssistantService();

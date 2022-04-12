export class HTTPError extends Error {
	context?: string;
	statusCode: number;

	constructor(statusCode: number, message: string, context?: string) {
		super(message);
		this.context = context;
		this.statusCode = statusCode;
		this.message = message;
	}
}

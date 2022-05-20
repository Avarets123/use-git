"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPError = void 0;
class HTTPError extends Error {
    constructor(statusCode, message, context) {
        super(message);
        this.context = context;
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.HTTPError = HTTPError;

import { Response } from 'express';

// Define types for a successful response and an error response
type ResponseData<T> = {
    success: boolean;
    message: string;
    data?: T;
};

type ErrorResponse = {
    success: boolean;
    message: string;
    error?: any;
};

// Success response
function sendSuccess<T>(res: Response, data: T, message = 'Success', statusCode = 200): Response {
    const response: ResponseData<T> = {
        success: true,
        message,
        data,
    };
    return res.status(statusCode).json(response);
}

// Error response
function sendError(res: Response, message = 'An error occurred', error: any = null, statusCode = 500): Response {
    const response: ErrorResponse = {
        success: false,
        message,
        error,
    };
    return res.status(statusCode).json(response);
}

export default {
    sendSuccess,
    sendError,
};

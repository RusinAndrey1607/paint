import { Request, Response } from 'express';
import { ApiError } from '../exceptions/apiError';

export const errorMiddleware = (err: Error, req: Request, res: Response, next: Function) => {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors })
    }
    return res.status(500).json({ message: "Unexpected server error", error: err })

}
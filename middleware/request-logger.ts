import { Request, Response } from 'express';

/**
 * Simple middleware to log each request to the console
 * @param {Request} req request object
 * @param {Response} res response object
 * @param {Function} next callback
 */
export function requestLogger(req: Request, res: Response, next: Function) {
  console.info(`Mock sentry got a request: ${req.method} ${req.protocol}://${req.hostname}${req.url}`);
  next();
}

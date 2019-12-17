import { Request, Response, } from 'express';
const Router = require('express-promise-router');
const cors = require('cors');
import { corsOptions } from '../config';

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
// export our router to be mounted by the parent application
export const pingRoutes = new Router();

pingRoutes.get('/', async (req: Request, res: Response) => {
  res.status(200).send({ response: 'pong' });
});

pingRoutes.post('/', cors(corsOptions), async (req: Request, res: Response) => {
  res.status(200).send({ response: 'pong' });
});

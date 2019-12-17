import { Application } from 'express';
import { apiBase } from '../config';
import { pingRoutes } from './ping.routes';

export function mountRoutes(app: Application) {
  app.use(`${apiBase}/ping`, pingRoutes);
}

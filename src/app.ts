import express, { json } from 'express';
import { logRequest } from './middlewares/requests-logger';

import mainRouter from './routes';

const app = express();

app.use(json());
app.use(logRequest);

app.use('/', mainRouter);

export default app;

import express, { json } from 'express';
import { logRequest } from './middlewares/requests-logger';
import { handle404Error } from './middlewares/wrong-uri-handler';

import mainRouter from './routes/index-router';

const app = express();

app.use(json());
app.use(logRequest);

app.use('/v1/api', mainRouter);

app.use('*', handle404Error);

export default app;

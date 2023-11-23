const PORT = Number(process.env.PORT) || 45009;
const ENVIRONMENT = process.env.ENVIRONMENT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';

export { PORT, ENVIRONMENT, JWT_SECRET_KEY };

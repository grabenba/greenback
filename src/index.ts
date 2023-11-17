import app from './app';

const PORT = Number(process.env.PORT) ?? 45009;

app.listen(PORT, () => console.log('Server running on port', PORT));

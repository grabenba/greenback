import app from './app';
import { PORT } from './constants';

// PRIMERO GENERO EN LA TERMINAL LAS VARS DE ENTORNO para copiar en .env
// const JWT_KEY = require('node:crypto').createHash('sha512').update('LASSJ4284%&/SDF').digest('hex')
// console.log(JWT_KEY);

// import key from '../greenback-6e51f-firebase-adminsdk-8zz1a-37ff70b1d7.json'
// console.log(JSON.stringify(key));

app.listen(PORT, () => console.log('Server running on port', PORT));

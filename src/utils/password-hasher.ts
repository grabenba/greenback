// import { createHash, randomBytes } from 'node:crypto';

// const getSalt = () => randomBytes(18).toString('hex');

// const getSHA512OfPassword = (password: string, salt: string) =>
// 	createHash('sha512')
// 		.update(salt + password)
// 		.digest('hex');

// export { getSHA512OfPassword, getSalt };


import { createHash, randomBytes } from 'node:crypto';
import PEPPER from './pepper'

const getSalt = () => randomBytes(18).toString('hex');

const hashSeasonPassword = (password: string, salt: string) => 
	  createHash('sha256')
	  .update(salt + PEPPER + password)
	  .digest('hex');

export { getSalt, hashSeasonPassword };

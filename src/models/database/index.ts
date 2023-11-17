import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from './adminsdk.json';

initializeApp({
	credential: cert(serviceAccount as any),
});

const firestore = getFirestore();

export default firestore;

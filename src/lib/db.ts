import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(JSON.parse(PUBLIC_FIREBASE_CONFIG));
export const db = getFirestore(app);
export const auth = getAuth(app);

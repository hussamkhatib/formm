import { initializeApp } from "firebase/app";

import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";

import firebaseConfig from "./config";
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

setPersistence(auth, inMemoryPersistence);

export { auth };

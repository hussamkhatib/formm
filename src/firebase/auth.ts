import {
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";

import { auth } from ".";

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
  redirect: () => void
) => {
  firebaseSignInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      // Get the user's ID token as it is needed to exchange for a session cookie.
      return getIdToken(userCred.user).then((idToken) => {
        // Session login endpoint is queried and the session cookie is set.
        // CSRF protection should be taken into account.
        // ...
        // const csrfToken = getCookie("csrfToken");
        return fetch(`${import.meta.env.VITE_API_BASE_URL}sessionLogin`, {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // "CSRF-Token": csrfToken,
          },
          body: JSON.stringify({ idToken }),
        });
      });
    })
    .then(() => {
      // A page redirect would suffice as the persistence is set to NONE.
      return auth.signOut();
    })
    .then(() => {
      redirect();
    });
};

// export const createUserWithEmailAndPassword = async (
//   email: string,
//   password: string
// ) => {
//   try {
//     const { user } = await firebaseCreateUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return { user: getUser(user) };
//   } catch (error) {
//     return { error };
//   }
// };

// function getUser(user) {
//   return {
//     uid: user.uid,
//     displayName: user.displayName,
//     email: user.email,
//   };
// }

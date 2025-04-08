import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // adjust the path as needed

export const createUser = async (fullName, email, password) => {
  try {
    const userDetail = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userDetail.user, { displayName: fullName });

    return userDetail;
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (err.code === 'auth/invalid-email') {
      console.log('That email address is invalid');
    }
  }
};

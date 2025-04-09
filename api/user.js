import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // adjust the path as needed
import store from '../redux/store';
import { updateToken } from '../redux/reducers/User';

export const createUser = async (fullName, email, password) => {
  try {
    const userDetail = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userDetail.user, { displayName: fullName });

    // 🔁 Refresh user
    await auth.currentUser.reload();
    const updatedUser = auth.currentUser;

    return updatedUser;
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      return {err:'The email you entered is already in use.'}
    }
    else if (err.code === 'auth/invalid-email') {
      return {err:'Please enter a valid email address.'}
    }
    return {err:'Something went wrong with your request.'}
  }
};


export const loginUser= async (email, password)=> {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    await auth.currentUser.reload(); // Reload the current user
    const updatedUser = auth.currentUser;
    const token = await updatedUser.getIdToken();

    return {
      status: true,
      data: {
        displayName: updatedUser.displayName, // ✅ use updatedUser
        email: updatedUser.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return { status: false, error: 'Please enter a valid email address.' };
    } else if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'Incorrect password.' };
    } else if (error.code === 'auth/too-many-requests') {
      return { status: false, error: 'Too many attempts. Please try again later.' };
    }
    console.log(error);
    return { status: false, error: 'Something went wrong. Please try again.' };
  }
};



export const logOut= async ()=>{
  await auth().signOut();
};



export const checkToken = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(true); // force refresh
      console.log('Refreshed token:', token);
      return token;
    } else {
      console.log('No user is signed in.');
      return null;
    }
  } catch (err) {
    console.log('Token refresh error:', err?.message || err);
    return null;
  }
};


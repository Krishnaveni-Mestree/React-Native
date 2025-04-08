import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // adjust the path as needed

export const createUser = async (fullName, email, password) => {
  try {
    const userDetail = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userDetail.user, { displayName: fullName });
    return userDetail;
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


export const loginUser= async (email, password)=>{
  try{
    const response = await signInWithEmailAndPassword(auth, email, password);
    const token=await response.user.getIdToken();
    return{
      status:true,
      data:{
        displayName:response.user.displayName,
        email:response.user.email,
        token,
      },
    };
  }
  catch(error){
    if(error.code === 'auth/invalid-email'){
      return {status:false, error:'Please enter a valid email address.'}
    }
    else if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'Incorrect password.' }; //for email not registered also same
    }
    else if (error.code === 'auth/too-many-requests') {
      return{status:false, error:'Too many attempts. Please try again later.'}
    }
    console.log(error);
    return { status: false, error: 'Something went wrong. Please try again.' };
    
  }
}

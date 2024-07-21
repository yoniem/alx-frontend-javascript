import { signUpUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const user = await signUpUser();
    const photo = await uploadPhoto();
    return { user, photo };
  } catch (error) {
    console.log('Signup system offline');
    return { user: null, photo: null };
  }
}

import { signUpUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  const userPromise = signUpUser();
  const photoPromise = uploadPhoto();

  try {
    const [user, photo] = await Promise.all([userPromise, photoPromise]);
    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo }
    ];
  } catch (error) {
    const user = await userPromise;
    return [
      { status: 'fulfilled', value: user },
      { status: 'rejected', reason: error.toString() }
    ];
  }
}

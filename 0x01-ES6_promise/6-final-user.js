import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photo, user] = await Promise.all([photoPromise, userPromise]);

    console.log(photo.body, user.body);
    return [photo.body, user.body];
  } catch (error) {
    console.log('Signup system offline');
  }
}

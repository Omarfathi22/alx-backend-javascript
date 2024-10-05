import { uploadPhoto, createUser } from './utils'; // Import the functions

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('photo.jpg'); // Call uploadPhoto and await the result
    const user = await createUser(); // Call createUser and await the result
    
    // Return an object with the responses
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

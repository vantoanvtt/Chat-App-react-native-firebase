import database from '@react-native-firebase/database';

export const AddUser = async (name, email) => {
  try {
    return await 
      database()
      .ref().child('users')
      .set({
        name: name,
        email: email,
      });
  } catch (error) {
    return error;
  }
};

export const UpdateUser = async (uid, imgSource) => {
  try {
    return await database()
    .ref("users/" + uid)
    .update({
      profileImg: imgSource
    })
  }
  catch (err) {
    alert(err);
  }
}
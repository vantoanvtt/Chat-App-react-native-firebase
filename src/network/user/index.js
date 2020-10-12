import database from '@react-native-firebase/database';

export const AddUser = async (name, email, id, profileImg) => {
  try {
    return await 
      database()
      .ref(`/users/${id}`)
      .set({
        name: name,
        email: email,
        profileImg: profileImg,
        uuid: id
      }).then(() => console.log('Data set.'));
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
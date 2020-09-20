import database from '@react-native-firebase/database';

export const AddUser = async (name, email, uid, profileImg) => {
  try {
    return await 
      database()
      .ref("users/" + uid)
      .set({
        name: name,
        email: email,
        uuid: uid,
        profileImg: profileImg,
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
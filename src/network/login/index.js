import firebase from '../../firebase/config';
import auth from '@react-native-firebase/auth';

const LoginRequest = async(email,password) => {
    try {
        return await auth().signInWithEmailAndPassword(email,password);
    }
    catch(error) {
        console.log(error);
        return error;
    }
}

export default LoginRequest;
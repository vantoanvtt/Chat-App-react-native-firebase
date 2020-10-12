import React,{useContext, useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {Store} from '../../context/store/index';
import {UpdateUser} from '../../network/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const InfoCard = (props) => {
    return (
        <View style={{
            flexDirection:'row', 
            height: 50,
            marginVertical: 10,
            width: 320,
            backgroundColor: "#dcf5e9",
            alignItems:'center',
            borderBottomWidth: 2,
            borderColor: "#59635e",
            opacity: 0.8
            }} >
            <MaterialCommunityIcons name={props.iconName} size={30} color = "black" />
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10, color: "#2c2d4d"}} >{props.info}</Text>
        </View>
    )
}

const Profile = () => {
    const {UserValue} = useContext(Store);
    const {CurrentUser} = UserValue;
    const {currUser} = CurrentUser;
    const {name, email, uuid, profileImg} = currUser;
    const [sourceImg, setSourceImg] = useState();

    const onPressPicker = () => {
        console.log("go to imagepicker")

       const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

        ImagePicker.launchImageLibrary(options, (response) => {
            //console.log('Response = ', response);
            // Same code as in above section!
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log("----------sourceImg-----------", source);

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                UpdateUser(uuid,source);
            }
        });
        
    }
    return (
        <View style={styles.headerContainer}>
            <LinearGradient colors={['#21e00b', '#74d8db', '#84bf86']}
                style={{
                    height: '100%',
                    //paddingHorizontal: 15,
                    justifyContent: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            >
                <View style={styles.accountGroup}>
                    <Image source={profileImg} style={styles.avatar} />
                    <Text style={styles.nameStyle} >{name}</Text>
                    
                </View>
                <TouchableOpacity
                    onPress={() => {onPressPicker()}}
                    style={{marginLeft: 65, marginTop: -16}}
                >
                    <Icon name="camera" size={25} color="#737d7d"  />
                </TouchableOpacity>
            </LinearGradient>

            <View style={{alignItems: 'center'}}>
                <View style={styles.follow}>
                    <Text>12,500</Text>
                    <Text style={{marginTop: 10, fontWeight:'bold'}}>Follows</Text>
                </View>
                <View>
                    <InfoCard iconName="account" info={name}  />
                    <InfoCard iconName="email" info={email} />
                </View>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    headerContainer: {
        //flexDirection: 'row',
        alignContent: 'center',
        //justifyContent: 'center'
        paddingHorizontal: 5,
        height: "40%",
        
    },
    accountGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#4f373c'
    },
    follow: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: "#d9e60e",
        //opacity: 0.55,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: -40
    }
})
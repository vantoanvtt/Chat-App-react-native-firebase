import React,{useContext, useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';

import {Store} from '../../context/store/index';

const Chat = () => {
  
    const {UserValue} = useContext(Store);
    const {CurrentUser} = UserValue;
    const {currUser, friends} = CurrentUser;
    const {name, email, uuid, profileImg} = currUser;

    data = [
      {
        profileImage: "",
        uuid: "1",
        name: "user1"
      },
      {
        profileImage: "",
        uuid: "2",
        name: "user2"
      }
    ]

    console.log("current userrrrrrrrrrr", currUser);
    console.log("friendsssssssss: ", friends );
    return (
        <View>
          <View style={styles.header}>
            <View>
              <Image source={profileImage} style={styles.avatarCurrUser} />
              <Text>Chat</Text>
            </View>
            <View style={styles.pencilIcon}>
              <Icon name="pencil-square-o" type="font-awesome" size={24} />
            </View>
          </View>

          <View>
            <FlatList 
              data={data}
              keyExtractor={(item) => (item.uuid)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                  <View
                    style={{
                      height: 65,
                      width: "100%",
                      flexDirection: "row",
                      padding: 5,
                      borderColor: 'black',
                      borderWidth: 2
                    }}
                  >
                    <Image source={{uri: item.profileImage}} style={{height: 50, width: 50, borderRadius: 25}} />
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}  >{item.name}</Text>
                  </View>
                </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
  pencilIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cbd1d4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    width: "100%"
  },
  avatarCurrUser: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginHorizontal: 10
  }
})
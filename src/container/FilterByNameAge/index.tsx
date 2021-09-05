import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {ApiClient} from '../../apiClient';
import ListItem from '../../components/ListItem';
import utility from '../../utility';
import AppButton from '../../components/AppButton';
import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native'; 


const App: React.FC = () => {
  const userTestStatus = []
    const [randNo, setRandNo] = useState<any[]>('')
    const [userStatus, setUserStatus] = useState<any[]>(userTestStatus)
    const [permanentUserStatus, setpermanentUserStatus] = useState<any[]>(userTestStatus)

  

  async function onCreateTriggerNotification() {
    let randNo = '564'
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const trigger: IntervalTrigger = {
      type: TriggerType.INTERVAL,
      interval: 15,
      timeUnit: TimeUnit.MINUTES
    };

    const notifTrigger = await notifee.createTriggerNotification(
      {
        id: randNo,
        title: 'Notification',
        body: 'Fetched Data after an hour',
        android: {
          channelId,
        },
      },
      trigger,
    );
    setRandNo(randNo)
  }

  useEffect(async () => {
    notifee.getTriggerNotificationIds().then(ids => {
      if(ids.includes(randNo)){
        fetchData()
      }else {
        onCreateTriggerNotification()
        fetchData()
      }
    });
  }, [randNo]);


  const fetchData = async () => {
    let userTestStatus = await ApiClient.fetchUsers()
    setUserStatus(userTestStatus)
    setpermanentUserStatus(userTestStatus)
  }

  return (
    <View style={styles.container}>
      <ModalDropdown options={['Name', 'Age']}
      dropdownTextStyle={{
          color: "blue",
      }}
      onSelect={(index, value,) => {
          if (value == "Name") {
          userStatus.sort(utility.compareByName)
          setUserStatus([...userStatus])
          } else {
          userStatus.sort(utility.compareByAge)
          setUserStatus([...userStatus])
          }
      }}
      style={styles.styleDropDown}
      dropdownStyle={styles.dropDownStyle}
      />
      <FlatList
          data={userStatus}
          renderItem={ListItem}
      />
      <AppButton 
          title={"Refresh"} 
          onPress={() =>  setUserStatus([...permanentUserStatus])}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20
    },
    styleDropDown: {
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 25,
        alignItems: 'center',
        borderRadius: 5,
    },
    dropDownStyle: {
        alignItems: 'center',
        width: "90%",
        marginLeft: -150,
        marginTop: 10
    },
    btnView:{
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 20,
    }
});

export default App;
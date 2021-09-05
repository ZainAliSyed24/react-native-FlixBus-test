import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Sell: React.FC = ({item}) => {

    return(
      <View>
        <View style={styles.containerView}>
            <View style={styles.nameIconView}>
              <Text style={styles.iconTxt}>{item.name.slice(0,1)}</Text>
            </View>
              <View style={styles.txtView}>
                  <Text style={styles.txtName}>
                  {item.name}
                  </Text>
                <Text style={styles.txtAge}>Age: {item.age}</Text>
              </View>
        </View>
        <View style={styles.seprator}></View>
      </View>
    )
  }

const styles = StyleSheet.create({

  containerView:{
    flexDirection: 'row',
    marginTop : 10,
  },
  nameIconView: {
    marginHorizontal: 5,
    justifyContent: 'center',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'green'
  },
  iconTxt: {
    fontSize: 25,
    color: 'white'
  },
  txtView: {
    paddingLeft: 10,
    width: 200,
    paddingBottom: 5,
  },
  txtName: {
    marginVertical: 5,
  },
  txtAge: {
    marginVertical: 5
  },
  seprator:{
    borderWidth: 1,
    marginVertical: 10
  },
});

export default Sell;
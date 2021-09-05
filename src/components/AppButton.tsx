import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';


const AppButton: React.FC = ({title, onPress}) => {
    return(
      <View style={styles.btnView}>
        <Button 
          title={title} 
          onPress={onPress}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
    btnView:{
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 20,
    }
});

export default AppButton;
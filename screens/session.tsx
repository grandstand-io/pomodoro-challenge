import { RouteProp, useRoute } from '@react-navigation/native';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { RootStackParamList } from '../navigation/root';

type SessionScreenRouteProp = RouteProp<RootStackParamList, 'Session'>;

const Button = ({onPress, title, icon}: {onPress?: () => void; title: string; icon?: "pause" | "check"}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name={icon} size={32} color="white" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Session() {
  const router = useRoute<SessionScreenRouteProp>();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.headerTextInput}
        placeholder={"Session Name"}
        onChangeText={text => console.log(text)}
        value={undefined}/>
      <Text style={styles.durationText}>
        00:00:00
      </Text>

      <View style={styles.controlButtons}>
        <Button
          title={"Pause"}
          icon={"pause"}
          onPress={() => console.log("Pause")}/>
        <Button
          title={"Complete"}
          icon={"check"}
          onPress={() => console.log("Complete")}/>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  headerTextInput: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  durationText: {
    marginTop: 24,
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 48,
    marginHorizontal:24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 100,
    elevation: 5,
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
});

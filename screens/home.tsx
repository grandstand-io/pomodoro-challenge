import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { RootStackParamList } from '../navigation/root';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startButtonContainer} onPress={() => navigation.navigate('Session', {})}>
        <MaterialIcons name="play-arrow" size={64} color="white" />
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      <Text style={styles.sectionText}>Sessions</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  startButtonContainer: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    borderRadius: 200,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '500',
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 16,
  }
});

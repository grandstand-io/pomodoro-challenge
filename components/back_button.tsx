import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <MaterialIcons name="chevron-left" size={24} color="#007AFF" />
      <Text style={styles.backButtonText}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  backButtonText: {
    color: '#007AFF',
    marginLeft: 2,
    fontSize: 16,
  },
});

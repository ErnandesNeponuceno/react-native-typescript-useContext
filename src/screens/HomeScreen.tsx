import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { AppContext } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { isHelpRequested } = useContext(AppContext);

  return (
    <View style={isHelpRequested ? styles.containerActive : styles.containerInactive}>
      <Image
        source={
          isHelpRequested
            ? require('../../assets/logoon.jpg') 
            : require('../../assets/logooff.jpg') 
        }
        style={styles.image}
      />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
        <Text style={styles.buttonText}>Pedir ajuda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1EA3A', 
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

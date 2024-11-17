import React, { useContext, useState, useEffect  } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { AppContext } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

export default function FormScreen({ navigation }: Props) {
  const { setHelpRequested } = useContext(AppContext); 

  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleSubmit = () => {
    setHelpRequested(true); // Marca que o pedido de ajuda foi feito
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={formData.field1}
        onChangeText={(text) => setFormData({ ...formData, field1: text })}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Your age here..."
        value={formData.field2}
        onChangeText={(text) => setFormData({ ...formData, field2: text })}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Your address here..."
        value={formData.field3}
        onChangeText={(text) => setFormData({ ...formData, field3: text })}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaUm = () => {
  const [numero, setNumero] = useState('');
  const [primos, setPrimos] = useState([]);
  const navigation = useNavigation();

  const verificarPrimo = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  };

  const mostrarPrimos = () => {
    const primos = [];
    for(let i = 2; i <= numero; i++)
      if(verificarPrimo(i)) primos.push(i);
    setPrimos(primos);
  };

  const irParaTelaDois = () => {
    navigation.navigate('TelaDois');
  };

  return (
    <View>
      <Text>Primos</Text>
      <TextInput
        value={numero}
        onChangeText={(valor) => setNumero(valor)}
        placeholder="Digite um número"
        keyboardType="numeric"
      />
      <Button title="Verificar Primos" onPress={mostrarPrimos} />
      <Text>Primos até {numero}:</Text>
      {primos.map((primo) => (
        <Text key={primo}>{primo}</Text>
      ))}
    </View>
  );
};

export default TelaUm;

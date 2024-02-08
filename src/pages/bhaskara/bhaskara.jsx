import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaTres = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const navigation = useNavigation();

  const calcularBhaskara = () => {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      alert('A equação não tem raízes reais!');
    } else {
      const raizDelta = Math.sqrt(delta);
      const raiz1 = (-b + raizDelta) / (2 * a);
      const raiz2 = (-b - raizDelta) / (2 * a);
      setX1(raiz1.toFixed(2));
      setX2(raiz2.toFixed(2));
    }
  };

  const irParaTelaUm = () => {
    navigation.navigate('TelaUm');
  };

  return (
    <View>
      <Text>Esta é a Tela Três</Text>
      <TextInput
        value={a}
        onChangeText={(valor) => setA(valor)}
        placeholder="Digite o valor de a"
        keyboardType="numeric"
      />
      <TextInput
        value={b}
        onChangeText={(valor) => setB(valor)}
        placeholder="Digite o valor de b"
        keyboardType="numeric"
      />
      <TextInput
        value={c}
        onChangeText={(valor) => setC(valor)}
        placeholder="Digite o valor de c"
        keyboardType="numeric"
      />
      <Button title="Calcular Raízes" onPress={calcularBhaskara} />
      <Text>Raízes:</Text>
      <Text>X1 = {x1}</Text>
      <Text>X2 = {x2}</Text>
    </View>
  );
};

export default TelaTres;

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaDois = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const navigation = useNavigation();

  const calcularImc = () => {
    if (!peso || !altura) {
      alert('Por favor, informe peso e altura.');
      return;
    }
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
  };

  const irParaTelaUm = () => {
    navigation.navigate('TelaUm');
  };

  return (
    <View>
      <Text>Esta é a Tela Dois</Text>
      <TextInput
        value={peso}
        onChangeText={(valor) => setPeso(valor)}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
      />
      <TextInput
        value={altura}
        onChangeText={(valor) => setAltura(valor)}
        placeholder="Digite sua altura (cm)"
        keyboardType="numeric"
      />
      <Button title="Calcular IMC" onPress={calcularImc} />
      <Text>IMC: {imc}</Text>
    </View>
  );
};

export default TelaDois;

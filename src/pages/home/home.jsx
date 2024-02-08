
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { View } from 'react-native-web';

export default function home() {

    const navigation = useNavigation();

    function navigate(page) {
        navigation.navigate(page);
    }
    return (
        <View>
            <Button title='primos' onPress={() => navigate("primos")}></Button>
            <Button title='imc' onPress={() => navigate("imc")}></Button>
            <Button title='bhaskara' onPress={() => navigate("bhaskara")}></Button>
        </View>
    );
}
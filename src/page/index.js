import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import iconLogo from '../assets/logo.png'
import ModalRender from '../components/Modal';


export default function Page() {

    const [valueAlcool, setValueAlcool] = useState('');
    const [valueGasolina, setValueGasolina] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleAlcoolChange(text){
        setValueAlcool(text);
    }

    function handleGasolinaChange(text){
        setValueGasolina(text);
    }

    function openModal(){
        setModalVisible(true);
    }

    function resultado (){
        const calculo = parseFloat(valueAlcool) / parseFloat(valueGasolina);
        if(calculo < 0.7){
            return 'Álcool'
        }else{
            return 'Gasolina'
        }
    }

    function verificar(){
        if(valueAlcool === '' || valueGasolina === ''){
            alert("Preencha os campos!");
        }else{
            openModal();
        }
    }
    
    return (
    <View style={styles.container}>
        <Image
            source={iconLogo}
        />
        <Text style={styles.textOpcao}>Qual melhor opção?</Text>
        

        <View style={styles.inputContainer}>
            <Text style={styles.textEscolha}>Álcool (preço por litro):</Text>
            <TextInput
                style={styles.borderInput}
                placeholder='EX: 4.60'
                keyboardType='numeric'
                value={valueAlcool}
                onChangeText={handleAlcoolChange}
            />

            <Text style={styles.textEscolha}>Gasolina (preço por litro):</Text>
            <TextInput
                style={styles.borderInput}
                placeholder='EX: 7.30'
                keyboardType='numeric'
                value={valueGasolina}
                onChangeText={handleGasolinaChange}
            />

            <TouchableOpacity style={styles.areaButton} onPress={verificar}>
                <Text style={styles.textButton}>CALCULAR</Text>
                <ModalRender
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                resultado={resultado()}
                valueAlcool={valueAlcool}
                valueGasolina={valueGasolina}
                setValueAlcool={setValueAlcool}
                setValueGasolina={setValueGasolina}
                />
            </TouchableOpacity>

        </View>

        
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOpcao:{
        fontSize: 25,
        color: '#FFF',
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    borderInput:{
        borderWidth: 1,
        backgroundColor: '#FFF',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        paddingLeft: 10
    },
    inputContainer:{
        width: '90%',
    },
    textEscolha:{
        fontSize: 18,
        color: '#FFF',
        marginTop: 10
    },
    areaButton:{
        borderWidth: 1,
        backgroundColor: '#FF5700',
        marginTop: 10,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5

    },
    textButton:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        
    }
})
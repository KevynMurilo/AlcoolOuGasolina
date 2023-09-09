import React from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import iconLogo from '../../assets/gas.png'

export default function ModalRender(props) {

    function closeModal(){
        props.setValueAlcool('');
        props.setValueGasolina('');
        props.setModalVisible(false);
    }

 return (
    <Modal
    animationType='slide'   
    visible={props.modalVisible}
    onRequestClose={() => props.setModalVisible(false)}
    >
    
    <View style={styles.container}>
        <Image
        source={iconLogo}
        />
        
        <View style={styles.textContainer}>
        <Text style={styles.textPrincipal}> A melhor opção é {props.resultado} </Text>
        <Text style={styles.textSecundario}>Com os preços: </Text>
        <Text style={styles.textValor}>Álcool: R$ {props.valueAlcool} </Text>
        <Text style={styles.textValor}>Gasolina: R$ {props.valueGasolina} </Text>

        <TouchableOpacity style={styles.areaButton} onPress={closeModal}>
            <Text style={styles.textButton}> Calcular novamente</Text>
        </TouchableOpacity>
        </View>

    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    textContainer:{
        alignItems: 'center',
        marginTop: 30,
    },
    textPrincipal:{
        fontSize: 25,
        color: '#13FF00',
        fontWeight: 'bold',
        marginBottom: 30
    },
    textSecundario:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5
    },
    textValor:{
        color: '#FFF',
        fontSize: 18,
        margin: 2
    },
    areaButton:{
        marginTop: 20,
        borderWidth: 1,
        width: 200,
        height: 30,
        borderColor: '#FF5700',
        borderRadius: 5,
        justifyContent: 'center'
    },
    textButton:{
        color: '#FF5700',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
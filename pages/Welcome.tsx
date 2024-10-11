import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View  style={styles.container}>
            <View style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY"
            source={require("../assets/images/logo7.png")}
            style={{width: "100%", height:250}}
            resizeMode="contain"
            />
            </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Bem-Vendo a SaúdeDigital</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>

        </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38a69d'

    },
    containerLogo:{
        flex:2,
        backgroundColor:'38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color:'#a1a1a1',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

})
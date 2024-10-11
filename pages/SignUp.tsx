import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Animatable.Image
                    animation="flipInY"
                    source={require("../assets/images/logo7.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.message}>Cadastrar</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input} />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu endereço de email completo..."
                    style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={styles.input} />

                <Text style={styles.title}>Confirme sua senha</Text>
                <TextInput
                    placeholder="Confirme sua senha..."
                    style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                 onPress={() => navigation.navigate('SignIn')} 
                 style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Voltar para a tela de Login</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#38a69d",
    },
    
    containerHeader:{
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%',
        alignItems: 'center', 
    },
    logo:{
        width: 50, 
        height: 50,
        marginBottom: 5, 
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor:'#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 12,
        color: "#a1a1a1"
    },
    button:{
        backgroundColor: '#28a69d',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    }

});

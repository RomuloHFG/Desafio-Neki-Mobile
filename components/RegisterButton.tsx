import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function RegisterButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#28a69d',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
       
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

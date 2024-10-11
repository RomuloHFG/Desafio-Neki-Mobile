import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';

interface RegisterModalProps {
    visible: boolean;
    onClose: () => void;
    onRegister: (newCard: any) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ visible, onClose, onRegister }) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [level, setLevel] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const resetForm = () => {
        setName('');
        setProfession('');
        setLevel('');
        setAddress('');
        setPhone('');
        setImage(null);
    };

    const handleRegister = () => {
        if (!name || !profession || !level || !address || !phone) {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Por favor, preencha todos os campos obrigatórios.',
            });
            return;
        }

        const newCard = { name, profession, level, address, phone, image };
        onRegister(newCard);
        resetForm();
        onClose();
    };

 
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permissão para acessar a galeria é necessária!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Cadastrar Profissional</Text>

                
                    <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                        <Text style={styles.imagePickerText}>Escolher Imagem (Opcional)</Text>
                    </TouchableOpacity>

               
                    {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

               
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />

           
                    <Picker
                        selectedValue={profession}
                        style={styles.picker}
                        onValueChange={(itemValue) => setProfession(itemValue)}
                    >
                        <Picker.Item label="Selecione a Profissão" value="" />
                        <Picker.Item label="Cardiologia" value="Cardiologia" />
                        <Picker.Item label="Radiologia" value="Radiologia" />
                        <Picker.Item label="Dentista" value="Dentista" />
                        <Picker.Item label="Pediatria" value="Pediatria" />
                        <Picker.Item label="Oftalmologia" value="Oftalmologia" />
                        <Picker.Item label="Psiquiatria" value="Psiquiatria" />
                        <Picker.Item label="Ginecologista" value="Ginecologista" />
                        <Picker.Item label="Ortopedia" value="Ortopedia" />
                        <Picker.Item label="Neurologia" value="Neurologia" />
                        <Picker.Item label="Urologia" value="Urologia" />
                    </Picker>

    
                    <Picker
                        selectedValue={level}
                        style={styles.picker}
                        onValueChange={(itemValue) => setLevel(itemValue)}
                    >
                        <Picker.Item label="Selecione o Nível" value="" />
                        <Picker.Item label="Tecnólogo" value="Tecnólogo" />
                        <Picker.Item label="Assistente" value="Assistente" />
                        <Picker.Item label="Estagiário" value="Estagiário" />
                        <Picker.Item label="Especialista" value="Especialista" />
                        <Picker.Item label="Trainee" value="Trainee" />
                        <Picker.Item label="Consultor" value="Consultor" />
                        <Picker.Item label="Coordenador" value="Coordenador" />
                        <Picker.Item label="Pesquisador" value="Pesquisador" />
                        <Picker.Item label="Professor" value="Professor" />
                    </Picker>

                
                    <TextInput
                        placeholder="Endereço"
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                    />

             
                    <TextInput
                        placeholder="Telefone"
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                    />

           
                    <TouchableOpacity onPress={handleRegister} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

             
                    <TouchableOpacity onPress={onClose} style={styles.buttonCancel}>
                        <Text style={styles.buttonCancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
       
            <Toast />
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    imagePicker: {
        backgroundColor: '#28a69d',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    imagePickerText: {
        color: '#fff',
        fontSize: 16,
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        fontSize: 16,
    },
    picker: {
        height: 50,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#28a69d',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
    },
    buttonCancel: {
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonCancelText: {
        color: '#a1a1a1',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default RegisterModal;

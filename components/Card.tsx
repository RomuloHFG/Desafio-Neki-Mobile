import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

interface CardProps {
    id: number;
    name: string;
    profession: string;
    image: string;
    level: string;
    address: string;
    phone: string;
    onDelete: (id: number) => void;
    onEdit: (id: number, newData: any) => void;
}

const Card: React.FC<CardProps> = ({ id, name, profession, image, level, address, phone, onDelete, onEdit }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [newData, setNewData] = useState({ name, profession, level, address, phone });
    const [localImage, setLocalImage] = useState(image);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("É necessário permitir o acesso à galeria!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setLocalImage(result.uri);
        }
    };

    const handleEdit = () => {
        onEdit(id, { ...newData, image: localImage });
        setEditModalVisible(false);
    };

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={{ uri: localImage }} style={styles.avatar} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{profession}</Text>
                </View>
                <View style={styles.actions}>
                    <IconButton
                        style={styles.iconButton}
                        icon={() => <MaterialIcons name="edit" size={20} color="black" />}
                        onPress={() => setEditModalVisible(true)}
                    />
                    <IconButton
                        style={styles.iconButton}
                        icon={() => <AntDesign name="delete" size={20} color="black" />}
                        onPress={() => onDelete(id)}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.cardFooter}>
                <Text style={styles.viewMoreText}>Ver Mais</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{name}</Text>
                        <Image source={{ uri: localImage }} style={styles.modalImage} />
                        <Text><strong>Nível: </strong>{level}</Text>
                        <Text><strong>Endereço: </strong>{address}</Text>
                        <Text><strong>Telefone: </strong>{phone}</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

   
            <Modal visible={editModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar {name}</Text>
                        <Button title="Escolher Imagem" onPress={pickImage} />

                        <Text style={styles.label}>Nome:</Text>
                        <TextInput
                            placeholder="Nome"
                            style={styles.input}
                            value={newData.name}
                            onChangeText={(text) => setNewData({ ...newData, name: text })}
                        />

                      
                        <Text style={styles.label}>Área de Atuação:</Text>
                        <Picker
                            selectedValue={newData.profession}
                            style={styles.picker}
                            onValueChange={(itemValue) => setNewData({ ...newData, profession: itemValue })}
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

                        <Text style={styles.label}>Nível de Atuação:</Text>
                        <Picker
                            selectedValue={newData.level}
                            style={styles.picker}
                            onValueChange={(itemValue) => setNewData({ ...newData, level: itemValue })}
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

                        <Text style={styles.label}>Endereço:</Text>
                        <TextInput
                            placeholder="Endereço"
                            style={styles.input}
                            value={newData.address}
                            onChangeText={(text) => setNewData({ ...newData, address: text })}
                        />

                      
                        <Text style={styles.label}>Telefone:</Text>
                        <TextInput
                            placeholder="Telefone"
                            style={styles.input}
                            value={newData.phone}
                            onChangeText={(text) => setNewData({ ...newData, phone: text })}
                        />

                        <TouchableOpacity onPress={handleEdit} style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setEditModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        padding: 5,
        shadowRadius: 5,
        marginHorizontal: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 60,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: "#eee"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 135
    },
    subTitle: {
        color: '#666',
        fontWeight: 'bold'
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    iconButton: {
        marginHorizontal: -5
    },
    cardFooter: {
        alignItems: 'center',
    },
    viewMoreText: {
        color: '#007BFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalImage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    saveButton: {
        marginTop: 10,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    picker: {
        height: 40,
        width: '100%',
        marginVertical: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
    },
});

export default Card;

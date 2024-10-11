import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Card from "@/components/Card";
import RegisterButton from "@/components/RegisterButton";
import RegisterModal from "@/components/RegisterModal";
import SearchBar from "@/components/SearchBar";
import * as Animatable from 'react-native-animatable';
import Carousel from "@/components/Carousel"; 

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [cards, setCards] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

 
    const handleRegister = (newCard: any) => {
        const newId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 1; 
        setCards([...cards, { ...newCard, id: newId }]);
    };

   
    const deleteCard = (id: number) => {
        console.log(`Deletando o card com id: ${id}`);
        setCards(cards.filter(card => card.id !== id)); 
    };

   
    const filteredCards = cards.filter((card) =>
        card.name.toLowerCase().includes(searchText.toLowerCase())
    );

   
    const editCard = (id: number, newData: any) => {
        setCards(cards.map(card => card.id === id ? { ...card, ...newData } : card));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.gradientLayer1} />
                <View style={styles.gradientLayer2} />
                <TouchableOpacity style={styles.logoCoracao}>
                    <Animatable.Image
                        animation="flipInY"
                        source={require("../assets/images/icon2.gif")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Ionicons name="log-out-outline" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <Carousel /> 

            <View style={styles.content}>
                <View style={styles.row}>
                    <RegisterButton onPress={() => setModalVisible(true)} title="Cadastrar Profissional" />
                    <SearchBar value={searchText} onChangeText={setSearchText} />
                </View>

                <FlatList
                    data={filteredCards}
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => (
                        <Card
                            id={item.id} 
                            name={item.name}
                            profession={item.profession}
                            level={item.level}
                            address={item.address}
                            phone={item.phone}
                            image={item.image}
                            onDelete={deleteCard}
                            onEdit={editCard} 
                        />
                    )}
                    ListEmptyComponent={<Text style={styles.noCardsText}>Nenhum card encontrado</Text>}
                />
            </View>

            <RegisterModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onRegister={handleRegister}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 50,
        position: 'relative', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    gradientLayer1: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: '#319fc9', 
        opacity: 0.8,
    },
    gradientLayer2: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        backgroundColor: '#9bd8ef', 
        opacity: 0.5, 
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noCardsText: {
        fontSize: 16,
        color: '#000',
        marginTop: 20,
    },
    logoCoracao: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        maxWidth: "90%",
        minWidth: "90%",
        marginBottom: 10,
        backgroundColor: '#9bd8ef', 
        borderRadius: 10,
        paddingHorizontal: 5,
        shadowRadius: 5,
    },
});  

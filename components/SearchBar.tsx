import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#a1a1a1" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Pesquisar"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '50%',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default SearchBar;

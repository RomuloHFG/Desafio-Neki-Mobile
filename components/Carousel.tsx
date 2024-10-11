import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";

const { width } = Dimensions.get("window");

const images = [
    require('../assets/images/plástica.jpg'),
    require('../assets/images/cardiologista.jpg'),
    require('../assets/images/dentista.jpg'),
    require('../assets/images/radiologista.png'),
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 

  
    const changeImage = (direction: "next" | "prev") => {
        if (direction === "next") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage("next");
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={images[currentIndex]} style={styles.image} resizeMode="cover" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
    },
    imageContainer: {
        width: '90%',
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10,
        shadowRadius: 10
    },
    image: {
        width: "100%",
        height: "100%",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Carousel;

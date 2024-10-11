import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get("window");

const images = [
    require('../assets/images/cardiologista.jpg'),
    require('../assets/images/dentista.jpg'),
    require('../assets/images/plástica.jpg'),
    require('../assets/images/radiologista.png'),
];

const ImageCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.carouselItem}>
                <Image source={item} style={styles.image} resizeMode="cover" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                layout={"default"}
                data={images}
                sliderWidth={width}
                itemWidth={width * 0.8}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
    },
    carouselItem: {
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
});

export default ImageCarousel;

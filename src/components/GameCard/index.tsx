import { TouchableOpacity, ImageBackground } from "react-native";

import { styles } from './styles';

export function GameCard() {
    return (
        <TouchableOpacity style ={styles.container}>
            <ImageBackground></ImageBackground>

        </TouchableOpacity>
    );
}
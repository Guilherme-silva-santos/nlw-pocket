import { ActivityIndicator, View } from "react-native";
import { colors } from "@/styles/colors";

import { styles } from "./styles";


export const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color={colors.green.base} />
        </View>
    )
}
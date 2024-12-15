import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 16,
    },
    details: {
        flex: 1,
    },
    title:{
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray[600], 
    },
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 8,
    }
});

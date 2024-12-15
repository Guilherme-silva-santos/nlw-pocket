import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";


export const styles = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.green.base,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    title:{
        color: colors.gray[100],
        fontFamily: fontFamily.bold,
        fontSize: 16,
    }
});

import { useFonts, Rubik_600SemiBold_Italic, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik";
import { Loading } from "@/components/loading";
import { colors } from "@/styles/colors";
import { Stack } from "expo-router";


export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold_Italic,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.gray[100] }
            }} />
    )
}
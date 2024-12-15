import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { colors } from "@/styles/colors";

import { styles } from "./styles";


type StepProps = {
    title: string,
    description: string,
    // this icon is a type of iconprops by tabler
    icon: React.ComponentType<IconProps>;
}
// Icon uppercase because it will be a component
export const Step = ({ title, description, icon: Icon }: StepProps) => {
    return (
        <View style={styles.container}>
           {Icon && <Icon size={24} color={colors.gray[500]} />}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}
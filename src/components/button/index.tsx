import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps as TableIconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

import { styles } from "./styles";


type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
}

const Button = ({children, style, isLoading = false, ...rest}: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} disabled={isLoading} {...rest}>
           {isLoading ? <ActivityIndicator color={colors.gray[100]} size="small" /> : children}
        </TouchableOpacity>
    )
}

const Title = ({children}: TextProps) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

type IconProps = TableIconProps & {
   icon: React.ComponentType<TableIconProps>;
}
const Icon = ({icon: Icon}: IconProps) => {
    return (
        <Icon color={colors.gray[100]} size={20} />
    )
}

Button.Icon = Icon;
Button.Title = Title;
export { Button };
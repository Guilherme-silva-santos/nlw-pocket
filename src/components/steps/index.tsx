import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Step } from "../step";


export const Steps = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Passos para usar o Nearby</Text>
            <Step 
             title="Encontre estabelecimentos" 
             description="Veja locais perto de você que são parceiros Nearby" 
             icon={IconMapPin}
            />
            <Step 
             title="Ative o cupom com QR Code" 
             description="Escaneie o código no estabelecimento para usar o benefício" 
             icon={IconQrcode}
            />
            <Step 
             title="Garanta vantagens perto de você" 
             description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
             icon={IconTicket} 
            />
        </View>
    )
}
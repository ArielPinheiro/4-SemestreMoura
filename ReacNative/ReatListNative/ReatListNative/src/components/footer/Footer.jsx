import { View, Text } from "react-native";
import { styles } from "./FooterStyle";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {year}, React List - Todos os direitos reservados
      </Text>
    </View>
  );
}
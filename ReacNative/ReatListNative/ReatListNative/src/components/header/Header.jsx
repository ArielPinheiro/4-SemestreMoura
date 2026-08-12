import { View, Text } from "react-native";
import { styles } from "./HeaderStyle";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React List</Text>
      <View style={styles.underline} />
    </View>
  );
}
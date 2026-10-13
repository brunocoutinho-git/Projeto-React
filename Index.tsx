import {
  ScrollView, 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá, seja bem-vindo(a)!
        </Text>
      <Text style={styles.title}>
          O que deseja comer hoje?
      </Text>
    </View>
    
  </ScrollView>
  );
}

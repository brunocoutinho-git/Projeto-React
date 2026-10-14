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
        <Text style={styles.greeting}>Olá, seja bem-vindo(a)!</Text>
        <Text style={styles.title}>
          Qual sabor de tapioca gostaria de provar hoje?
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.offer}>Oferta Especial!</Text>
        <Text style={styles.bannerTitle}>Promoção do dia!</Text>
        <Text style={styles.bannerText}>
          Compre 2 Tapiocas e ganhe 1 Água de Coco grátis!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Peça aqui</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Categorias</Text>

      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.emoji}>🌮</Text>
          <Text>Tapioca</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

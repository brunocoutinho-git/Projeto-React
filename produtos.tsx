import FoodCard from "@/components/FoodCard";
import { foods } from "@/constants/foods";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [cart, setCart] = useState<any[]>([]);
  const total = cart.reduce((soma, item) => soma + item.price, 0);
  const router = useRouter();

  function addToCart(food: any) {
    setCart((atual) => [...atual, food]);
  }

  function removeFromCart(index: number) {
    setCart((atual) => atual.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <ScrollView
      className="flex-1 bg-[#FFF8E7] px-4"
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho */}
      <View className="mt-8 mb-6 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-[#245C36]">Sabores</Text>

        <TouchableOpacity
          onPress={() => router.back()}
          className="rounded-xl bg-[#F1F5E9] px-4 py-2"
        >
          <Text className="font-bold text-red-700">Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* Produtos */}
      <View className="flex-row flex-wrap justify-between">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            emoji={food.emoji}
            onAdd={() => addToCart(food)}
          />
        ))}
      </View>

      {/* Carrinho */}
      <View className="mt-8 mb-4 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-[#245C36]">
          Carrinho ({cart.length})
        </Text>

        <Text className="text-xl font-bold text-[#245C36]">
          Total: R$ {total.toFixed(2)}
        </Text>
      </View>

      <View className="mb-6 rounded-2xl bg-[#F1F5E9] p-4">
        {cart.length === 0 ? (
          <Text className="text-center text-[#71816B]">
            Seu carrinho está vazio.
          </Text>
        ) : (
          cart.map((item, index) => (
            <View
              key={index}
              className="mb-2 flex-row items-center justify-between rounded-xl border border-[#D6DFC9] bg-white p-4"
            >
              <Text className="flex-1 font-bold text-[#245C36]">
                {item.emoji} {item.name}
              </Text>

              <Text className="mr-3 font-bold text-[#245C36]">
                R$ {item.price.toFixed(2)}
              </Text>

              <TouchableOpacity onPress={() => removeFromCart(index)}>
                <Text className="font-bold text-red-700">Excluir</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

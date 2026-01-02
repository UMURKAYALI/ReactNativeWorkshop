import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MessageDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mesaj Detayı</Text>
      <Text>id: {id}</Text>

      {/* burada id ile API'den mesajı çekip gösterirsin */}
    </View>
  );
}
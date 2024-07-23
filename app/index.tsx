import { Text, View } from "react-native";

const Bruh = () => {
    return (
      <View>
        <Text>Bruh...</Text>
      </View>
    )
  }
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Bruh/>
    </View>
  );
}

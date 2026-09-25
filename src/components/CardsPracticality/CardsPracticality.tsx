import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Carousel } from "react-native-reanimated-carousel";
export default function CardsPracticality() {
  const images = [
    require("@/src/assets/cashback.png"),
    require("@/src/assets/ativeConta.png"),
    require("@/src/assets/parcelar.png"),
  ];

  return (
    <>
      <View style={stylesCardsPract.container}>
        <Text style={stylesCardsPract.title}>Praticidade nas finanças</Text>
        <GestureHandlerRootView>
          <Carousel
            style={{
              width: 350,
              height: 180,
            }}
            loop
            autoplay
            autoplayInterval={3000}
            data={images}
            renderItem={({ item }) => (
              <Image source={item} style={stylesCardsPract.image} />
            )}
          />
        </GestureHandlerRootView>
      </View>
    </>
  );
}

const stylesCardsPract = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});

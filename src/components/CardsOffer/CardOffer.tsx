import { Image, StyleSheet, View } from "react-native";

export default function CardOffer() {
  return (
    <>
      <View style={stylesCardOffer.cardOffer}>
            <Image style={stylesCardOffer.image} source={require('../../assets/99Pay.png')} />
      </View>
    </>
  );
}

const stylesCardOffer = StyleSheet.create({
  cardOffer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "80%"
  },
  image: {
    width: 400,
    height: 140
  }
});

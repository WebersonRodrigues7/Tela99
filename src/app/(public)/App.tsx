import CardOffer from "@/src/components/CardsOffer/CardOffer";
import Header from "@/src/components/Header/Header";
import NavigationBar from "@/src/components/NavigationBar/NavigationBar";
import Position from "@/src/components/Position/Position";

import { StyleSheet, View } from "react-native";
export default function Home() {
  return (
    <>
      <View style={styles.main}>
        <Header />
        <Position/>
        <CardOffer />
        <NavigationBar />
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F7FC",
  },
});

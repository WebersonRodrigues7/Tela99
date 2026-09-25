import CardOffer from "@/src/components/CardsOffer/CardOffer";
import CardsPracticality from "@/src/components/CardsPracticality/CardsPracticality";
import Header from "@/src/components/Header/Header";
import Loading from "@/src/components/Loading/Loading";
import Map from "@/src/components/Map/Map";
import NavigationBar from "@/src/components/NavigationBar/NavigationBar";
import { getCurrentLocation } from "@/src/services/location";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );

  useEffect(() => {
    async function loadLocation() {
      const currentLocation = await getCurrentLocation();

      if (currentLocation) {
        setLocation(currentLocation);
      }
    }

    loadLocation();
  }, [location]);


  if (!location) {
    return <Loading setCurrentLocation={setLocation} />;
  }

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.topMain}>
            <Header />
            <Map />
          </View>
          <CardOffer />
          <CardsPracticality />
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F7FC",
  },
  content: {
    alignItems: "center",
  },
  topMain: {
    top: 0,

    position: "relative",
  },
});

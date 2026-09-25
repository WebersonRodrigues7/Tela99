import { getCurrentLocation } from "@/src/services/location";
import { searchDestination } from "@/src/services/routing/osrm";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MapView, { Polyline, Region } from "react-native-maps";

export default function Map() {
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>(null);

  const [route, setRoute] = useState<Location.LocationObjectCoords[]>([]);
  const [destination, setDestination] = useState("");
  const [lastDestination, setLastDestination] =
    useState<Location.LocationGeocodedAddress | null>(null);

  useEffect(() => {
    async function loadCurrentLocation() {
      const position = await getCurrentLocation();

      if (!position) return;

      setCurrentLocation(position);
    }

    loadCurrentLocation();
  }, []);

  if (!currentLocation) return;

  async function handleDestinationSearch() {
    if (!currentLocation) return;

    const result = await searchDestination(destination, currentLocation);

    if (!result) return;

    setRoute(result.route);

    const address = await Location.reverseGeocodeAsync(result.destination);

    if (address.length > 0) {
      setLastDestination(address[0]);
    }
  }

  const initialRegion: Region = {
    latitude: currentLocation.coords.latitude,
    longitude: currentLocation.coords.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  return (
    <>
      <View style={styles.locationContainer}>
        <MapView
          showsUserLocation
          initialRegion={initialRegion}
          style={styles.map}
        >
          <Polyline coordinates={route} strokeWidth={3} strokeColor="#304FFD" />
        </MapView>

        <View style={styles.searchContainer}>
          <View style={styles.destinationInputContainer}>
            <Entypo size={30} name="magnifying-glass" />

            <TextInput
              value={destination}
              onChangeText={setDestination}
              onSubmitEditing={handleDestinationSearch}
              placeholder="Para onde vamos?"
              style={styles.destinationInput}
            />
          </View>
        </View>

        <View style={styles.savedAddressesContainer}>
          <View style={styles.addressItem}>
            <Ionicons
              style={styles.addressIcon}
              name="timer-outline"
              size={27}
              color="black"
            />

            <Text>{lastDestination?.formattedAddress || "Destino"}</Text>
          </View>

          <View style={styles.addressItem}>
            <MaterialCommunityIcons
              style={styles.addressIcon}
              name="home-outline"
              size={27}
              color="black"
            />

            <Text>Casa</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  locationContainer: {
    position: "relative",
    width: 350,
    borderRadius: 20,
    overflow: "hidden",
    top: "30%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    zIndex: 1,
  },
  map: {
    width: 350,
    height: 200,
  },
  searchContainer: {
    position: "absolute",
    top: "55%",
    borderRadius: 20,
    zIndex: 1,
    width: "100%",
    height: 50,
    paddingLeft: 15,
    backgroundColor: "white",
  },
  destinationInputContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    height: 50,
    borderRadius: 12,
    boxShadow: "0px 2px 4px #0000000c",
  },
  destinationInput: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  savedAddressesContainer: {
    gap: 10,
    justifyContent: "center",
    backgroundColor: "#FEFEFE",
    borderRadius: 5,
    height: 100,
    paddingLeft: 15,
    paddingTop: 20,
  },

  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEFEFE",
    gap: 15,
  },
  addressIcon: {
    backgroundColor: "#ececec",
    borderRadius: 15,
    padding: 1,
  },
});

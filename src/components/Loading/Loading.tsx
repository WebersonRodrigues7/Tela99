import { getCurrentLocation } from "@/src/services/location";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
interface LoadingI {
  setCurrentLocation: (location: Location.LocationObject) => void
}
export default function Loading({setCurrentLocation}: LoadingI) {
  const [getPosition, setGetPosition] = useState(false);

  useEffect(() => {
    async function getLocation() {
      const location = await getCurrentLocation();
      if (!location) return;

      setCurrentLocation(location);
    }

    if (getPosition) {
      getLocation();
    }

  }, [getPosition]);

  
  return (
    <>
      <View style={stylesLoading.loadingView}>
        <Image source={require("@/src/assets/99logo.png")} />

        {!getPosition && (
          <Pressable
            onPress={() => setGetPosition(true)}
            style={stylesLoading.button}
          >
            <Text style={stylesLoading.textButton}>Permitir localização</Text>
          </Pressable>
        )}
      </View>
    </>
  );
}

const stylesLoading = StyleSheet.create({
  loadingView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFDD00",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3f78f4",
    height: 40,
    borderRadius: 8,
    padding: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});

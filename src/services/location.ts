import * as Location from "expo-location";

export async function getCurrentLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") return null;
  const currentPosition = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  });

  return currentPosition;
}

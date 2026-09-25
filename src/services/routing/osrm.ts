import * as Location from "expo-location";

export async function findRoute(
  destination: Location.LocationGeocodedLocation,
  currentLocation: Location.LocationObject,
) {
  const { latitude: startLatitude, longitude: startLongitude } =
    currentLocation.coords;

  const { latitude: destinationLatitude, longitude: destinationLongitude } =
    destination;

  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${startLongitude},${startLatitude};${destinationLongitude},${destinationLatitude}?overview=full&geometries=geojson`,
  );

  const data = await response.json();

  const coordinates = data.routes[0].geometry.coordinates;

  return coordinates.map(([longitude, latitude]: [number, number]) => ({
    latitude,
    longitude,
  }));
}

export async function searchDestination(
  destination: string,
  location: Location.LocationObject,
) {
  if (!destination.trim()) return;

  const geocoded = await Location.geocodeAsync(destination);

  if (geocoded.length === 0) return;

  const destinationFound = geocoded[0];

  const route = await findRoute(destinationFound, location);

  return {
    route,
    destination: destinationFound,
  };
}

import MapView from 'react-native-maps'

import { StyleSheet, View } from "react-native";

export default function Position() {
  return (
    <>
      <MapView style={style.maps}/>
    </>
  );
}

const style = StyleSheet.create({
  maps: {
    width: 300,
    height: 300
  }
})
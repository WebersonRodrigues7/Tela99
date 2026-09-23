import { EvilIcons, MaterialCommunityIcons } from "@/src/utils/Icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={stylesHeader.header}>
        <View style={stylesHeader.viewLeftHeader}>
          <EvilIcons
            name="user"
            size={50}
            style={{ fontWeight: "bold" }}
            color="black"
          />
          <Text style={stylesHeader.userName}>Olá, Usuário</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="line-scan" size={30} color="black" />
        </View>
      </View>
    </>
  );
}

const stylesHeader = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#FEE102",
    height: 140,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
  },
  viewLeftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

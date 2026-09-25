import {
  AlertModal,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@/src/utils/Icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function NavigationBar() {
  
  return (
    <>
      <View style={styleNavigationBar.navigationBar}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? styleNavigationBar.buttonCartPressed
              : styleNavigationBar.buttonCart
          }
        >
          <Text>
            <Ionicons size={30} name="car" />
          </Text>
        </Pressable>
        <Pressable
          onPress={AlertModal}
          style={({ pressed }) =>
            pressed
              ? styleNavigationBar.buttonNavPressed
              : styleNavigationBar.buttonNav
          }
        >
          <Text>
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={30}
              color="black"
            />
          </Text>
        </Pressable>
        <Pressable
          onPress={AlertModal}
          style={({ pressed }) =>
            pressed
              ? styleNavigationBar.buttonNavPressed
              : styleNavigationBar.buttonNav
          }
        >
          <Text>
            <FontAwesome5 size={30} name="box" />
          </Text>
        </Pressable>
        <Pressable
          onPress={AlertModal}
          style={({ pressed }) =>
            pressed
              ? styleNavigationBar.buttonNavPressed
              : styleNavigationBar.buttonNav
          }
        >
          <Text>
            <MaterialIcons size={30} name="attach-money" />
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styleNavigationBar = StyleSheet.create({
  navigationBar: {
    position: "absolute",
    top: "89%",
    zIndex: 5,
    backgroundColor: "white",
    width: "72%",
    gap: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  buttonCart: {
    backgroundColor: "#FEE003",
    padding: 15,
    borderRadius: 50,
  },
  buttonCartPressed: {
    backgroundColor: "#e2c800",
    padding: 15,
    borderRadius: 50,
  },
  buttonNav: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
  buttonNavPressed: {
    backgroundColor: "#f1f1f1",
    borderRadius: "50%",
    padding: 15,
  },
});
